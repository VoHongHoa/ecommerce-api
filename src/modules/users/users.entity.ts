import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated, OneToOne, JoinColumn } from "typeorm";
import { ProfileEntity } from "../profiles/profiles.entity";


@Entity('User')
export class UserEntity extends BaseEntity{
    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
        nullable: false
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        default: 'active'
    })
    status: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        default: 'customer'
    })
    role: string;

    @OneToOne(()=>ProfileEntity, (profile) => profile.user)
    @JoinColumn({
        name: 'profile'
    })
    profile: ProfileEntity;
}