import {config} from 'dotenv'

config()

export const PORT = process.env.PORT
export const PORTDB = process.env.PORTDB
export const HOST = process.env.HOST
export const USER = process.env.USER
export const DATABASE = process.env.DATABASE
export const PASSWORD = process.env.PASSWORD