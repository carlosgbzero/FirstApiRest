import { MedicalExam } from "src/medical-exams/entities/medical-exam.entity";
import { PracticalExam } from "src/practical-exams/entities/practical-exam.entity";
import { TheoristExam } from "src/theorist-exams/entities/theorist-exam.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Partner {

    @Column({primary : true, generated : true })
    id : number

    @Column()
    name : string

    @Column()
    type : string

    @Column()
    direction : string

    @Column()
    phone : string

    @OneToMany(() => MedicalExam, medicalExam => medicalExam.partner)
    medicalExams: MedicalExam[];

    @OneToMany(() => TheoristExam, theoristExam => theoristExam.partner)
    theoristExams: TheoristExam[];

    @OneToMany(() => PracticalExam, practicalExam => practicalExam.partner)
    practicalExams: PracticalExam[];
}
