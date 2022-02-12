import { Router } from "express";
import User from "../models/user";

const router = Router();
const { registerUser, loginUser } = User;

router.route('/register')
.post(async (req, res) => {
    try {
        const user = await registerUser(req.body);

        res.send(user); 
    } catch (e) {
        if(e.name === 'UniqueConstraintError') {
            res.status = 409;
        }
        res.send();
    }
   
});

router.route('/login')
.post(async (req, res) => {
    try {
        const user = await loginUser(req.body);

        res.send(user); 
    } catch (error) {
        res.status(400);
        res.end();
    }
   
});

export default router;