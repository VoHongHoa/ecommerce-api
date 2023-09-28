import { SetMetadata } from '@nestjs/common';
import { AclAction } from 'src/enums/enums';

export type PermissionObjectType = any;
export type RequiredPermission = [AclAction, PermissionObjectType];
export const AUTHORIZE_KEY = 'roles';
export const Authorize = (...params: RequiredPermission[]) => SetMetadata(AUTHORIZE_KEY, params);