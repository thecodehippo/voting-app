import { Pool } from 'pg'

const isProduction = process.env.NODE_ENV === 'production'
const localConnection = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
console.log(process.env.DATABASE_URL);

const getPoolConfig = () => {
    if (isProduction) {
        return new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        })
    } else return new Pool({
        connectionString: localConnection
    })
}

const db = getPoolConfig();

export default db;
