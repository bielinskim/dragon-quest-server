import { Router } from "express";
import quests from "../../data/quests";

const router = Router();

router.route('/')
.get((req, res) => {

    console.log('test');

    res.send(quests); 
});

export default router;