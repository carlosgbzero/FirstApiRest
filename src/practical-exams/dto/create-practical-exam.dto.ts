import { IsBoolean, IsISO8601, IsString } from "class-validator";

export class CreatePracticalExamDto {
    @IsString()
    partner_Name: string;

    @IsString()
    license_Type : string
        
    @IsString()   
    examinee_Id : string;
            
    @IsString()
    examiner_Name : string;
    
    @IsISO8601()
    date: string;
            
    @IsBoolean()
    result : boolean;
}
