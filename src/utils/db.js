import mongoose from "mongoose";

const connect = async () => {
  // try {
  //   mongoose.set("strictQuery", false);
  //   await mongoose.connect(process.env.MONGO)
  //     //   .then(() =
  // } catch (error) {
  //   throw new Error("Connection is failed");
  // }
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      // app.listen(PORT);
      console.log("Database connection successful");
      // console.log(DB_HOST);
      // console.log(PORT);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

export default connect;
