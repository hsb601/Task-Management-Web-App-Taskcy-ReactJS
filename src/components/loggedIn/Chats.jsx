import { useState, useRef } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  Sidebar,
  ConversationList,
  Conversation,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
 

} from "@chatscope/chat-ui-kit-react";
import imageSrc from "../assets/01.jpg";
import imageSrc2 from "../assets/02.jpg";
import imageSrc3 from "../assets/profile_icon.jpg";
import { Header } from "../loggedout/header";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  
  const convers = [{

              name:"Doe",
              lastSenderName:'Doe',
              info:'Hi', 
              img: imageSrc,   
              lastSeen: new Date(), 
  },
  {

    name:"John",
    lastSenderName:'Haseeb',
    info:'what Happend',
    img:imageSrc2,
    lastSeen:  new Date(), 
   
 
},
]
const getTimeElapsed = (lastSeen) => {
  const currentTime = new Date();
  const lastSeenDate = new Date(lastSeen); // Convert lastSeen to a Date object
  const timeDifference = currentTime.getTime() - lastSeenDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `Last seen: ${days} days ago`;
  } else if (hours > 0) {
    return `Last seen: ${hours} hours ago`;
  } else if (minutes > 0) {
    return `Last seen: ${minutes} minutes ago`;
  } else {
    return `Last seen: ${seconds} seconds ago`;
  }
};

convers.forEach(conversation => {
  conversation.lastSeen = getTimeElapsed(conversation.lastSeen);
});
const onConversationClick = (conversation) => {
  setSelectedConversation(conversation);
  console.log(conversation);
};
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));





  function onSendMessage(message) {
    const newMessage = {
      text: message,
      sender: 'Haseeb', // Assuming the sender is always 'Haseeb'
      sentTime: new Date().toLocaleTimeString(), // Get current time
      direction: 'outgoing',
      position: 'single',
      avatar: imageSrc3, // Assuming Haseeb's avatar is always the same
    };

    // Update the messages array by adding the new message
    setMessages([...messages, newMessage]);
  }
  const filteredMessages = selectedConversation
    ? messages.filter(message => message.sender === selectedConversation)
    : [];
  return (

    <div style={style.Container} >
    <Box sx={{ flexGrow: 1, }} >
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'mediumpurple' }}
          >
            Chat Room
          </Typography>
          <Search sx={{
            backgroundColor: 'mediumpurple',
            '&:hover': {
              backgroundColor: 'plum',
            },
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

    <MainContainer>
      <Sidebar position="left" >
        <ConversationList>
          {convers.map((conversation, index) => (
            <Conversation
              key={index}
              name={conversation.name}
              lastSenderName={conversation.lastSenderName}
              info={conversation.info}
              onClick={() => onConversationClick(conversation)}
            >
              <Avatar src={conversation.img} />
            </Conversation>
          ))}
        </ConversationList>
      </Sidebar>
      <ChatContainer>

          <ConversationHeader >
          <Avatar src={selectedConversation ? selectedConversation.img : imageSrc3} />
            <ConversationHeader.Content userName={selectedConversation ? selectedConversation.name : 'User'} info={selectedConversation ? selectedConversation.lastSeen: 'Last seen: Nan'} />
          </ConversationHeader>
      
        <MessageList style={style.messageSend}>
          <Message
            model={{
              message: 'kese ho',
              sender: 'Doe',
              sentTime: 'just now',
              direction: 'incoming',
              position: 'single',
            }}
            avatarSpacer
          >
            <Avatar src={imageSrc} />
          </Message>
          {filteredMessages.map((message, index) => (
            <Message
              key={index}
              model={{
                message: message.text,
                sender: message.sender,
                sentTime: message.sentTime,
                direction: message.direction,
                position: message.position,
              }}
              avatarSpacer
            >
              <Avatar src={message.avatar} />
            </Message>
          ))}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={onSendMessage} style={style.messageSendIcon} />
      </ChatContainer>
    </MainContainer>
  </div>
  )
}
export default Chat;
const style = {

  user: {
    width: "100%",
    margin: "0%",
    backgroundColor: "mediumpurple",
  },
  Container: {
    position: "relative",
    height: '80.9%',
    fontWeight: "bold",

  },
  background: {
    backgroundColor: "mediumpurple",
  },
  messageSend: {
    backgroundColor: 'rgb(232, 231, 235)',
    fontSize: 14,

  },
  messageSendIcon: {
    backgroundColor: 'white',
    fontSize: 14,

  }

};