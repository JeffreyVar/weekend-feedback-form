import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';

function Admin() {

  // Feedback data is stored in local state

  const [feedbackList, setFeedbackList] = useState([])

  // GET route for feedback data

  const fetchFeedback = () => {
      axios.get('/feedback')
      .then(response => {
        console.log(response.data);
        setFeedbackList(response.data)
      })
        .catch(error => {
          console.log(error);
        });
    }

  // DELETE route for feedback item, takes in id
  
  const deleteFeedbackItem = (listId) => {
    axios.delete(`/feedback/${listId}`)
    .then((response) => {
      fetchFeedback();
    })
    .catch((error) => {
        console.log('Error', error);
        alert('Something went wrong');
    });
  } 
  
  // Displays feedback on page on page load

  useEffect(() => {
    fetchFeedback();
  }, []);
  
  return (
      <>
          <h1>Feedback Results</h1>

          <table>
            <tbody id="list">
              
                <tr>
                  <th>Feeling</th>
                  <th>Understanding</th>
                  <th>Support</th>
                  <th>Comments</th>
                  <th>Delete</th>
                  
                </tr>
                {feedbackList.map(list => (
                <tr key={list.id}>
                  <td>{list.feeling}</td>
                  <td>{list.understanding}</td>
                  <td>{list.support}</td>
                  <td>{list.comments}</td>
                  <td><Button 
                    variant="outlined" 
                    size="small" 
                    onClick={() => deleteFeedbackItem(list.id)}>Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </table>

      </>
  )
}

export default Admin;