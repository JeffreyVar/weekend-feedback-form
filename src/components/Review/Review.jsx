import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';

function Review() {

    // useSelector access reducers in store
    const history = useHistory();
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    // Sends feedback to database
    const submitFeedback =() => {
        axios.post('/feedback', {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
            })
        .then (response => {
            console.log(response.data);
        })
        .catch( error => {
            console.log(error);
            alert('Error submitting feedback to server.')
        });
        history.push('/success');
    };

    // Edits functions sends user to separate page to edit, routes directly from edit page to review
    function editFeeling() {
        history.push('/feelingedit')
    }

    function editUnderstanding() {
        history.push('/understandingedit')
    }

    function editSupport() {
        history.push('/supportedit')
    }

    function editComments() {
        history.push('/commentsedit')
    }

    return (
        <div>
            <h1>Review Your Feedback</h1>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td id="feedback-column">Feelings</td>
                        <td id="rating-column">{feeling}</td>
                        <td id="button-column">
                            <Button 
                            size='small' 
                            variant='contained' 
                            onClick={editFeeling}>Edit
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td id="feedback-column">Understanding</td>
                        <td id="rating-column">{understanding}</td>
                        <td id="button-column">
                            <Button 
                            size='small' 
                            variant='contained' 
                            onClick={editUnderstanding}>Edit
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td id="feedback-column">Support</td>
                        <td id="rating-column">{support}</td>
                        <td id="button-column">
                            <Button 
                            size='small' 
                            variant='contained' 
                            onClick={editSupport}>Edit
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td id="feedback-column">Comments</td>
                        <td id="comments">{comments}</td>
                        <td id="button-column">
                            <Button 
                            size='small' 
                            variant='contained' 
                            onClick={editComments}>Edit
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <br />
            <br />
            <br />

            <Button 
                variant="contained"
                onClick={submitFeedback}>Submit
            </Button>
        </div>
    )
}

export default Review;