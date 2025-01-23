import { Role } from "src/common/enums/role.enum";
import { Column, Entity } from "typeorm";

@Entity()
export class User {

    @Column({primary : true, generated : true})
    id : number
    
    @Column({nullable : false})
    name : string
    
    @Column({unique : true, nullable:false})
    email : string
    
    @Column({nullable : false, select : false})
    password : string

    @Column({ type:'enum', default : Role.User, enum: Role})
    role : Role



}
