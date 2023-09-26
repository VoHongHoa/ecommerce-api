import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { ProfileEntity } from "../profiles/profiles.entity";
import { CartHeaderEntity } from "../cart-headers/cart-headers.entity";
import { WhiteListHeaderEntity } from "../white-list-headers/white-list-headers.entity";
import { InvoiceHeaderEntity } from "../invoice-headers/invoice-headers.entity";
import { RoleEntity } from "../roles/roles.entity";
import { Role } from "src/enums/role.enum";


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
        type: 'enum',
        enum: Role,
        default: Role.User
    })
    role: string;

    // @Column({
    //     type: 'varchar',
    //     nullable: false
    // })
    // role_id: string;

    // @ManyToOne(()=>RoleEntity, (role) => role.users)
    // @JoinColumn({
    //     name: 'role_id',
    //     referencedColumnName: 'id'
    // })
    // role: RoleEntity;

    @Column({
        type: 'varchar',
        nullable: true
    })
    profile_id: string;

    @OneToOne(()=>ProfileEntity, (profile) => profile.user)
    @JoinColumn({
        name: 'profile_id',
        referencedColumnName: 'id'
    })
    profile: ProfileEntity;

    @Column({
        type: 'varchar',
        nullable: true
    })
    cart_id: string;

    @OneToOne(() => CartHeaderEntity, (cart) => cart.user)
    @JoinColumn({
        name: 'cart_id',
        referencedColumnName: 'id'
    })
    cart: CartHeaderEntity;

    @Column({
        type: 'varchar',
        nullable: true
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