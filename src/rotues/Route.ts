import {Request, Response} from "express";

import {createUser, loginUser} from '../controller/UserControoler';
import {createBoard, getBoards, createComment, getCommentsByBoard} from '../controller/BoardController';
import {createChallenge, getChallenges} from '../controller/ChallengeController';

// main routes

export class Route {       
    public initialize(app): void {
        
        app.route('/api/user')
        .post(createUser);
        app.route('/api/user/login')
        .post(loginUser);

        app.route('/api/board')
        .post(createBoard);
        app.route('/api/board')
        .get(getBoards);

        app.route('/api/board/comment')
        .post(createComment);
        app.route('/api/board/comment')
        .get(getCommentsByBoard);

        app.route('/api/challenge')
        .post(createChallenge);
        app.route('/api/challenge')
        .get(getChallenges);

        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'main routes1'
            })
        })
    }
}