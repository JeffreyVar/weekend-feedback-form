import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CommentsEdit() {

    //store the comments in local state
    let [comments, setComments] = useState('');

    const storeComments = (event) => {
        setComments(event.target.value);
    }

    const dispatch = useDispatch();
    const history = useHistory();
    const submitComments = () => {
        dispatch({ type: 'SUBMIT_COMMENTS', payload: comments})
        setComments('');
        history.push('/review');
    };

    return (
        <div>
            <h1>Please leave any comments you would like to share:</h1>
            <br />
            <br />

            <TextField
                variant="outlined"
                label="Comments?"
                id="comment-field"
                size="small"
                onChange={storeComments}
            />

            <Button 
                variant="contained" 
                onClick={submitComments}
                id="button" >Next
            </Button>
        
        </div>
    );
}

export default CommentsEdit;