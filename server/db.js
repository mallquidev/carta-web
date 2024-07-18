import {createPool} from 'mysql2/promise'
import {HOST, USER, DATABASE, PORTDB, PASSWORD} from './config.js'

const pool= createPool({
    host: HOST,
    user: USER,
    database: DATABASE,
    port: PORTDB,
    password: PASSWORD
})

async function checkConnect(){
    try {
        const conn = await pool.getConnection()
        await conn.query('SELECT 1')
        conn.release()
        console.log('DB IS CONNECT')
    } catch (error) {
        console.error(error)
        console.log(error)
    }
}

export {pool, checkConnect}