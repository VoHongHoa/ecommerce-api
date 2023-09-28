import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { RoleACLProfileEntity } from "../role-acl-profiles/role-acl-profiles.entity";
import { AclAction } from "src/enums/enums";

@Entity('acl')
export class ACLEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        nullable: false
    })
    module: string;

    @Column({
        type: 'enum',
        enum: AclAction,
        default: AclAction.READ
    })
    action: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    acl_profile_id: string;

    @ManyToOne(()=>RoleACLProfileEntity, (acl_profile) => acl_profile.acls)
    @JoinColumn({
        name: 'acl_profile_id',
        referencedColumnName: 'id'
    })
    acl_profile: RoleACLProfileEntity;
}