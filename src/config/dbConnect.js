import mongoose from "mongoose";

mongoose.connect('mongodb+srv://root:1234@apibiblioteca.wpoib.mongodb.net/api-biblioteca?');

let db = mongoose.connection;

export default db;