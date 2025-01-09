import { Driver } from "src/drivers/entities/driver.entity";
import { Infraction } from "src/infractions/entities/infraction.entity";
import { LicenseCategory } from "src/license-categories/entities/license-category.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class License {
    @Column({primary: true, generated: true})
    id: number;

    @OneToOne(()=>Driver, driver => driver.license)
    @JoinColumn({name: "driver_id"})
    driver: Driver;

    @Column()
    issue_date: Date;

    @Column()
    expiration_date: Date;

    @Column({nullable: true})
    renewed : Date

    @Column()
    status: string;

    @Column()
    points: number;

    @OneToMany(()=>LicenseCategory, licenseCategory => licenseCategory.license)
    categories : LicenseCategory[];

    @OneToMany(()=>Infraction, infraction => infraction.license)
    infractions : Infraction[];

}
