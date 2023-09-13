import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity('profile')
export class ProfileEntity extends BaseEntity {

    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar'
    })
    user_id: string;
}