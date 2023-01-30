import express, { Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import aboutRoute from "./src/routers/about";

const app = express();
const port = process.env.APP_PORT || 9000;

app.use(cors());
app.use("/about", aboutRoute);

app.get("/", (_, res: Response): Response => {
  return res.status(200).send({
    message: "Vicky Adi Firmansyah - NodeJS Sesi 24",
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
