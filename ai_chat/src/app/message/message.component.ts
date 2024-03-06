import { Component, Input, inject } from '@angular/core';
import { Message } from '../chat.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @Input()
  message!: Message;

  storageService = inject(StorageService);

  username = this.storageService.getUsername();

}
