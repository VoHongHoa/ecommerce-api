import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


@Entity('User')
export class UserEntity{
    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    password: string;
}