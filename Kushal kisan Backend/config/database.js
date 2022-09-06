const mongoose = require("mongoose");
const db="mongodb://localhost:27017/kheti"
//console.log(process.env.PORT);

const connectDatabase = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      //useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;