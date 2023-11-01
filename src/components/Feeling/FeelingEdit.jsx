import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import '../App/App.css'


function FeelingEdit() {

    // Store the rating in local state
    let [feelingRating, setFeelingRating] = useState('');

    // Set state for displaying error for invalid user input 
    let [displayError, setDisplayError] = useState(false);

    // Sets value in input field to feelingRating
    const storeFeeling = (event) => {
        setFeelingRating(event.target.value);
    }

    const dispatch = useDispatch();
    const history = useHistory();
    const submitFeeling = () => {
        // Conditional potentally changes state for displaying error Alert based on user input
        // User must input value between 1 & 5, or Alert will display
        if (feelingRating < 1 || feelingRating > 5) {
            setDisplayError(true);
        // Dispatches rating to store ('const feeling' in index.js)
        } else {
            dispatch({ type: 'SUBMIT_FEELING', payload: feelingRating})
            // Empties input field
            setFeelingRating('');
            // Navigates to next page
            history.push('/review');
            }
    };

    return (
        <div>
            <h1>Please rate how you are feeling today:</h1>
           
            <br />
            <br />

            <TextField
                variant="outlined"
                label="Feelings?"
                helperText="Please enter a value between 1-5"
                id="input-field"
                type='number'
                size="small"
                InputLabelProps={{className: 'label'}}
                inputProps={{ 
                    inputMode: 'numeric', 
                    pattern: '[1-5]*',
                    min: '1',
                    max: '5', 
                    }}
                // Calls function to set feelingRating to input value 
                onChange={storeFeeling}
                value={feelingRating}
            />

            <Button 
                variant="contained"
                onClick={submitFeeling}
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

export default FeelingEdit;