import express from "express";
import character from './api/character';
import quest from './api/quest';
import user from './api/user';

const app = express();

app.use(express.json({}))

app.use('/character', character);
app.use('/quest', quest);
app.use('/user', user);

export default app;