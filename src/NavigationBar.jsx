import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Chat from './Chat';

const useStyles = makeStyles((theme) => ({
    logo: {
        flexGrow: 1,
        color: 'white',
    },
    
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '20%',
    },
    buttons: {
        '& button': {
            backgroundColor: 'transparent',
            color: 'white',
            '&:hover': {
                backgroundColor: 'white',
                color: 'black',
            },
        },
    },
}));


const NavigationBar = () => {
    const classes = useStyles();
    const [chatOpen, setChatOpen] = useState(false);

    const handleChatOpen = () => {
        setChatOpen(true);
    };

    const handleChatClose = () => {
        setChatOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" style={{ backgroundColor: 'black', color: 'white' }}>
                <Toolbar className={`nav mb-1 d-grid ${classes.buttons}`}>
                    <div className={classes.logo}>
                        <img src="https://th.bing.com/th/id/OIP.hqJIWRjDJQDZnjMQ_PKTVgHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7" alt="Logo" height="50" />
                    </div>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            endAdornment={<SearchIcon />}
                        />
                    </div>
                    <div>
                        <Button color="inherit" onClick={handleChatOpen}>
                            
                        </Button>
                        <Button color="inherit">Login </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Chat open={chatOpen} handleClose={handleChatClose} />
        </>
    );
};

export default NavigationBar;
