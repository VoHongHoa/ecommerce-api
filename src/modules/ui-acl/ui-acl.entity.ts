import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { RoleACLProfileEntity } from "../role-acl-profiles/role-acl-profiles.entity";

@Entity('ui_acl')
export class UiACLEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        nullable: false
    })
    module: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    action: string;

    @ManyToOne(()=>RoleACLProfileEntity, (acl_profile) => acl_profile.acls)
    @JoinColumn({
        name: 'acl_profile_id',
        referencedColumnName: 'id'
    })
    acl_profile: RoleACLProfileEntity;
}