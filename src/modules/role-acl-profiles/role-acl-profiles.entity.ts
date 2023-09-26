import { BaseEntity } from "src/common/base.entity";
import { Entity, OneToMany, OneToOne } from "typeorm";
import { RoleEntity } from "../roles/roles.entity";
import { ACLEntity } from "../acl/acl.entity";

@Entity('role_acl_profile')
export class RoleACLProfileEntity extends BaseEntity {
    
    @OneToOne(()=>RoleEntity, (role) => role.acl_profile)
    role: RoleEntity;

    @OneToMany(()=>ACLEntity, (acl) => acl.acl_profile)
    acls: ACLEntity[];

}