import { Partner } from "src/partners/entities/partner.entity";
import { Column, Entity, ManyToOne} from "typeorm";

@Entity()
export class PracticalExam {

    @Column({primary: true, generated: true})
    id: number;
  
    @Column()
    license_Type: string;
  
    @Column()
    examinee_Id: string;
  
    @Column()
    examiner_Name: string;
  
    @Column()
    date: Date;
  
    @Column()
    result: boolean;
  
    @ManyToOne(() => Partner, (partner) => partner.practicalExams)
    partner: Partner;
  
  }
  
