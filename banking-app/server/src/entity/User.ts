import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { BankTransfer } from "./BankTransfer";
import { UserDTO } from "../../../models";

@Entity()
export class User implements UserDTO {

   @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: string;

  @Column()
  name:string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  idCard: string;

  @OneToMany(() => BankTransfer, (transaction) => transaction.source)
  outgoingTransactions: BankTransfer[];

  @OneToMany(() => BankTransfer, (transaction) => transaction.destination)
  incomingTransactions: BankTransfer[];
}
