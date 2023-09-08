import { Injectable }  from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/modules/users/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class BeanManagementService {
    public constructor(
        @InjectRepository(UserEntity) public readonly user: Repository<UserEntity>
        
    ) {}
}