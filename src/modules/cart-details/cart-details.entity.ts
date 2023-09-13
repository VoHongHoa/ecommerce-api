import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


@Entity('cart_detail')
export class CartDetailEntity extends BaseEntity{

    @PrimaryColumn({
        type: 'varchar',
    })
    cart_id: string;

    @PrimaryColumn({
        type: 'varchar',
    })
    item_id: string;

    @Column({
        type: 'int',
    })
    quantity: number;
}