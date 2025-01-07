import { MedicalExam } from "src/medical-exams/entities/medical-exam.entity";
import { Partner } from "src/partners/entities/partner.entity";
import { BeforeInsert, Column, Entity, ManyToOne, DataSource } from "typeorm";

@Entity()
export class TheoristExam {

    @Column({primary : true, generated: true})
    id : number;
    
    @Column()
    examinee_Id : string;
    
    @Column()
    examiner_Name : string;
    
    @Column()
    date : Date;
    
    @Column()
    result : boolean;
    
    @ManyToOne(()=>Partner, partner => partner.theoristExams)
    partner : Partner

}
