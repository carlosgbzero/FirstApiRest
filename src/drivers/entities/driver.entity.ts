import { Center } from "src/centers/entities/center.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Driver {

    @Column({primary:true})
    id : string

    @ManyToOne(()=>Center,(center)=>center.drivers,
    {eager:true})
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

}
