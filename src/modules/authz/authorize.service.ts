import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../users/users.entity";
import { Repository } from "typeorm";
import { RoleACLProfileEntity } from "../role-acl-profiles/role-acl-profiles.entity";
import { RoleEntity } from "../roles/roles.entity";

@Injectable()
export class AuthorizeService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
        @InjectRepository(RoleEntity) private roleRepository: Repository<RoleEntity>,
        @InjectRepository(RoleACLProfileEntity) private aclProfileRepository: Repository<RoleACLProfileEntity>,
    ) {}
    // Need improve the queries, so that just one call to the database
    async getAclOfUser(username: string) {
        const user = await this.userRepository.findOne({
            where: {
                username: username
            }
        });
        const role = await this.roleRepository.findOne({
            where: {
                id: user.role_id
            }
        });
        if (role.acl_profile_id == null) return []; // if null, the next query will get whatever the first item that it have seen, whatever id
        const aclProfile = await this.aclProfileRepository.findOne({
            relations: {
                acls: true
            },
            where: {
                id: role.acl_profile_id
            }
        });
        let acls = [];
        for (let i = 0; i < aclProfile.acls.length; i++) {
            acls.push({
                "subject": aclProfile.acls[i].module,
                "action": aclProfile.acls[i].action
            })
        }
        return acls;
    }
}