import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BankTransferDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<BankTransferDTO[]>('/api/transactions', transaction);
  }

  constructor() { }
}
