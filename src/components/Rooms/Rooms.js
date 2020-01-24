import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    root: {
        width: '30%',
        height: '100%',
        padding: theme.spacing(1),
        border: '1px solid',
        borderColor: '#fafafa',
        overflowY: 'auto',
        overflowX: 'auto',

        [theme.breakpoints.down(900)]: {
            width: '100%',
            height: '30%',
        },
    },

    room: {
        lineHeight: '2',
        margin: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: '3px',
        paddingBottom: '3px',
        backgroundColor: 'rgba(255, 255, 258, 0.1)',
        borderRadius: '12px'
    },
}));

const Rooms = props => {
    const classes = useStyles();

    let content = (
        <CircularProgress color='inherit' />
    );

    if (props.rooms) {
        content = (

            props.rooms.map(room => (
                <Button
                onClick={()=>props.changeRoom(room)}
                key={room.id}
                className={classes.room}
                >{room.name}</Button>
            ))


        );
    }

    return (
        <div className={classes.root}>
            {content}
        </div>
    );
}
export default Rooms;