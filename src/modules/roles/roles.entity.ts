import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "../users/users.entity";

@Entity('role')
export class RoleEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        default: 'customer'
    })
    role: string;

    @OneToMany(()=>UserEntity, (user) => user.role)
    users: UserEntity[];

}