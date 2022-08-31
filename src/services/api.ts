import axios from "axios";

export const api = axios.create({
  baseURL: "https://front-end-test.beta-cs.blip.ai/",
});
