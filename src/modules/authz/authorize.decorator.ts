import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

export const AUTHORIZE_KEY = 'roles';
export const Authorize = (...roles: Role[]) => SetMetadata(AUTHORIZE_KEY, roles);