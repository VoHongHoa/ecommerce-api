import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


@Entity('white_list_detail')
export class WhiteListDetailEntity extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    white_list_id: string;

    @Column({
        type: 'varchar',
    })
    item_id: string;

}