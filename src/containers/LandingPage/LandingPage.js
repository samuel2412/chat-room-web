import React, { useState, useEffect } from 'react';
import api from '../../services/axios-instance';
import firebase from 'firebase';

import { makeStyles } from '@material-ui/core/styles';

import Rooms from '../../components/Rooms/Rooms';
import Chat from '../../components/Chat/Chat';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        [theme.breakpoints.down(900)]: {
            flexDirection: 'column',
        },
    },

}));

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKe8w74GIboseo_pwogHg5DT2VMMQF1iQ",
    authDomain: "chat-room-4fe30.firebaseapp.com",
    databaseURL: "https://chat-room-4fe30.firebaseio.com",
    projectId: "chat-room-4fe30",
    storageBucket: "chat-room-4fe30.appspot.com",
    messagingSenderId: "515096514770",
    appId: "1:515096514770:web:ebd8e51fc7ec7ce8fd1d0b",
    measurementId: "G-3LVNDTXBKD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var FIREBASE_MESSAGES_REF = firebase.database().ref('messages');
var FIREBASE_ROOMS_REF = firebase.database().ref('rooms');

const LandingPage = props => {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const [currentRoom,setCurrentRoom] = useState();
    const [messages, setMessages] = useState([]);
    const [messageToSend, setMessageToSend] = useState('')


    useEffect(() => {

        FIREBASE_ROOMS_REF.on("value", (snapshot) => {
            snapshot = snapshot.val();
            const fetchedRooms = [];
            for (let key in snapshot) {
                fetchedRooms.push({
                    id: key,
                    name: snapshot[key].name
                });
            }
            setRooms(fetchedRooms)
            setCurrentRoom(fetchedRooms[0])
            
            FIREBASE_MESSAGES_REF.on("value", (snapshot) => {
                snapshot = snapshot.val();
                const fetchedMessages = [];
                for (let key in snapshot) {
                    fetchedMessages.push({
                        id: key,
                        roomId: snapshot[key].roomId,
                        text: snapshot[key].text,
                        userName: snapshot[key].userName
                    });
                }
                setMessages(fetchedMessages)

            });

        });

    }, [])


    const sendMessage = (event) => {
        event.preventDefault();

        api.post(`messages.json`,
            {
                roomId: currentRoom.id,
                userName: "Samuel",
                text: messageToSend
            }
        )
            .then(response => {
                const newMessage = {
                    id: response.data.name,
                    roomId: currentRoom.id,
                    userName: "Samuel",
                    text: messageToSend
                }
                setMessages([...messages, newMessage])
                setMessageToSend('')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const changeRoom = (room) => {
        setCurrentRoom(room);
    }

    
    return (
        <div className={classes.root}>
            <>
                <Rooms rooms={rooms} changeRoom={changeRoom}/>
                <Chat messages={messages.filter(message =>  message.roomId === currentRoom.id)}
                    sendMessage={sendMessage}
                    setMessageToSend={setMessageToSend}
                    messageToSend={messageToSend} />
            </>
        </div>


    );
}

export default LandingPage;
