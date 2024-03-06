import { Component } from '@angular/core';
import { Message } from '../chat.model';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [
    {role: 'assistant', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'user', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'assistant', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'user', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'assistant', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'user', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'assistant', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'user', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'assistant', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
    {role: 'user', content: 'asdsadasdasdasdasdsad asd asdsa das das dasdasd asd' },
  ];

}
