const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

export default async function handler(req, res) {
  console.log(req.body);
  try {
    const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
    const pool = new Pool({ connectionString: connectionString });
    pool.query(`CREATE TABLE IF NOT EXISTS picks (
      tournamentid TEXT NOT NULL,
      playerid INT NOT NULL,
      round TEXT NOT NULL,
      pick TEXT NOT NULL,
      status TEXT,
      CONSTRAINT onepick UNIQUE(tournamentid, playerid, round)
    );`);
    console.log(await pool.query(`SELECT * FROM picks`));
  } catch (e) {
    console.log(e);
  }
  res.status(200).json({});
}

