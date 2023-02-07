import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail({ match }) {
  const { id } = useParams();
  return (
    <div>
      Post Details : {id}
    </div>
  )
}
  