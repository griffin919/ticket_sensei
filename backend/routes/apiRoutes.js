import express from "express"
import { registerHost, registerGuest } from "./controllers/controllers.js";
import upload from "../utils/multer.js";


const apiRouter = express.Router();

apiRouter.route("/host/register")
.get((req, res)=>res.send("hello get host"))
.post(upload.array("portfolioFiles", 6), registerHost)

apiRouter.route("/guest/register")
.get((req, res)=>res.send("hello get guests"))
.post(upload.single("profilePic"), registerGuest)

export default apiRouter;