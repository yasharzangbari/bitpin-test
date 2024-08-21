import React, { FC, useState } from "react";
import * as Styled from "./tabs.styled";
import useTranslation from "next-translate/useTranslation";
import { ACTIVE_TABS } from "~/constants/global";
import { TabsProps } from "~/types/global";

export const Tabs: FC<TabsProps> = ({ children, tabItems }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(tabItems?.[0].key);

  const onChangesTabs = (data: ACTIVE_TABS) => {
    setActiveTab(data);
  };

  return (
    <Styled.TabsContainer>
      <Styled.TabItemContainer>
        {tabItems.map((tab) => (
          <Styled.Tab
            key={tab.id}
            onClick={() => onChangesTabs(tab.key)}
            active={activeTab === tab.key}
          >
            {t(tab.title)}
          </Styled.Tab>
        ))}
      </Styled.TabItemContainer>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.key === activeTab ? child : null
      )}
    </Styled.TabsContainer>
  );
};
