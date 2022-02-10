import express, { Router } from "express";
//import cors from 'cors';
import characters from './endpoints/characters';
import quests from './endpoints/quests';

const app = express();

//app.use(cors());

app.use('/characters', characters);
app.use('/quests', quests);

export default app;