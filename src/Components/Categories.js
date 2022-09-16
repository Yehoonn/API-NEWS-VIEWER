import { NavLink } from "react-router-dom";
import styled from "styled-components";

// 카테고리 데이터, 쿼리에 따른 결과값을 받기 위해 엔드포인트를 맞췄다

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

// 카테고리 박스 스타일링

const CategoryBox = styled.div`
  border: 1px solid gray;
  display: flex;
  padding: 1rem;
  width: 768px;
  justify-content: center;
  gap: 20px;
`;

// 카테고리 글씨 스타일링

const Category = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: salmon;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;

// 카테고리의 데이터 만큼 요소를 생성, 데이터에 맞는 name을 링크로 설정했다
// NavLink의 to가 라우팅 되면 isActive가 활성화되며 클래스가 설정된다

const Categories = () => {
  return (
    <CategoryBox>
      {categories.map((value) => {
        return (
          <Category
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={`/${value.name}`}
          >
            {value.text}
          </Category>
        );
      })}
    </CategoryBox>
  );
};

export default Categories;
