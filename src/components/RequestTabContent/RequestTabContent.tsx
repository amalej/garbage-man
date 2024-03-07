import React, { Dispatch } from "react";
import rtcCss from "./RequestTabContent.module.css";

interface RequestTabContentProps {
  tabData: TabModel;
  tabDataList: TabModel[];
  setTabDataList: Dispatch<React.SetStateAction<TabModel[]>>;
}

function RequestTabContent({
  tabData,
  tabDataList,
  setTabDataList,
}: RequestTabContentProps) {
  const findTabIndex = (): number | null => {
    for (let i = 0; i < tabDataList.length; i++) {
      if (tabData.id === tabDataList[i].id) {
        return i;
      }
    }

    return null;
  };

  function requestMethodChange(e: any) {
    console.log(e.target.value);
    const index = findTabIndex();
    if (index !== null) {
      let currentList = tabDataList;
      let _tabData = tabData;
      if (
        _tabData.request.options === null ||
        _tabData.request.options === undefined
      ) {
        _tabData.request["options"] = {
          method: e.target.value,
        };
      } else {
        _tabData.request.options.method = e.target.value;
      }
      currentList[index] = { ..._tabData };
      setTabDataList([...currentList]);
    }
  }

  function requestUrlChange(e: any) {
    const index = findTabIndex();
    if (index !== null) {
      let currentList = tabDataList;
      let _tabData = tabData;
      _tabData.request.url = e.target.value;
      currentList[index] = { ..._tabData };
      setTabDataList([...currentList]);
    }
  }

  function makeRequest() {
    console.log("makeRequest");
    const reqBodyTextArea = document.getElementById(
      "req-body"
    ) as HTMLTextAreaElement;
    const reqHeadersTextArea = document.getElementById(
      "req-headers"
    ) as HTMLTextAreaElement;
    const method = tabData.request.options?.method ?? "GET";
    const reqBody = method !== "GET" ? reqBodyTextArea.value : undefined;
    const reqHeaders = reqHeadersTextArea.value;
    console.log("ok");
    console.log(reqBody);
    console.log("method");
    console.log(tabData.request.options?.method);
    const data = {
      type: "fetchRequest",
      payload: {
        method: tabData.request.options?.method ?? "GET",
        url: tabData.request.url,
        body: reqBody,
        headers: reqHeaders,
      },
    };

    (window as any).api.send("toMain", data);
  }

  return (
    <div className={`${rtcCss["request-tab-content"]}`}>
      <div className={rtcCss["top"]}>
        <div className={rtcCss["request-method"]}>
          <select
            name="request"
            id="request-method-select"
            onChange={requestMethodChange}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className={`${rtcCss["request-url"]}`}>
          <input
            type="text"
            id="request-url-input"
            value={tabData.request.url}
            onChange={requestUrlChange}
          />
        </div>

        <div className={`${rtcCss["request-send"]}`}>
          <input
            id="send-button"
            type="button"
            value="SEND"
            onClick={makeRequest}
          />
        </div>
      </div>

      <div className={rtcCss["bottom"]}>
        <div className={rtcCss["body"]}>
          <div>Headers</div>
          <div>
            <textarea id="req-headers" />
          </div>
        </div>
        <div className={rtcCss["body"]}>
          <div>Body</div>
          <div>
            <textarea id="req-body" />
          </div>
        </div>
      </div>

      <div className={rtcCss["response"]} id="response-div">
        <div id="response-status"></div>
        <div id="response-body"></div>
      </div>
    </div>
  );
}

export default RequestTabContent;
