import { BaseEntity } from "src/common/base.entity";
import { Entity, Column, PrimaryColumn, Generated } from "typeorm";


@Entity('white_list_header')
export class WhiteListHeaderEntity extends BaseEntity{

    @Column({
        type: 'varchar',
    })
    owner_id: string;

    @Column({
        type: 'int',
    })
    num_item: number;
}