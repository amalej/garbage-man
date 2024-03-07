import rtCss from "./RequestTab.module.css";
import { MdAdd } from "react-icons/md";
import Tab from "./Tab/Tab";
import { Dispatch, SetStateAction } from "react";

interface RequestTabProps {
  tabDataList: TabModel[];
  activeId: string;
  onClickAddButton: () => any;
  setActiveId: Dispatch<SetStateAction<string>>;
}

function RequestTab({
  tabDataList,
  activeId,
  onClickAddButton,
  setActiveId,
}: RequestTabProps) {
  return (
    <div className={rtCss["request-tab"]}>
      <div className={`${rtCss["tab-container"]}`}>
        <div className={`${rtCss["add-button"]}`} onClick={onClickAddButton}>
          <MdAdd />
        </div>
      </div>
      <div className={`${rtCss["reuqest-array"]}`}>
        {tabDataList.map((tabData) => {
          return (
            <Tab
              key={tabData.id}
              tabData={tabData}
              activeId={activeId}
              onClick={() => {
                setActiveId(tabData.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RequestTab;
