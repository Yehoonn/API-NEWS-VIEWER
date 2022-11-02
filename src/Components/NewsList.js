import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const LoadingBox = styled.div`
  width: 1500px;
  height: 700px;
  border: 10px solid black;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
`;

const NewsBox = styled.div`
  overflow: auto;
  width: 1500px;
  height: 700px;
  border: 10px solid black;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 10px;
  }
`;

// 데이터를 호출하여 넘겨주는 컴포넌트
// NewsPage에게 인수로 넘겨 받은 category의 값에 따라 다른 데이터를 요청한다
// category가 변할때마다 useEffect 함수가 실행
// loading의 상태에 따라 다른 요소를 보여주며
// data를 받아오지 못하면 null, 받아 온다면 데이터의 배열 요소만큼 NewsItem을 그려낸다

const NewsList = ({ category }) => {
  console.log("hello");
  const key = useRef(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&category=${
            category === "all" ? "" : category
          }&apiKey=6ea529cf7d0447548adcc9c14a57e2a2`
        );
        setData(res.data.articles);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, [category]);

  if (loading) {
    return <LoadingBox>로딩 중입니다</LoadingBox>;
  }

  if (!data) {
    return null;
  }

  let newList = data.map((value) => {
    key.current += 1;
    return <NewsItem key={key.current} data={value}></NewsItem>;
  });

  return <NewsBox>{newList}</NewsBox>;
};

export default NewsList;
