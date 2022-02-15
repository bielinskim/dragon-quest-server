import { Router } from "express";
import UserQuest from "../models/userQuest";

const router = Router();
const { getUserQuests } = UserQuest;

router.route('/')
.get(async (req, res) => {
    const userQuests = await getUserQuests(req);

    res.send(userQuests); 
});

export default router;