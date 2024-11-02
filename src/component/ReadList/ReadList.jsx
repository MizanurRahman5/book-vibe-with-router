import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadList = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">reed List</h1>

      <Tabs>
        <TabList>
          <Tab>read list</Tab>
          <Tab>wist list</Tab>
        </TabList>

        <TabPanel>
          <h2>book read list</h2>
        </TabPanel>
        <TabPanel>
          <h2>book wist list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
