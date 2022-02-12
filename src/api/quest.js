import { Router } from "express";
import Quest from "../models/quest";

const router = Router();
const { getQuests } = Quest;

router.route('/')
.get(async (req, res) => {
    const quests = await getQuests();

    res.send(quests); 
});

export default router;