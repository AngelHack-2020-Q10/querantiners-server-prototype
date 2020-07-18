import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, AllowNull, ForeignKey} from 'sequelize-typescript';
import {User} from './User'
import {Challenge} from './Challenge'


@Table
export class ChallengeAnswer extends Model<ChallengeAnswer> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    userId: number;

    @ForeignKey(() => Challenge)
    @Column(DataType.BIGINT)
    boardId: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    answer: string;

    @CreatedAt
    created: Date;
   
    @UpdatedAt
    updated: Date;

    public getId(): number {
        return this.id;
    }

    public getAnswer(): string {
        return this.answer;
    }
}
