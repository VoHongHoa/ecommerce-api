import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, OneToMany, OneToOne } from "typeorm";
import { CartDetailEntity } from "../cart-details/cart-details.entity";
import { UserEntity } from "../users/users.entity";


@Entity('cart_header')
export class CartHeaderEntity extends BaseEntity{

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

    @OneToOne(() => UserEntity, (user) => user.cart)
    user: UserEntity;
}