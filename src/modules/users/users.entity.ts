import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


@Entity('User')
export class UserEntity extends BaseEntity{
    @PrimaryColumn()
    @Generated('uuid')
    id: string;

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