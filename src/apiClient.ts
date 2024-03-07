import { default as _fetch } from "node-fetch";

class ApiClient {
  static async fetch(method: string, url: string, headers?: any, body?: any) {
    const res = await _fetch(url, {
      headers,
      method,
      body,
    });
    console.log(res);
  }
}

export default ApiClient;
