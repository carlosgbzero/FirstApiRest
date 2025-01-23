import { Center } from "src/centers/entities/center.entity";
import { License } from "src/licenses/entities/license.entity";
import { Column, Entity, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class Driver {

    @Column({primary:true})
    id : string

    @ManyToOne(()=>Center,(center)=>center.drivers)
    center : Center

    @Column()
    name: string

    @Column()
    lastName : string

    @Column()
    direction : string

    @Column()
    phone : string

    @Column({nullable:true})
    email? : string

    @OneToOne(()=>License, license => license.driver)
    license : License
}
