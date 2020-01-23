import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

const LandingPage = props => {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        axios.get('https://us-central1-chat-room-4fe30.cloudfunctions.net/app/room')
            .then(response => {
                //console.log(response)
                setRooms(response.data)
            })
            .catch(error => {
                console.log(error)
            })

        axios.get(`https://us-central1-chat-room-4fe30.cloudfunctions.net/app/message/5e2a209737e2481338c12a92`)
            .then(response => {
                //console.log(response)
                setMessages(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

   /*  const loadMessages = (roomId = rooms[0]._id) => {
        axios.get(`https://us-central1-chat-room-4fe30.cloudfunctions.net/app/message/${roomId}`)
            .then(response => {
                console.log(response)
                setMessages(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
 */
    return (
        <div className={classes.root}>
            <>
                <Rooms rooms={rooms} />
                <Chat messages={messages} />
            </>
        </div>


    );
}

export default LandingPage;
