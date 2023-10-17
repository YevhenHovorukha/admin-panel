import ChartBox from "../../components/ChartBox";
import OverviewChart from "../../components/ChartComponents/OverviewChart";
import ChartInfoItem from "../../components/ChartInfoItem";
import InfoBox from "../../components/InfoBox";
import ListsHead from "../../components/ListsHead";
import { DATA_INFO_BOX, CHART_BOX_DATA } from "../../constants/mocks";

import {
  InfoBoxContainer,
  MainOverview,
  ChartContainer,
  ChartInfoContainer,
  ListsContainer,
  ListContainer,
} from "./styled";

const OverviewPage = () => {
  return (
    <>
      <InfoBoxContainer>
        {DATA_INFO_BOX.map((infoData) => (
          <InfoBox key={infoData.id} {...infoData} />
        ))}
      </InfoBoxContainer>
      <MainOverview>
        <ChartContainer>
          <ChartBox></ChartBox>
          <OverviewChart />
        </ChartContainer>
        <ChartInfoContainer>
          {CHART_BOX_DATA.map((item) => (
            <ChartInfoItem key={item.id} {...item} />
          ))}
        </ChartInfoContainer>
      </MainOverview>
      <ListsContainer>
        <ListContainer>
          <ListsHead
            text="Unresolved tickets"
            linkText="View details"
            info="Group:"
            infoSpan="Support"
          />
        </ListContainer>
        <ListContainer>
          <ListsHead text="Tasks" linkText="View all" info="Today" />
        </ListContainer>
      </ListsContainer>
    </>
  );
};

export default OverviewPage;
