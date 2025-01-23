import { IsBoolean , IsDateString, IsString } from "class-validator";

export class CreateMedicalExamDto {
    @IsString()
    partner_Name: string;

    @IsString()   
    examinee_Id : string;
    
    @IsString()
    examiner_Name : string;
    
    @IsDateString()
    date: string;
    
    @IsBoolean()
    result : boolean;
    
    @IsString()
    restrictions : string;
}
