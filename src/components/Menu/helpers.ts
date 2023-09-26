import { ReactComponent as OverviewIcon } from "../../assets/logos/overview.svg";
import { ReactComponent as OverviewActiveIcon } from "../../assets/logos/overviewActive.svg";
import { ReactComponent as TicketsIcon } from "../../assets/logos/tickets.svg";
import { ReactComponent as TicketsActiveIcon } from "../../assets/logos/ticketsActive.svg";
import { ReactComponent as IdeasIcon } from "../../assets/logos/ideas.svg";
import { ReactComponent as IdeasActiveIcon } from "../../assets/logos/ideasActive.svg";
import { ReactComponent as ContactsIcon } from "../../assets/logos/contacts.svg";
import { ReactComponent as ContactsActiveIcon } from "../../assets/logos/contactsActive.svg";
import { ReactComponent as AgentsIcon } from "../../assets/logos/agents.svg";
import { ReactComponent as AgentsActiveIcon } from "../../assets/logos/agentsActive.svg";
import { ReactComponent as ArticlesIcon } from "../../assets/logos/articles.svg";
import { ReactComponent as ArticlesActiveIcon } from "../../assets/logos/articlesActive.svg";
import { ReactComponent as SettingsIcon } from "../../assets/logos/settings.svg";
import { ReactComponent as SettingsActiveIcon } from "../../assets/logos/settingsActive.svg";
import { ReactComponent as SubscriptionIcon } from "../../assets/logos/subscription.svg";
import { ReactComponent as SubscriptionActiveIcon } from "../../assets/logos/subscriptionActive.svg";

interface INavInfo {
  to: string;
  text: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const NAV_INFO: INavInfo[] = [
  {
    to: "/",
    text: "Overview",
    icon: OverviewIcon,
    activeIcon: OverviewActiveIcon,
  },
  {
    to: "/tickets",
    text: "Tickets",
    icon: TicketsIcon,
    activeIcon: TicketsActiveIcon,
  },
  {
    to: "/ideas",
    text: "Ideas",
    icon: IdeasIcon,
    activeIcon: IdeasActiveIcon,
  },
  {
    to: "/contacts",
    text: "Contacts",
    icon: ContactsIcon,
    activeIcon: ContactsActiveIcon,
  },
  {
    to: "/agents",
    text: "Agents",
    icon: AgentsIcon,
    activeIcon: AgentsActiveIcon,
  },
  {
    to: "/articles",
    text: "Articles",
    icon: ArticlesIcon,
    activeIcon: ArticlesActiveIcon,
  },
];

export const ADDITIONAL_NAV_INFO: INavInfo[] = [
  {
    to: "/settings",
    text: "Settings",
    icon: SettingsIcon,
    activeIcon: SettingsActiveIcon,
  },
  {
    to: "/subscription",
    text: "Subscription",
    icon: SubscriptionIcon,
    activeIcon: SubscriptionActiveIcon,
  },
];
