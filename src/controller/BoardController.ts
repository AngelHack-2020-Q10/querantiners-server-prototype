import {Request, Response, NextFunction} from "express";

import {Board} from '../models/Board';
import {Comment} from '../models/Comment';

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

export async function createComment(req: Request, res: Response, next: NextFunction) {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json({
            result : comment
        });
    } catch(e) {
        next(e);
    }
}

export async function getCommentsByBoard(req: Request, res: Response, next: NextFunction) {
    try {
        const CommentList = await Comment.findAll();
        res.status(201).json({
            result : CommentList,
        })
    } catch(e) {
        next(e);
    }
}