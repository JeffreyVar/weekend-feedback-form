import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function SupportEdit() {

    // Store the rating in local state
    let [supportRating, setSupportRating] = useState('');

    // Set state for displaying error for invalid user input 
    let [displayError, setDisplayError] = useState(false);

    // Sets value in input field to supportRating
    const storeSupport = (event) => {
        setSupportRating(event.target.value);
    }

    const dispatch = useDispatch();
    const history = useHistory();
    const submitSupport = () => {
        // Conditional potentally changes state for displaying error Alert based on user input
        // User must input value between 1 & 5, or Alert will display
        if (supportRating < 1 || supportRating > 5) {
            setDisplayError(true);
        } else {
            // Dispatches rating to store ('const support' in index.js)
            dispatch({ type: 'SUBMIT_SUPPORT', payload: supportRating})
            setSupportRating('');
            history.push('/review');
        }
    };

    return (
        <div>
            <h1>Please rate how well you feel supported:</h1>
            <br />
            <br />

            <TextField
                variant="outlined"
                label="Support?"
                helperText="Please enter a value between 1-5"
                id="input-field"
                type='number'
                size="small"
                inputProps={{ 
                    inputMode: 'numeric', 
                    pattern: '[1-5]*',
                    min: '1',
                    max: '5', }}
                // Calls function to set feelingRating to input value 
                onChange={storeSupport}
                value={supportRating}
            />

            <Button 
                variant="contained"
                onClick={submitSupport}
                id="button" >Next
            </Button>

            <br />
            <br />
            <br />

            {/* Conditional rendering to display only if displayError is true */}
            {displayError && (
                <Alert variant="filled" severity="error">Please enter a value between 1-5.</Alert>
            )}
            

        </div>
    );
}

export default SupportEdit;