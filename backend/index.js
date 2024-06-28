import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
