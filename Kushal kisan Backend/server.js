const app = require("./app");

const dotenv = require("dotenv");
console.log("server called")

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

const dbconnect = require("./config/database");
//config
dotenv.config({ path: "./config/config.env" });

dbconnect();
const server = app.listen(process.env.PORT, () => {
  console.log(`our server is:http:/localhost:${process.env.PORT}`)
}
)

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});