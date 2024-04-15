import { config } from "./environment.js";

export const server_url = `http://localhost:${config.get("port")}`;
