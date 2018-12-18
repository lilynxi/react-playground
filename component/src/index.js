import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const data = [
  {
    name: "Lisa",
    bla: "blubb",
  },
  {
    name: "alex",
    bla: "blubb",
  },
  {
    name: "bla",
    bla: "blubb",
  },
];



const App = () => {
  return (
    //data.map((item) => <CommentDetail item={item} key={item.name} />)
    //data.map((item) => <ApprovalCard item={item} key={item.name} />)
    data.map((item) => <ApprovalCard item={item} key={item.name}>
      <CommentDetail item={item} />
    </ApprovalCard>
    
    )
  );


};

ReactDOM.render(<App/>,document.querySelector('#root'));