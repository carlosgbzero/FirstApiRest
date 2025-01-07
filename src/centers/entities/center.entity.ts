import { Driver } from "src/drivers/entities/driver.entity";
import { Column, Entity, OneToMany, } from "typeorm";

@Entity()

export class Center {

    @Column({primary: true, generated:true})
    id : number

    @Column()
    logo : string

    @Column()
    name : string

    @Column()
    direction : string

    @Column()
    phone : string

    @Column()
    email : string

    @Column()
    dir_Name : string

    @OneToMany(()=>Driver, (driver)=>driver.center)
    drivers: Driver[];
}
