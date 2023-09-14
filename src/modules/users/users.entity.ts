import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { ProfileEntity } from "../profiles/profiles.entity";
import { CartHeaderEntity } from "../cart-headers/cart-headers.entity";
import { WhiteListHeaderEntity } from "../white-list-headers/white-list-headers.entity";
import { InvoiceHeaderEntity } from "../invoice-headers/invoice-headers.entity";


@Entity('user')
export class UserEntity extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
        nullable: false
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        default: 'active'
    })
    status: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false,
        default: 'customer'
    })
    role: string;

    @Column({
        type: 'varchar'
    })
    profile_id: string;

    @OneToOne(()=>ProfileEntity, (profile) => profile.user)
    @JoinColumn({
        name: 'profile_id',
        referencedColumnName: 'id'
    })
    profile: ProfileEntity;

    @Column({
        type: 'varchar'
    })
    cart_id: string;

    @OneToOne(() => CartHeaderEntity, (cart) => cart.user)
    @JoinColumn({
        name: 'cart_id',
        referencedColumnName: 'id'
    })
    cart: CartHeaderEntity;

    @Column({
        type: 'varchar'
    })
    white_list_id: string;

    @OneToOne(()=>WhiteListHeaderEntity, (whiteList) => whiteList.user)
    @JoinColumn({
        name: 'white_list_id',
        referencedColumnName: 'id'
    })
    whiteList: WhiteListHeaderEntity;

    @OneToMany(()=>InvoiceHeaderEntity, (invoice) => invoice.user)
    invoices: InvoiceHeaderEntity[];
}