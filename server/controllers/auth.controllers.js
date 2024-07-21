import { PASSWORD } from '../config.js'
import {pool} from '../db.js'

export const register = async(req, res) => {
    try {
        const {user, email, password} = req.body
        const [result] = await pool.query('INSERT INTO user(user, email, password) VALUES(?,?,?)',[user, email, password])
    } catch (error) {
        
    }
}
export const login = (req, res) => res.send('LOGIN')
