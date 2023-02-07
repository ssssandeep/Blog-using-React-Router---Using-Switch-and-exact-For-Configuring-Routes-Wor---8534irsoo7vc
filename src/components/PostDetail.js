import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail({ match }) {
  const { id } = useParams();
  return (
    <h1>
      Post Details : {id}
    </h1>
  )
}
  