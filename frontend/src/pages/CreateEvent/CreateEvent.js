import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./createEvent.css";

const CreateEvent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabCount = 3;

  return (
    <div className="createEvent-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="createEvent-hero">
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => console.log(index)}
        >
          <TabList>
            <Tab>Informação Geral</Tab>
            <Tab>Preços & Local</Tab>
            <Tab>Informação Adicional</Tab>
          </TabList>
          <TabPanel id="0">
            <p>Tab 1 content</p>
          </TabPanel>
          <TabPanel id="1">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel id="2">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
        <div className="buttons">
          <button
            onClick={() =>
              setSelectedTab((selectedTab + tabCount - 1) % tabCount)
            }
            disabled={selectedTab === 0}
          >
            Back
          </button>
          <button onClick={() => setSelectedTab((selectedTab + 1) % tabCount)}>
            {selectedTab + 1 === tabCount ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
