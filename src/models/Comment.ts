import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, AllowNull, ForeignKey} from 'sequelize-typescript';
import { User } from './User';
import { Board } from './Board';

@Table
export class Comment extends Model<Comment> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    userId: number;

    @ForeignKey(() => Board)
    @Column(DataType.BIGINT)
    boardId: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string;

    @CreatedAt
    created: Date;
   
    @UpdatedAt
    updated: Date;

    public getId(): number {
        return this.id;
    }

    public getDescription(): string {
        return this.description;
    }
}
