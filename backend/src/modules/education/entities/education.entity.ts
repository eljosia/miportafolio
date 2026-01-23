import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('education')
export class Education {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    institution: string

    @Column()
    degree: string

    @Column()
    fieldOfStudy: string

    @Column()
    startDate: Date

    @Column({ nullable: true })
    endDate?: Date

    @Column({ nullable: true, type: 'text' })
    description?: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
