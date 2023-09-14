import { BaseEntity } from "src/common/base.entity";
import { Entity, Column } from "typeorm";


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
}