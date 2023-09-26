import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/enums/role.enum';
import { AUTHORIZE_KEY } from './authorize.decorator';
 
@Injectable()
export class AutherizeGuard implements CanActivate {
    constructor (private reflector: Reflector) {}

    canActivate(context: ExecutionContext) : boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(AUTHORIZE_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return requiredRoles[0] == user.role;
    }
}