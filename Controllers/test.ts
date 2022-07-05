import { Request, Response, NextFunction } from "express";

export function test(req: Request, res: Response, next: NextFunction) {
	return res.json({
		message: `Working fine 🚀`,
	});
}
