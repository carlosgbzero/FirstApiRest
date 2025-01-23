import { SetMetadata } from "@nestjs/common";
import { Role } from "../../common/enums/role.enum";
import { RolesGuard } from "../guards/roles.guard";


export const RolesKey = 'roles'
export const Roles = (roles: Role[]) => SetMetadata(RolesKey , roles)