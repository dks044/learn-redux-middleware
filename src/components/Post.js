import React from 'react';

function Post({ post }) {
  const { title, body,id } = post;
  return (
    <div>
      <h1>{title}</h1>
      <h3>이녀석의 id:{id}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;