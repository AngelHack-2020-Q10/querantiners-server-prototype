import {Request, Response} from "express";

import {createUser, loginUser} from '../controller/UserControoler';

// main routes

export class Route {       
    public initialize(app): void {
        
        app.route('/api/user')
        .post(createUser)
        app.route('/api/user/login')
        .post(loginUser);

        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'main routes1'
            })
        })
    }
}