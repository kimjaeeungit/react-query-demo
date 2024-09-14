import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePostQuery } from './hooks/usePosts';

//api 호출하기!
const ReactQueryPage = () => {
  const { data, isLoading, isError, error, refetch } = usePostQuery();

  if (isLoading) {
    return <h1>Loaging....</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data?.map((item) => (
        <div>{item.title}</div>
      ))}
      <button onClick={refetch}>post 리스트 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;
