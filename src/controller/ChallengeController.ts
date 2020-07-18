import {Request, Response, NextFunction} from "express";

import {Challenge} from '../models/Challenge';


export async function createChallenge(req: Request, res: Response, next: NextFunction) {
    try {
        const challenge = await Challenge.create(req.body);
        res.status(201).json({
            result : challenge
        });
    } catch(e) {
        next(e);
    }
}

export async function getChallenges(req: Request, res: Response, next: NextFunction) {
    try {
        const challengeList = await Challenge.findAll();
        res.status(201).json({
            result : challengeList,
        })
    } catch(e) {
        next(e);
    }
}