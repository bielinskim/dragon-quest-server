import { Router } from "express";
import UserQuest from "../models/userQuest";

const router = Router();
const { getUserQuests, startQuest } = UserQuest;

router.route('/')
.get(async (req, res) => {
    const userQuests = await getUserQuests(req);

    res.send(userQuests); 
});

router.route('/startQuest')
.post(async (req, res) => {
    const startedQuest = await startQuest(req);

    res.send(startedQuest); 
});

export default router;