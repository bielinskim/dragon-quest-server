import express from "express";
import character from './api/character';
import quest from './api/quest';
import user from './api/user';
import userCharacter from "./api/userCharacter";
import userQuest from "./api/userQuest";

const app = express();

app.use(express.json({}))

app.use('/character', character);
app.use('/quest', quest);
app.use('/user', user);
app.use('/userCharacter', userCharacter);
app.use('/userQuest', userQuest);

export default app;