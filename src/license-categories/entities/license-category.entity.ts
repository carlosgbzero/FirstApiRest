import { AllCategory } from "src/all-categories/entities/all-category.entity";
import { License } from "src/licenses/entities/license.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class LicenseCategory {

    @Column({primary: true, generated : true})
    id : number

    @ManyToOne(()=>License, license => license.categories)
    license : License

    @OneToOne(()=>AllCategory, allCategory => allCategory.id, 
    {eager : true})
    @JoinColumn({name : "category_Id"})
    category : AllCategory

}
