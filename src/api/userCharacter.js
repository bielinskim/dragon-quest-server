import { Router } from "express";
import UserCharacter from "../models/userCharacter";

const router = Router();
const { getUserCharacters } = UserCharacter;

router.route('/')
.get(async (req, res) => {
    const userCharacters = await getUserCharacters(req);

    res.send(userCharacters); 
});

export default router;