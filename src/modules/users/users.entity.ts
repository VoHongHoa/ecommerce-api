import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { ProfileEntity } from "../profiles/profiles.entity";


@Entity('user')
export class UserEntity extends BaseEntity{

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

    @Column({
        type: 'varchar'
    })
    profile_id: string;

    @OneToOne(()=>ProfileEntity, (profile) => profile.user)
    @JoinColumn({
        name: 'profile_id',
        referencedColumnName: 'id'
    })
    profile: ProfileEntity;
}