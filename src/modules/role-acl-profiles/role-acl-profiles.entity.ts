import { BaseEntity } from "src/common/base.entity";
import { Entity, OneToOne } from "typeorm";
import { RoleEntity } from "../roles/roles.entity";

@Entity('role_acl_profile')
export class RoleACLProfileEntity extends BaseEntity {
    
    @OneToOne(()=>RoleEntity, (role) => role.acl_profile)
    role: RoleEntity;

    

}