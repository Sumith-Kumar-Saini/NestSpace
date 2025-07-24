import app from "./src/app";
import dotenv from "dotenv";
import connectDB from "./src/config/db";

// Load environment variables
dotenv.config({ override: true });

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
