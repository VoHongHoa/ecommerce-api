import { BaseEntity } from "src/common/base.entity";
import { Entity, Column } from "typeorm";


@Entity('invoice_detail')
export class InvoiceDetailEntity extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    invoice_id: string;

    @Column({
        type: 'varchar',
    })
    item_id: string;

    @Column({
        type: 'int',
    })
    quantity: number;
}