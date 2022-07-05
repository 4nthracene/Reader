import { Router, Request, Response, NextFunction } from "express";
import { test } from "../Controllers/test";
const router = Router();

router.get("/", test);

export default router;
