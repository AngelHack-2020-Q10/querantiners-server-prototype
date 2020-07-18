import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as expressJwt from 'express-jwt';
import compose from 'composable-middleware';


const validateJwt: expressJwt.RequestHandler = expressJwt({
    secret: 'signal',
    algorithms: ['HS256']
});

export function isAuthenticated() {
    console.info('haa');
    return compose()
        .use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = 'Bearer ' + req.query.access_token;
            }
            console.info('validateJwt');
            validateJwt(req, res, next);
        })
        .use(function( req: express.Request, res: express.Response, next: express.NextFunction) {
            // added to req
        });
}

export interface ITokenInterface {
    user: {
       email: string;
       name: string;
       _id: number;
    };
  }

export function isAuthenticatedTypescript(req: express.Request, res: express.Response, next: express.NextFunction) {
    
    if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
    }

    try {
        console.info(req.query.access_token);
        var decoded = jwt.verify(req.query.access_token, 'signal');
        console.info(decoded);
    } catch(err) {
        next(err);
    }

    next();
}

// need make config
export function signToken(id: string, name: string) {
    
    return jwt.sign({
        _id: id, 
        name: name,
    }, 'signal', { expiresIn: '2day'});
}

