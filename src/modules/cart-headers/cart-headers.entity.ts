import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, OneToMany } from "typeorm";
import { CartDetailEntity } from "../cart-details/cart-details.entity";


@Entity('cart_header')
export class CartHeaderEntity extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    owner_id: string;

    @Column({
        type: 'int',
    })
    num_item: number;

    @Column({
        type: 'int',
    })
    total_money: number;

    @OneToMany(()=>CartDetailEntity, (cartDetail) => cartDetail.cartHeader)
    cartDetails: CartDetailEntity[];
}