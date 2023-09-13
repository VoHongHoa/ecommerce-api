import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('item')
export class ItemEntity extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  code: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  description: string;

  @Column({
    type: 'varchar',
  })
  image: string;

  @Column({
    type: 'int',
  })
  price: number;
}
