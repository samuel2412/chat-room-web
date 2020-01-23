import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
    chat: {
        width: '100%',
        height: '100%',
        marginLeft: theme.spacing(3),
        padding: theme.spacing(1),
        border: '1px solid',
        borderColor: '#fff',
        flexDirection: 'row',
        position: 'relative',
        [theme.breakpoints.down(900)]: {
            height: '85%',
            marginLeft: '0',
            marginTop: theme.spacing(3)
        },
    },
    messages:{
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

    return (
        <div className={classes.chat}>
            <div className={classes.messages}>
            {props.room.messages.map(message => (
                <>
                    <Typography className={classes.message} variant='body1' component='p' >
                        <span  >{`${message.userName}: ${message.message === null ? '' : message.message}`}</span>
                    </Typography>

                </>
            ))}
            </div>
            <form>
                <TextField
                    id="messege"
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
                                <IconButton>
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />

            </form>
        </div>
    );
}
export default Chat;