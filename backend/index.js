import express from "express";
import cors from "cors";

import connectDB from "./clients/db.js";
import settings from "./config.js";

const initServer = async () => {
  const app = express();

  app.use(express.json());

  app.use(cors({ origin: settings.allow_origin }));

  await connectDB();

  app.listen(settings.port, () =>
    console.log(`Server started at http://localhost${settings.port}`)
  );
};

initServer();