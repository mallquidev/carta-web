import bcrypt from 'bcryptjs'
import {pool} from '../db.js'

export const register = async(req, res) => {
    try {
        const {user, email, password} = req.body
        const passwordhash = await bcrypt.hash(password, 10)
        const [result] = await pool.query('INSERT INTO user(user, email, password) VALUES(?,?,?)',[user, email, passwordhash])
        res.json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const login = (req, res) => res.send('LOGIN')
