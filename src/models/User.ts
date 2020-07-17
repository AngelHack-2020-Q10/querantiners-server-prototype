import * as crypto from 'crypto';
import {Table, Column, Model, DataType, PrimaryKey, BeforeCreate, CreatedAt, UpdatedAt, AllowNull, AutoIncrement, Unique} from 'sequelize-typescript';

@Table
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @Unique
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

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPassword(): string {
        return this.password;
    }

    /**
        * Authenticate - password 체크
        *
        * @param {String} password
        * @param {Function} callback
        * @return {Boolean}
        * @api public
    */
    isAuthenticate(password: string): boolean {
        return this.getPassword() === this.encryptPassword(password).toString();
    }

    /**
    * Make salt - db에 저장
    *
    * @param {Number} byteSize Optional salt byte size, default to 16
    * @param {Function} callback
    * @return {String}
    * @api public
    */

    static makeSalt(byteSize: number): string {
        const defaultByteSize: number = 16;

        if (byteSize < 1) {
            byteSize = defaultByteSize;
        }

        return crypto.randomBytes(byteSize).toString('hex');
    }

    /**
    * Encrypt password
    *
    * @param {String} password
    * @param {Function} callback
    * @return {String}
    * @api public
    */

    encryptPassword(password: string): string {
        
        const defaultIterations: number = 1000;
        const defaultKeyLength: number  = 64;
        const saltedValue: Buffer       = new Buffer(this.salt, 'base64');

        return crypto.pbkdf2Sync(password, saltedValue, defaultIterations, defaultKeyLength, 'sha512').toString('hex');
    }

    validateData(value: string): boolean {
        return ( 0 < value.length );
    }

    @BeforeCreate
    static setEncryptForUser(instance: User): void {
        
        const saltedValue: string       = User.makeSalt(0);
        instance.salt                   = saltedValue;

        const hashedPassword: string    = instance.encryptPassword(instance.password);
        instance.password               = hashedPassword;
   }
}