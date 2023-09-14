import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


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
}