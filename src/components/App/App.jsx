// React
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Styling
import './App.css';

// Components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success'
import FeelingEdit from '../Feeling/FeelingEdit';
import UnderstandingEdit from '../Understanding/UnderstandingEdit';
import SupportEdit from '../Support/SupportEdit';
import CommentsEdit from '../Comments/CommentEdit';
import Admin from '../Admin/Admin';

function App() {

  return (
    
      <div className='App'>
        <Header />

        <Router>
          <Route exact path="/" component={Feeling} />
          <Route path="/feelingedit" component={FeelingEdit} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/understandingedit" component={UnderstandingEdit} />
          <Route path="/support" component={Support} />
          <Route path="/supportedit" component={SupportEdit} />
          <Route path="/comments" component={Comments} />
          <Route path="/commentsedit" component={CommentsEdit} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Success} />
          <Route path="/admin" component={Admin} />
        </Router>

      </div>
  );
}

export default App;
