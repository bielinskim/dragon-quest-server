import { Router } from "express";
import Character from "../models/character";

const router = Router();
const { getCharacters } = Character;

router.route('/')
.get(async (req, res) => {
    const characters = await getCharacters();

    res.send(characters); 
});

export default router;