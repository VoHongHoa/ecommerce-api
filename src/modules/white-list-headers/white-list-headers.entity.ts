import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated, OneToOne, OneToMany } from "typeorm";
import { UserEntity } from "../users/users.entity";
import { WhiteListDetailEntity } from "../white-list-details/white-list-details.entity";


@Entity('white_list_header')
export class WhiteListHeaderEntity extends BaseEntity{

    @Column({
        type: 'int',
    })
    num_item: number;

    @OneToOne(()=>UserEntity, (user)=>user.whiteList)
    user: UserEntity;

    @OneToMany(()=> WhiteListDetailEntity, (whiteListDetail)=> whiteListDetail)
    whiteListDetails: WhiteListDetailEntity[];
}