import app from "./app.js";
import dotenv from "dotenv";

async function main() {

    dotenv.config()
    
    const port = process.env.PORT

  try {
    app.listen(port, () => {
      console.log("Server is running on port:" + port);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  
}
main().catch(console.error);
