import { Router } from "express";
import {signUp} from '../Controller/SignUp.js'
import {login, logout} from "../Controller/Login.js"
import {isThere} from "../Middleware/IsUser.js"

const router = Router();

router.post("/signup", signUp);
router.get("/login", login)
router.get("/logout",isThere, logout)

export default router;