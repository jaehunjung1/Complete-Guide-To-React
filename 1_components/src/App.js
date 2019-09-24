import React from 'react';

import CommentDetail from './Components/CommentDetail'
import ApprovalCard from "./Components/ApprovalCard";

import './App.css';

function App() {
  return (
    <div className="App">
      <ApprovalCard>
        <CommentDetail
          author={'Jay'}
          date={'Today at 9:00AM'}
          text={'Hi there!'}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={'Celine'}
          date={'Today at 9:50AM'}
          text={'What\'s up?'}/>
        </ApprovalCard>
    </div>
  );
}

export default App;
