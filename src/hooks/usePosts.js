import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const fetchPost = () => {
  //const id = queryData.queryKey[1];
  return axios.get(`http://localhost:3004/posts`);
};

export const usePostQuery = () => {
  return useQuery({
    queryKey: ['posts'], //디테일한 데이터 가져올때 쓰는것
    queryFn: () => fetchPost(),
    retry: 1,
    //staleTime: 30000, //30초간 api호출 안함
    //gcTime: 10000, //10초만 캐시가 유지 (staleTime이 길어도 cache가 없으면 다시 부름)
    select: (data) => {
      return data.data;
    },
    //refetchInterval: 3000, //3초마다 Api 호출
    //refetchOnMount: false, //컴포넌트가 시작될떄 호출 할지 말지 stale보다 좀 강력?
    //refetchOnWindowFocus: true, //이 창에 포커스가 되면 리프래쉬, 사용자입장에서는 항상 최신 데이터 봄
    //enabled: false, //초기에 api호출 안됨 기본:true
  });
};
