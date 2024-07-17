import {createPool} from 'mysql2/promise'
import {HOST, USER, DATABASE, PORT} from './config.js'

const pool= createPool({
    host: HOST,
    user: USER,
    database: DATABASE,
    port: PORT
})