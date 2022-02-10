import express, { Router } from "express";
//import cors from 'cors';
import characters from './api/characters';
import quests from './api/quests';

const app = express();

//app.use(cors());

app.use('/characters', characters);
app.use('/quests', quests);

export default app;