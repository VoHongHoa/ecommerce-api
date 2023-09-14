import { Injectable } from "@nestjs/common";
import { BaseService } from "src/common/base.service";
import { BeanManagementService } from "src/common/bean-management.service";

@Injectable()
export class ItemsService extends BaseService {
    constructor(
        public beanManagementService: BeanManagementService
    ){
        super(beanManagementService, beanManagementService.item)
    }
    async getCategory(item_id: string) {
        const item = await this.beanRepository.findOne({
            relations: {
                category: true
            },
            where: {
                id: item_id
            }
        });
        return item.category;
    }
}