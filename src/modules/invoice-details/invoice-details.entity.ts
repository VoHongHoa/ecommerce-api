import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { InvoiceHeaderEntity } from "../invoice-headers/invoice-headers.entity";
import { ItemEntity } from "../items/items.entity";


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

    @ManyToOne(()=> InvoiceHeaderEntity, (invoiceHeader) => invoiceHeader.invoiceDetails)
    @JoinColumn({
        name: 'invoice_id',
        referencedColumnName: 'id'
    })
    invoiceHeader: InvoiceDetailEntity;

    @ManyToOne(() => ItemEntity, (item) => item.invoiceDetails)
    @JoinColumn({
        name: 'item_id',
        referencedColumnName: 'id'
    })
    item: ItemEntity;
}