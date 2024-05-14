import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BankTransferDTO, UserDTO }from '../../../models';
import { User } from './User';

export class BankTransfer implements BankTransferDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  timestamp: string;

  @ManyToOne(() => User, (user) => user.outgoingTransactions, { eager: true })
  source: UserDTO;

  @ManyToOne(() => User, (user) => user.incomingTransactions, { eager: true })
  destination: UserDTO;
}
