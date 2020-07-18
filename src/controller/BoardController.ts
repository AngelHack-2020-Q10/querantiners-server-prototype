import {Request, Response, NextFunction} from "express";

import {Board} from '../models/Board';


export async function createBoard(req: Request, res: Response, next: NextFunction) {
    try {
        const message = await Board.create(req.body);
        res.status(201).json({
            result : message
        });
    } catch(e) {
        next(e);
    }
}

export async function getBoards(req: Request, res: Response, next: NextFunction) {
    try {
        const boardList = await Board.findAll();
        res.status(201).json({
            result : boardList,
        })
    } catch(e) {
        next(e);
    }
}