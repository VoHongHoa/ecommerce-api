import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated, ManyToOne, JoinColumn } from "typeorm";
import { WhiteListHeaderEntity } from "../white-list-headers/white-list-headers.entity";
import { ItemEntity } from "../items/items.entity";


@Entity('white_list_detail')
export class WhiteListDetailEntity extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    white_list_header_id: string;

    @ManyToOne(()=>WhiteListHeaderEntity, (whiteListHeader) => whiteListHeader.whiteListDetails)
    @JoinColumn({
        name: 'white_list_header_id',
        referencedColumnName: 'id'
    })
    whiteListHeader: WhiteListHeaderEntity;

    @Column({
        type: 'varchar',
    })
    item_id: string;

    @ManyToOne(()=>ItemEntity, (item)=>item.whiteListDetails)
    @JoinColumn({
        name: 'item_id',
        referencedColumnName: 'id'
    })
    item: ItemEntity;
}