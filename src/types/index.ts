import { Response } from "node-fetch";

type WindowApiTypes = "fetchRequest" | "fetchResponse";

export interface WindowApiSendData {
  type: WindowApiTypes;
  payload: any;
}

export interface WindowApiReceiveData {
  type: WindowApiTypes;
  payload: any;
}

type RequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface FetchRequestPayload {
  method: RequestMethods;
  url: string;
  body: any;
  headers: any;
}

export interface FetchResponsePayload {
  status: number;
  body: any;
}
