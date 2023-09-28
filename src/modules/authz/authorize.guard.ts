import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AUTHORIZE_KEY, RequiredPermission } from './authorize.decorator';
import { CaslAbilityFactory } from './casl-ability.factory';
 
@Injectable()
export class AutherizeGuard implements CanActivate {
    constructor (
        private reflector: Reflector,
        private caslAbilityFactory:CaslAbilityFactory
    ) {}

    async canActivate(context: ExecutionContext) {
        const requiredPermissions = this.reflector.getAllAndOverride<RequiredPermission[]>(AUTHORIZE_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredPermissions) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const ability = await this.caslAbilityFactory.createForUser(user);

        return requiredPermissions.every(permission => ability.can(...permission));
    }
}