import { BaseEntity } from "src/common/base.entity";
import { Entity, Column } from "typeorm";


@Entity('invoice_header')
export class InvoiceHeaderEntity extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    code: string;

    @Column({
        type: 'varchar',
    })
    customer_id: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    customer_name: string;

    @Column({
        type: 'varchar',
        length: 15
    })
    customer_phone: string;

    @Column({
        type: 'int',
    })
    num_item: number;

    @Column({
        type: 'int',
    })
    total_money: number;
}