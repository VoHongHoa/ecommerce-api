import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from '../categories/categories.entity';
import { CartDetailEntity } from '../cart-details/cart-details.entity';
import { WhiteListDetailEntity } from '../white-list-details/white-list-details.entity';

@Entity('item')
export class ItemEntity extends BaseEntity {

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

  @Column({
    type: 'varchar'
  })
  category_id: string;

  @ManyToOne(()=>CategoryEntity, (category) => category.items)
  @JoinColumn({
    name: 'category_id',
    referencedColumnName: 'id'
  })
  category: CategoryEntity;

  @OneToMany(()=> CartDetailEntity, (cartDetail) => cartDetail.item)
  cartDetails: CartDetailEntity[];

  @OneToMany(()=> WhiteListDetailEntity, (whiteListDetail) => whiteListDetail.item)
  whiteListDetails: WhiteListDetailEntity[];
  
}
