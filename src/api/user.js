import { Router } from "express";
import User from "../models/user";

const router = Router();
const { registerUser, loginUser, getUserCharacters } = User;

router.route('/register')
.post(async (req, res) => {
    try {
        const user = await registerUser(req.body);

        res.send(user); 
    } catch (e) {
        console.error(e);
        if(e.name === 'UniqueConstraintError') {
            res.status(409);
        }
        res.send({message: 'Login zajęty'});
    }
   
});

router.route('/login')
.post(async (req, res) => {
    try {
        const user = await loginUser(req.body);

        res.send(user); 
    } catch (e) {
        console.error(e);
        res.status(400);
        res.end();
    }
   
});

export default router;