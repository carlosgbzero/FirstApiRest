import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../../common/enums/role.enum';
import { RolesKey } from '../decorators/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector : Reflector){}

  canActivate(  context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(RolesKey, [context.getHandler(), context.getClass()]);
    if(!requiredRoles)
      true

    const {user} = context.switchToHttp().getRequest()

    return requiredRoles.some((role)=> user.role?.includes(role))
  }
}
