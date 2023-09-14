import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ItemEntity } from '../items/items.entity';

@Entity('category')
export class CategoryEntity extends BaseEntity {

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

  @OneToMany(()=>ItemEntity, (item) => item.category)
  items: ItemEntity[];
}
