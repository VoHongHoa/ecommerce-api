import { createMongoAbility } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "../users/users.entity";
import { AuthorizeService } from "./authorize.service";

// type Subjects = any;
// export type AppAbility = MongoAbility<[AclAction, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    constructor(private authorizeService: AuthorizeService) {}

    async createForUser(user: UserEntity) {
        const permissions = await this.authorizeService.getAclOfUser(user.username);
        return createMongoAbility(permissions);
    }
}