import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { CartHeaderEntity } from "../cart-headers/cart-headers.entity";


@Entity('cart_detail')
export class CartDetailEntity extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    cart_id: string;

    @Column({
        type: 'varchar',
    })
    item_id: string;

    @Column({
        type: 'int',
    })
    quantity: number;

    @ManyToOne(()=>CartHeaderEntity, (cartHeader) => cartHeader.cartDetails)
    @JoinColumn({
        name: 'cart_id',
        referencedColumnName: 'id'
    })
    cartHeader: CartHeaderEntity;
}