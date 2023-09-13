import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn } from "typeorm";


@Entity('invoice_detail')
export class InvoiceDetailEntity extends BaseEntity{

    @PrimaryColumn({
        type: 'varchar',
    })
    invoice_id: string;

    @PrimaryColumn({
        type: 'varchar',
    })
    item_id: string;

    @Column({
        type: 'int',
    })
    quantity: number;
}