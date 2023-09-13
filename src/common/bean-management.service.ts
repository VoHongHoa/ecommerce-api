import { Injectable }  from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CartDetailEntity } from "src/modules/cart-details/cart-details.entity";
import { CartHeaderEntity } from "src/modules/cart-headers/cart-headers.entity";
import { CategoryEntity } from "src/modules/categories/categories.entity";
import { InvoiceDetailEntity } from "src/modules/invoice-details/invoice-details.entity";
import { InvoiceHeaderEntity } from "src/modules/invoice-headers/invoice-headers.entity";
import { ItemEntity } from "src/modules/items/items.entity";
import { ProfileEntity } from "src/modules/profiles/profiles.entity";
import { UserEntity } from "src/modules/users/users.entity";
import { WhiteListDetailEntity } from "src/modules/white-list-details/white-list-details.entity";
import { WhiteListHeaderEntity } from "src/modules/white-list-headers/white-list-headers.entity";
import { Repository } from "typeorm";

@Injectable()
export class BeanManagementService {
    public constructor(
        @InjectRepository(UserEntity) public readonly user: Repository<UserEntity>,
        @InjectRepository(ProfileEntity) public readonly profile: Repository<ProfileEntity>,
        @InjectRepository(ItemEntity) public readonly item: Repository<ItemEntity>,
        @InjectRepository(CategoryEntity) public readonly category: Repository<CategoryEntity>,
        @InjectRepository(CartHeaderEntity) public readonly cartHeader: Repository<CartHeaderEntity>,
        @InjectRepository(CartDetailEntity) public readonly cartDetail: Repository<CartDetailEntity>,
        @InjectRepository(WhiteListHeaderEntity) public readonly whiteListHeader: Repository<WhiteListHeaderEntity>,
        @InjectRepository(WhiteListDetailEntity) public readonly whiteListDetail: Repository<WhiteListDetailEntity>,
        @InjectRepository(InvoiceHeaderEntity) public readonly invoiceHeader: Repository<InvoiceHeaderEntity>,
        @InjectRepository(InvoiceDetailEntity) public readonly invoiceDetail: Repository<InvoiceDetailEntity>
    ) {}
}