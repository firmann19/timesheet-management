import axios from "axios";
import { config } from "../configs";

export async function postData(url, payload, formData) {
  return await axios.post(`${config.api_host_dev}${url}`, payload, {
    headers: {
      "Content-Type": formData ? "multipart/form-data" : "application/json",
    },
  });
}

export async function getData(url, params) {
  return await axios.get(`${config.api_host_dev}${url}`, {
    params,
  });
}

export async function putData(url, payload) {
  return await axios.put(`${config.api_host_dev}${url}`, payload);
}

export async function deleteData(url) {
  return await axios.delete(`${config.api_host_dev}${url}`);
}
