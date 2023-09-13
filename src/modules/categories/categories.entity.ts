import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity('Categories')
export class CategoryEntity extends BaseEntity {
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
    type: 'array',
  })
  image: string[];
}
