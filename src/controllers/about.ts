import { Request, Response } from "express";

export const getAbout = (req: Request, res: Response): Response => {
  return res.status(200).send(`
    <div>
      <h1>Hello, My name is Vicky Adi Firmansyah 👋</h1>
    </div>
  `);
};
