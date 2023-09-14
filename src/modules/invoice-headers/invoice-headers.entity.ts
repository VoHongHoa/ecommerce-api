import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { InvoiceDetailEntity } from "../invoice-details/invoice-details.entity";
import { UserEntity } from "../users/users.entity";


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
    user_id: string;

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

    @OneToMany(()=>UserEntity, (user) => user.invoices)
    @JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id'
    })
    user: UserEntity;

    @ManyToOne(()=>InvoiceDetailEntity, (invoiceDetail)=> invoiceDetail.invoiceHeader)
    invoiceDetails: InvoiceDetailEntity[];

}