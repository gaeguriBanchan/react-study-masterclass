import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Search() {
  const location = useLocation();
  // 받아온 키워드 확인하는 javascript 함수
  const keyword = new URLSearchParams(location.search).get('keyword');
  console.log(keyword);

  return <div>Search</div>;
}
