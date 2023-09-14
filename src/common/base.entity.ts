import { CreateDateColumn, DeleteDateColumn, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {

    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}