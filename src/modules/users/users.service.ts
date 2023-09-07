import { Injectable }  from "@nestjs/common";
import {InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(UserEntity)
        private userRepositoty: Repository<UserEntity>,
    ){}

    async getAll() {
        return await this.userRepositoty.find();
    }
    
    async getOneBy(data: any) {
        return await this.userRepositoty.findOneBy(data);
    }

    async create(data: any) {
        return await this.userRepositoty.save(data);
    }
}