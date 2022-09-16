import styled from "styled-components";

const NewsBox = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const NewsTitle = styled.div`
  font-size: 1.3rem;

  &:hover {
    color: red;
  }
`;

const NewsDescription = styled.div`
  width: 500px;
`;

const NewsLink = styled.a``;

const NewsImg = styled.img`
  width: 300px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
`;

const NewsTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// 뉴스 리스트에게 받은 데이터를 토대로 실질적인 뉴스 아이템을 그려내는 컴포넌트
// data 배열 요소 안의 객체 데이터 (urlToImage,url,title,description)을 사용한다

const NewsItem = ({ data }) => {
  return (
    <NewsBox>
      <NewsImg src={data.urlToImage} alt="이미지를 찾을 수 없습니다"></NewsImg>
      <NewsTitleBox>
        <NewsLink href={data.url}>
          <NewsTitle>{data.title}</NewsTitle>
        </NewsLink>
        <NewsDescription>{data.description}</NewsDescription>
      </NewsTitleBox>
    </NewsBox>
  );
};

export default NewsItem;
