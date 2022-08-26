import React, { useState, createContext, useContext } from "react";

interface TabContexInterface {
  activetabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}

type TabProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

type TabPanelProps = {
  whenActive: string;
  children: React.ReactNode;
};

type TabSwitcherProps = {
  children: React.ReactNode;
};

const TabContext = createContext<TabContexInterface | null>(null);

const Tab = (props: TabProps) => {
  const { id, children, className } = props;
  const tabCtx = useContext(TabContext);

  return (
    <div className={className}>
      <div onClick={() => tabCtx?.setActiveTabId(id)}>{children}</div>
    </div>
  );
};

const TabPanel = (props: TabPanelProps) => {
  const { whenActive, children } = props;
  //get the 'activeTabID' state from TabContext.
  const tabCtx = useContext(TabContext);
  return <div>{tabCtx?.activetabId === whenActive ? children : null}</div>;
};

const TabSwitcher = (props: TabSwitcherProps) => {
  const { children } = props;
  const [activetabId, setActiveTabId] = useState("a");
  //since this component will provide data to the child components, we will use DataContext.Provider
  return (
    <TabContext.Provider value={{ activetabId, setActiveTabId }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabSwitcher;
export { Tab, TabPanel };
