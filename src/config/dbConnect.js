import mongoose from "mongoose"

mongoose.connect("mongodb+srv://diego:1234@alura.47brfak.mongodb.net/alura-node");
mongoose.set('strictQuery', false);


let db = mongoose.connection;

export default db;