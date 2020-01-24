import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    chat: {
        width: '100%',
        height: '100%',
        marginLeft: theme.spacing(3),
        padding: theme.spacing(1),
        border: '1px solid',
        borderColor: '#fafafa',
        flexDirection: 'row',
        position: 'relative',
        [theme.breakpoints.down(900)]: {
            height: '85%',
            marginLeft: '0',
            marginTop: theme.spacing(3)
        },
    },
    messages: {
        height: '85%',
        overflowY: 'auto',
    },
    message: {
        lineHeight: '2',
        margin: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: '3px',
        paddingBottom: '3px',
        backgroundColor: 'rgb(255,255,255,0.1)',
        borderRadius: '15px'
    },
    textField: {
        position: 'absolute',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        bottom: 0,
        left: 0,
        zIndex: 5
    }

}));


const Chat = props => {
    const classes = useStyles();


    let content = (
        <CircularProgress color='inherit' />
    );

    if (props.messages) {
        content = (
            <>
                <div className={classes.messages}>
                    {props.messages.map(message => (

                        <Typography key={message.id} className={classes.message} variant='body1' component='p' >
                            <span  >{`${message.userName}: ${message.text === null ? '' : message.text}`}</span>
                        </Typography>


                    ))}
                </div>
                <form onSubmit={props.sendMessage}>
                    <TextField
                        aria-label="Digite uma mensagem"
                        value={props.messageToSend}
                        onChange={event => props.setMessageToSend(event.target.value)}
                        className={classes.textField}
                        placeholder="Digite uma mensagem..."
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton type="submit">
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />

                </form>
            </>
        );
    }

    return (
        <div className={classes.chat}>
            {content}
        </div>
    );
}
export default Chat;