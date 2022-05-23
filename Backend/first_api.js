const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

let connection = null;

const connect_to_db = async () => {
  try {
    connection = await mysql.createConnection({
      user: "root",
      password: "test123",
      database: "api_game_db",
    });

    console.log("Connection stablished!");

    const [result, fields] = await connection.execute("select * from users");
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

app.get("/users", async (req, res) => {
  console.log("Connects");
  const data = await connect_to_db();
  res.json(data);
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
