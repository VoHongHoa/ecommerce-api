import { Injectable }  from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ACLEntity } from "src/modules/acl/acl.entity";
import { CartDetailEntity } from "src/modules/cart-details/cart-details.entity";
import { CartHeaderEntity } from "src/modules/cart-headers/cart-headers.entity";
import { CategoryEntity } from "src/modules/categories/categories.entity";
import { InvoiceDetailEntity } from "src/modules/invoice-details/invoice-details.entity";
import { InvoiceHeaderEntity } from "src/modules/invoice-headers/invoice-headers.entity";
import { ItemEntity } from "src/modules/items/items.entity";
import { ProfileEntity } from "src/modules/profiles/profiles.entity";
import { RoleACLProfileEntity } from "src/modules/role-acl-profiles/role-acl-profiles.entity";
import { RoleEntity } from "src/modules/roles/roles.entity";
import { UiACLEntity } from "src/modules/ui-acl/ui-acl.entity";
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
        @InjectRepository(InvoiceDetailEntity) public readonly invoiceDetail: Repository<InvoiceDetailEntity>,
        @InjectRepository(RoleEntity) public readonly role: Repository<RoleEntity>,
        @InjectRepository(RoleACLProfileEntity) public readonly roleACLProfile: Repository<RoleACLProfileEntity>,
        @InjectRepository(ACLEntity) public readonly acl: Repository<ACLEntity>,
        @InjectRepository(UiACLEntity) public readonly uiAcl: Repository<UiACLEntity>
    ) {}
}