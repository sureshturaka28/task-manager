import { Request, Response, NextFunction } from "express";

/*
 Utility wrapper for async route handlers.

*/
export const asyncHandler =
  (fn: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };