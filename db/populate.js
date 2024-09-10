#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (25),
  content VARCHAR (255),
  time VARCHAR (30)
)
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
