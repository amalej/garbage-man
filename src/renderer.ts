/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import "./index.css";
import {
  FetchResponsePayload,
  WindowApiReceiveData,
  WindowApiSendData,
} from "./types";

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

// const sendButton = document.getElementById("send-button");
// const requestMethodSelect = document.getElementById(
//   "request-method-select"
// ) as HTMLSelectElement;
// const requestUrlInput = document.getElementById(
//   "request-url-input"
// ) as HTMLInputElement;

(window as any).api.receive("fromMain", (data: WindowApiReceiveData) => {
  console.log(`Received data from main process`);
  console.log(data);
  if (data.type === "fetchResponse") {
    const resPayload = data.payload as FetchResponsePayload;
    const redBodyStatus = document.getElementById("response-status");
    const redBodyDiv = document.getElementById("response-body");
    try {
      const jsonResponse = JSON.parse(resPayload.body);
      console.log(jsonResponse);
      redBodyDiv.innerHTML = JSON.stringify(jsonResponse);
    } catch (e: any) {
      redBodyDiv.innerHTML = JSON.stringify(resPayload.body);
    }
    redBodyStatus.innerHTML = `Status: ${resPayload.status.toString()}`;
  }
});

import "./app.tsx";

// sendButton.onclick = () => {
//   //   ApiClient.fetch("https://jsonplaceholder.typicode.com/todos/1", "GET");
//   console.log("requestMethodSelect");
//   console.log(requestMethodSelect.value);
//   console.log("requestUrlInput");
//   console.log(requestUrlInput.value);

//   const method = requestMethodSelect.value;
//   const url = requestUrlInput.value;

//   const data: WindowApiSendData = {
//     type: "fetchRequest",
//     payload: { method, url },
//   };

//   (window as any).api.send("toMain", data);
// };
