import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { CartHeaderEntity } from "../cart-headers/cart-headers.entity";
import { ItemEntity } from "../items/items.entity";


@Entity('cart_detail')
export class CartDetailEntity extends BaseEntity{

    @Column({
        type: 'int',
    })
    quantity: number;

    @Column({
        type: 'varchar',
    })
    cart_id: string;

    @ManyToOne(()=>CartHeaderEntity, (cartHeader) => cartHeader.cartDetails)
    @JoinColumn({
        name: 'cart_id',
        referencedColumnName: 'id'
    })
    cartHeader: CartHeaderEntity;

    @Column({
        type: 'varchar',
    })
    item_id: string;

    @ManyToOne(() => ItemEntity, (item) => item.cartDetails)
    @JoinColumn({
        name: 'item_id',
        referencedColumnName: 'id'
    })
    item: ItemEntity;

}