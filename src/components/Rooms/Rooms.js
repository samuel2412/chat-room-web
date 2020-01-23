import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        width: '30%',
        height: '100%',
        padding: theme.spacing(1),
        border: '1px solid',
        borderColor: '#fff',
        overflowY: 'auto',
        overflowX: 'auto',

        [theme.breakpoints.down(900)]: {
            width: '100%',
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

    return (
        <div className={classes.root}>

            {props.rooms.map(room => (
                <Button className={classes.room} >{room.name}</Button>
            ))}

        </div>
    );
}
export default Rooms;