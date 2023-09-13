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

}