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
            InvoiceDetailEntity
        ])
    ],
    providers: [
        BeanManagementService,
    ],
    exports: [
        BeanManagementService,
    ]
})
export class ServiceModule {}