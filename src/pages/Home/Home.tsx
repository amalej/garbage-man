import { SetStateAction, useEffect, useState } from "react";
import RequestTab from "../../components/RequestTab/RequestTab";
import RequestTabContent from "../../components/RequestTabContent/RequestTabContent";
import hCss from "./Home.module.css";

function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tabDataList, setTabDataList] = useState<TabModel[]>([
    {
      id: "first-id",
      request: {
        url: "https://httpbin.org/anything",
      },
    },
  ]);

  useEffect(() => {
    console.log(tabDataList);
  }, [tabDataList]);

  function getTabDataUsingId(id: string): TabModel | null {
    for (let tabData of tabDataList) {
      if (tabData.id === id) return tabData;
    }
    return null;
  }

  return (
    <div className={`${hCss["home"]}`}>
      <RequestTab
        tabDataList={tabDataList}
        activeId={activeId}
        onClickAddButton={() => {
          console.log("add");
        }}
        setActiveId={setActiveId}
      />
      {activeId !== null && getTabDataUsingId(activeId) ? (
        <RequestTabContent
          tabData={getTabDataUsingId(activeId)}
          tabDataList={tabDataList}
          setTabDataList={setTabDataList}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
