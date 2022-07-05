import { Router } from "express";
import TestRouter from "./test.router";
const router = Router();

router.use("/", TestRouter)

export default router
