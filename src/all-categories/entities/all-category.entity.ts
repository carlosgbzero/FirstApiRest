import { LicenseCategory } from "src/license-categories/entities/license-category.entity";
import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class AllCategory {

    @Column({primary: true, generated : true})
    id : number

    @Column()
    category : string

    @Column()
    vehicle : string
    
    @OneToOne(()=>LicenseCategory, licenseCategory => licenseCategory.category)
    licenseCategory : LicenseCategory

}
