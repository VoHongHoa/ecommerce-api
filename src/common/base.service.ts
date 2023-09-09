import { BadRequestException, Injectable } from "@nestjs/common";
import { BeanManagementService } from "./bean-management.service";

@Injectable()
export class BaseService {
    constructor(
        public beanManagementService: BeanManagementService,
        public beanRepository
    ){}

    async create(data: any) {
        return await this.beanRepository.save(data);
    }

    async getAll() {
        return await this.beanRepository.find({ withDeleted: false });
    }
    
    async getAllWithDeleted() {
        return await this.beanRepository.find({ withDeleted: true });
    }
    
    async getOneBy(data: any) {
        return await this.beanRepository.findOneBy(data);
    }

    async update(id: string, data: any){
        const record = await this.beanRepository.findOneBy({
            id: id,
        });

        if (!record) {
            throw new BadRequestException('Record not found!');
        }

        for (const [key, value] of Object.entries(data)) record[key] = value;

        return await this.beanRepository.save(record);
    }
    
    async permanentDelete(id: any) {
        return await this.beanRepository.delete({id: id}); // temporarily use delete, later update to remove with @beforeRemove and @afterRemove
    }

    async softDelete(id: any) {
        return await this.beanRepository.softDelete({id: id}); // temporily use delete, later update to remove
    }
    
    async recover(id: any) {
        return this.beanRepository.recover({id: id});
    }
}