import { Partner } from "src/partners/entities/partner.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class MedicalExam {

    @Column({primary : true, generated: true})
    id : number;

    @ManyToOne(() => Partner, partner => partner.medicalExams)
    partner: Partner;

    @Column()
    examinee_Id : string;

    @Column()
    examiner_Name : string;

    @Column()
    date : Date;

    @Column()
    result : boolean;

    @Column()
    restrictions : string;
}
