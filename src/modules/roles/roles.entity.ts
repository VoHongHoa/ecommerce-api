import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { UserEntity } from "../users/users.entity";
import { RoleACLProfileEntity } from "../role-acl-profiles/role-acl-profiles.entity";
import { Role } from "src/enums/enums";

@Entity('role')
export class RoleEntity extends BaseEntity {
    @Column({
        type: 'enum',
        enum: Role,
        default: Role.User
    })
    role: string;

    @OneToMany(()=>UserEntity, (user) => user.role)
    users: UserEntity[];

    @Column({
        type: 'varchar',
        nullable: true
    })
    acl_profile_id: string;

    @OneToOne(()=> RoleACLProfileEntity, (acl_profile) => acl_profile.role)
    @JoinColumn({
        name: "acl_profile_id",
        referencedColumnName: "id"
    })
    acl_profile: RoleACLProfileEntity;

}