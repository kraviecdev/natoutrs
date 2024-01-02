const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.error(`${err.name}: ${err.message}`);
  process.exit(1);
});

dotenv.config();
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PWD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to DB`);
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running at ${process.env.NODE_ENV}, port: ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.error(`${err.name}: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
