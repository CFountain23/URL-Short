import app from "./app.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import LinksDAO from "./dao/linkDAO.js";

async function main() {

    dotenv.config()
    
    const client = new mongodb.MongoClient( process.env.LINKS_DB_URI )

    const port = process.env.PORT


  try {
    await client.connect()
    await LinksDAO.injectDB(client)

    app.listen(port, () => {
      console.log("Server is running on port:" + port);
    });
    
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  
}
main().catch(console.error);
