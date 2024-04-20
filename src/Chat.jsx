import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    dialog: {
        width: '400px',
        height: '600px',
        backgroundColor: '#f5f5f5',
        color: 'black',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    sendButton: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkgreen',
        },
    },
    cancelButton: {
        backgroundColor: 'red',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkred',
        },
    },
}));

const Chat = ({ open, handleClose }) => {
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
            <DialogTitle>Chat</DialogTitle>
            <DialogContent style={{ flex: 1, overflowY: 'auto' }}>

            </DialogContent>
            <DialogActions>
                <TextField
                    className={classes.textField}
                    label="Type a message..."
                    fullWidth
                />
                <Button className={classes.sendButton} onClick={handleClose} color="primary">
                    Send
                </Button>
                <Button className={classes.cancelButton} onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Chat;
