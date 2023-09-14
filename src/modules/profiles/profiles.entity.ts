import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, Generated, OneToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "../users/users.entity";

@Entity('profile')
export class ProfileEntity extends BaseEntity {

    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    name: string;

    @Column({
        type: 'date'
    })
    date_of_birth: string; 

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 15,
        unique: true
    })
    phone: string;

    @OneToOne(()=>UserEntity, (user) => user.profile)
    user: UserEntity;
}