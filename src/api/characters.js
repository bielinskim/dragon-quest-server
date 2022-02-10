import { Router } from "express";
import characters from "../../data/characters";

const router = Router();

router.route('/')
.get((req, res) => {

    res.send(characters); 
});

export default router;