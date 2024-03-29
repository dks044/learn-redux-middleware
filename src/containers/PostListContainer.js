import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';
import { Spinner } from 'react-bootstrap';

function PostListContainer() {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    if (data) return;   //만약 데이터가 이미 존재한다면 요청을 하지 않도록
    dispatch(getPosts());
  }, [data, dispatch]);

  if (loading) return (
    <Spinner animation="border" role="status">
      
    </Spinner>
  )
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;
