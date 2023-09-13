import { Injectable }  from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "src/modules/categories/categories.entity";
import { ItemEntity } from "src/modules/items/items.entity";
import { ProfileEntity } from "src/modules/profiles/profiles.entity";
import { UserEntity } from "src/modules/users/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class BeanManagementService {
    public constructor(
        @InjectRepository(UserEntity) public readonly user: Repository<UserEntity>,
        @InjectRepository(ProfileEntity) public readonly profile: Repository<ProfileEntity>,
        @InjectRepository(ItemEntity) public readonly item: Repository<ItemEntity>,
        @InjectRepository(CategoryEntity) public readonly category: Repository<CategoryEntity>,
    ) {}
}