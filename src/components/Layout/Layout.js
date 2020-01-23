import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flex: 1,
        padding: theme.spacing(5)
    },
}));


const Layout = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default Layout;
