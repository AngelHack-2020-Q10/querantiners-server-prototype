import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize(
    'querantiners', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql',  
    
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        
        modelPaths: [__dirname + '/models']
});