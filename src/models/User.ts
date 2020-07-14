import {Table, Column, Model, DataType, PrimaryKey, /*BeforeCreate,*/ CreatedAt, UpdatedAt, AllowNull, AutoIncrement} from 'sequelize-typescript';

@Table
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.STRING)
    email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @Column(DataType.STRING)
    salt: string;

    @CreatedAt
    created: Date;
   
    @UpdatedAt
    updated: Date;
}