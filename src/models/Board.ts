import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, Default, AllowNull, ForeignKey} from 'sequelize-typescript';
import { User } from './User';


@Table
export class Board extends Model<Board> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    userId: number;

    @AllowNull(false)
    @Default(0)
    @Column(DataType.TINYINT)
    status: number;

    @AllowNull(false)
    @Default(0)
    @Column(DataType.FLOAT)
    latitude: number;

    @AllowNull(false)
    @Default(0)
    @Column(DataType.FLOAT)
    longitude: number;

    @AllowNull(false)
    @Column(DataType.CHAR)
    title: string;

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

    public getStatus(): number {
        return this.status;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }
}
