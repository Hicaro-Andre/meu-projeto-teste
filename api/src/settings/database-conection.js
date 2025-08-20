import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@apitest.k6pel8h.mongodb.net/?retryWrites=true&w=majority&appName=apitest`
    );
    console.log("✅ Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("❌ Falha na conexão com MongoDB:", error.message || error);
    process.exit(1);
  }
}

export default connectDB;
