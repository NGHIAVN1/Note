import { userDb } from "../models/users.js";
import express from "express";
export const routes = express.Router();

routes.post('/signup',userDb);

 routes.get("/", (req, res)=>{
    res.send('<p>Hello</p>');

})
