import { tabs } from "~/constants/global";

export interface TabsProps {
  children: React.ReactNode;
  tabItems: typeof tabs;
}
