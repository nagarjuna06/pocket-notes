import { config } from "dotenv";

config();

const settings = {
  mongo_uri: process.env.MONGO_URI,
  allow_origin: process.env.ALLOW_ORIGIN,
  port: parseInt(process.env.PORT) || 8080,
};

export default settings;
