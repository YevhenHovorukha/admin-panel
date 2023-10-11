import { useState } from "react";

import IdeasCard from "../../components/IdeasCard";
import { IDEAS_DATA } from "../../constants/mocks";

import { StyledInfinityScroll } from "./styled";

const IdeasPage = () => {
  const [ideasData, setIdeasData] = useState(IDEAS_DATA);
  const [hasMore, setHasMore] = useState(true);
  const getMoreData = () => {
    setIdeasData([...ideasData, ...IDEAS_DATA]);
  };
  return (
    <StyledInfinityScroll
      dataLength={ideasData.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<p>...Loading</p>}
    >
      {ideasData.map((ideaData) => (
        <IdeasCard key={ideaData.id} {...ideaData} />
      ))}
    </StyledInfinityScroll>
  );
};

export default IdeasPage;
