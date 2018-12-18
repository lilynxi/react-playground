import React from 'react';

const CommentDetail = ({item}) => {
  return (
    <div className="comment">
          <a href="/" className="avatar"><img alt="avatar"  /></a>
          <div className="content"><a href="/" className="author">{item.name}</a>
            <div className="metadata"><span className="date">{item.bla}</span></div>
            <div className="text">asdf</div>
          </div>
        </div>
  );
};

export default CommentDetail;
