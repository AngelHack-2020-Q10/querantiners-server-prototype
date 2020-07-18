import {Request, Response} from "express";

import {createUser, loginUser} from '../controller/UserControoler';
import {createBoard, getBoards, createComment, getCommentsByBoard} from '../controller/BoardController';
import {createChallenge, getChallenges, createChallengeAnswer, getChallengeAnswers} from '../controller/ChallengeController';
//import {isAuthenticated} from '../auth/Auth';

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

        app.route('/api/challenge/answer')
        .post(createChallengeAnswer);
        app.route('/api/challenge/answer')
        .get(getChallengeAnswers);

        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'main routes1'
            })
        })
    }
}

/**
 * @swagger
 * tags:
 *   name: UserRegister
 *   description: 회원가입 관련 정보
 * definitions:
 *   Request:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       email:
 *         type: string
 *         description: EMAIL
 *       name:
 *         type: string
 *         description: 유저 관련 name
 *       password:
 *         type: string
 *         description: 비밀번호
 *   Response:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       accessToken:
 *         type: string
 *         description: 로그인 토큰 정보
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: 회원가입
 *     tags: [UserRegister]
 *     responses:
 *       200:
 *         description: login result
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: string
 *               items:
 *                 $ref: '#/definitions/Todo'
 */


 /**
 * @swagger
 * tags:
 *   name: SignIn
 *   description: 로그인 관련 정보
 * definitions:
 *   Request:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       email:
 *         type: string
 *         description: EMAIL
 *       name:
 *         type: string
 *         description: 유저 관련 name
 *       password:
 *         type: string
 *         description: 비밀번호
 *   Response:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       accessToken:
 *         type: string
 *         description: 로그인 토큰 정보
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: 로그인
 *     tags: [SignIn]
 *     responses:
 *       200:
 *         description: login result
 *         schema:
 *           type: object
 *           properties:
 *             todos:
 *               type: string
 *               items:
 *                 $ref: '#/definitions/Todo'
 */