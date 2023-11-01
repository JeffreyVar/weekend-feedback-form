import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

function Success() {

    const history = useHistory();
    const newFeedback = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>Thank you for your feedback!</h1>
            <br />
            <br />
            <Button 
                variant="contained"
                onClick={newFeedback}>Leave New Feedback
            </Button>
            
        </div>
    )
}

export default Success;