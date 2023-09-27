import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileEntity } from "src/modules/profiles/profiles.entity";
import { UserEntity } from "src/modules/users/users.entity";
import { BeanManagementService } from "./bean-management.service";
import { CategoryEntity } from "src/modules/categories/categories.entity";
import { ItemEntity } from "src/modules/items/items.entity";
import { CartHeaderEntity } from "src/modules/cart-headers/cart-headers.entity";
import { CartDetailEntity } from "src/modules/cart-details/cart-details.entity";
import { WhiteListHeaderEntity } from "src/modules/white-list-headers/white-list-headers.entity";
import { WhiteListDetailEntity } from "src/modules/white-list-details/white-list-details.entity";
import { InvoiceHeaderEntity } from "src/modules/invoice-headers/invoice-headers.entity";
import { InvoiceDetailEntity } from "src/modules/invoice-details/invoice-details.entity";
import { RoleEntity } from "src/modules/roles/roles.entity";
import { RoleACLProfileEntity } from "src/modules/role-acl-profiles/role-acl-profiles.entity";
import { ACLEntity } from "src/modules/acl/acl.entity";
import { UiACLEntity } from "src/modules/ui-acl/ui-acl.entity";
import { UsersService } from "src/modules/users/users.service";
import { ProfilesService } from "src/modules/profiles/profiles.service";
import { CategoriesService } from "src/modules/categories/categories.service";
import { ItemsService } from "src/modules/items/items.service";
import { CartHeadersService } from "src/modules/cart-headers/cart-headers.service";
import { CartDetailsService } from "src/modules/cart-details/cart-details.service";
import { WhiteListHeadersService } from "src/modules/white-list-headers/white-list-headers.service";
import { WhiteListDetailsService } from "src/modules/white-list-details/white-list-details.service";
import { InvoiceHeadersService } from "src/modules/invoice-headers/invoice-headers.service";
import { InvoiceDetailsService } from "src/modules/invoice-details/invoice-details.service";
import { RolesService } from "src/modules/roles/roles.service";
import { RoleACLProfilesService } from "src/modules/role-acl-profiles/role-acl-profiles.service";
import { ACLService } from "src/modules/acl/acl.service";
import { UiACLService } from "src/modules/ui-acl/ui-acl.service";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            ProfileEntity,
            CategoryEntity,
            ItemEntity,
            CartHeaderEntity,
            CartDetailEntity,
            WhiteListHeaderEntity,
            WhiteListDetailEntity,
            InvoiceHeaderEntity,
            InvoiceDetailEntity,
            RoleEntity,
            RoleACLProfileEntity,
            ACLEntity,
            UiACLEntity
        ])
    ],
    providers: [
        BeanManagementService,
        UsersService,
        ProfilesService,
        CategoriesService,
        ItemsService,
        CartHeadersService,
        CartDetailsService,
        WhiteListHeadersService,
        WhiteListDetailsService,
        InvoiceHeadersService,
        InvoiceDetailsService,
        RolesService,
        RoleACLProfilesService,
        ACLService,
        UiACLService
    ],
    exports: [
        BeanManagementService,
        UsersService,
        ProfilesService,
        CategoriesService,
        ItemsService,
        CartHeadersService,
        CartDetailsService,
        WhiteListHeadersService,
        WhiteListDetailsService,
        InvoiceHeadersService,
        InvoiceDetailsService,
        RolesService,
        RoleACLProfilesService,
        ACLService,
        UiACLService
    ]
})
export class ServiceModule {}