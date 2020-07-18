import {Request, Response, NextFunction} from "express";

import {Challenge} from '../models/Challenge';
import {ChallengeAnswer} from '../models/ChallengeAnswer';


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

export async function createChallengeAnswer(req: Request, res: Response, next: NextFunction) {
    try {
        const challengeAnswer = await ChallengeAnswer.create(req.body);
        res.status(201).json({
            result : challengeAnswer
        });
    } catch(e) {
        next(e);
    }
}

export async function getChallengeAnswers(req: Request, res: Response, next: NextFunction) {
    try {
        const challengeAnswerList = await ChallengeAnswer.findAll();
        res.status(201).json({
            result : challengeAnswerList,
        })
    } catch(e) {
        next(e);
    }
}