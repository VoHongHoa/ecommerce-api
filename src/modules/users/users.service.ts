import { Injectable }  from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base.service";
import { BeanManagementService } from "src/common/bean-management.service";
// import { UserEntity } from "./users.entity";
// import { Repository } from "typeorm";

@Injectable()
export class UsersService extends BaseService{
    constructor(
        public beanManagementService: BeanManagementService,
        // @InjectRepository(UserEntity) public userRepository: Repository<UserEntity>
    ){
        super(beanManagementService, beanManagementService.user)
    }

    async getProfile(user_id: string) {
        const user = await this.beanRepository.findOne({
            relations: {
                profile: true,
            },
            where: {
                id: user_id
            }
        });
        return user.profile;
    }
}