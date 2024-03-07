import tCss from "./Tab.module.css";

interface TabProps {
  tabData: TabModel;
  activeId: string;
  onClick: () => any;
}

function Tab({ tabData, activeId, onClick }: TabProps) {
  return (
    <div
      className={`${tCss["tab"]} ${
        activeId === tabData.id ? tCss["active"] : ""
      }`}
      onClick={onClick}
    >
      <div className={`${tCss["request-method"]}`}>
        {tabData.request.options?.method ?? "GET"}
      </div>
      <div className={`${tCss["request-url"]}`}>
        {tabData.request.url.toString()}
      </div>
    </div>
  );
}

export default Tab;
