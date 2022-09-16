import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";

  // Categories의 NavLink를 통해 받은 url 파라미터를 params에 저장
  // NewsList에 사용할 수 있게 category를 넘겨주었다

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
