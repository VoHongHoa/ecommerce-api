import { Injectable } from "@nestjs/common";
import { BeanManagementService } from "./bean-management.service";

@Injectable()
export class BaseService {
    constructor(
        public beanManagementService: BeanManagementService,
        public beanRepository
    ){}

    async getAll() {
        return await this.beanRepository.find({ withDeleted: false });
    }
    
    async getAllWithDeleted() {
        return await this.beanRepository.find({ withDeleted: true });
    }
    
    async getOneBy(data: any) {
        return await this.beanRepository.findOneBy(data);
    }

    async create(data: any) {
        return await this.beanRepository.save(data);
    }

}