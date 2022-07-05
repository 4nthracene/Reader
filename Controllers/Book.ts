import {Request, Response, NextFunction} from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createNew(req: Request, res: Response, next: NextFunction) {
	prisma.book.create({
		data: {
			title: req.body.title,
			author: req.body.author,
			
		}
	})
}
