import ChartBox from "../../components/ChartBox";
import OverviewChart from "../../components/ChartComponents/OverviewChart";
import ChartInfoItem from "../../components/ChartInfoItem";
import InfoBox from "../../components/InfoBox";
import ListsHead from "../../components/ListsHead";
import UnresolvedTicket from "../../components/UnresolvedTicket";
import {
  DATA_INFO_BOX,
  CHART_BOX_DATA,
  UNRESOLVED_TICKETS_DATA,
  TASKS_DATA,
} from "../../constants/mocks";
import { ReactComponent as PlusIcon } from "../../assets/logos/greyPlus.svg";
import TaskListItem from "../../components/TaskListItem";

import {
  InfoBoxContainer,
  MainOverview,
  ChartContainer,
  ChartInfoContainer,
  ListsContainer,
  ListContainer,
  TasksTableHead,
  TasksText,
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
          {UNRESOLVED_TICKETS_DATA.map((item) => (
            <UnresolvedTicket key={item.id} {...item} />
          ))}
        </ListContainer>
        <ListContainer>
          <ListsHead text="Tasks" linkText="View all" info="Today" />
          <TasksTableHead>
            <TasksText>Create new task</TasksText>
            <PlusIcon />
          </TasksTableHead>
          {TASKS_DATA.map((task) => (
            <TaskListItem key={task.id} {...task} />
          ))}
        </ListContainer>
      </ListsContainer>
    </>
  );
};

export default OverviewPage;
