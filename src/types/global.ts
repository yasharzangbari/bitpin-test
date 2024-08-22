import { tabs } from "~/constants/global";

export interface TabsProps {
  children: React.ReactNode;
  tabItems: typeof tabs;
}

export interface PaginationProps {
  itemsPerPage: number;
  length?: number;
  onChangePage: (pageNumber: number) => void;
}
