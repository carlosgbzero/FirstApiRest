import { License } from "src/licenses/entities/license.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Infraction {

    @Column({primary: true, generated: true})
    id : number;

    @Column()
    date : Date;

    @Column()
    severity : string;

    @Column()
    description : string;

    @Column()
    points : number;

    @Column()
    status : string;

    @ManyToOne(()=>License, license => license.infractions)
    license : License;

}
