import React from 'react';

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
    const rooms = [
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
        {"messages":[{"userName":"samuel2412","message":"primeira mensagem da sala"},{"userName":"samuel2412","message":"segunda mensagem da sala"},{"userName":"KamiNoKage","message":null},{"userName":"KamiNoKage","message":"Kami..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."},{"userName":"KamiNoKage","message":"Agora está no firebase..."}],"_id":"5e28c3ac671a3637105c4f45","name":"Teste room","__v":15},
    
    
    ]

    return (
        <div className={classes.root}>
            <Rooms rooms={rooms} />
            <Chat  room={rooms[0]} />
        </div>


    );
}

export default LandingPage;
