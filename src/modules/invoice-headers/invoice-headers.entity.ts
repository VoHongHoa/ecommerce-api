import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


@Entity('invoice_header')
export class InvoiceHeaderEntity extends BaseEntity{
    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
    })
    user_id: string;

    @Column({
        type: 'int',
    })
    num_item: number;

    @Column({
        type: 'int',
    })
    total_money: number;
}