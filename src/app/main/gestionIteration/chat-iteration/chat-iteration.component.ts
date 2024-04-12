import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Chat } from 'app/Model/chat';
import { WebSocketService } from 'app/Services/gestionIterationServices/webSocketservice.service';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-chat-iteration',
  templateUrl: './chat-iteration.component.html',
  styleUrls: ['./chat-iteration.component.scss']
})
export class ChatIterationComponent implements OnInit, OnDestroy {
  chatForm: FormGroup;
  messageControl: FormControl;
  chatMessage: Chat;
  messages: Chat[] = [];
  private subscription: Subscription;

  constructor(private chatService: WebSocketService, private authent: AuthenticationService) {}
  userPrenom= this.authent.currentUserValue.prenom;
  ngOnInit(): void {
    this.messageControl = new FormControl('', Validators.required);

    this.chatForm = new FormGroup({
      message: this.messageControl,
    });

    this.subscription = this.chatService.getMessages().subscribe((chatMessage: Chat) => {
      this.messages.push(chatMessage);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

    sendMessage(): void {
      if (this.chatForm.invalid) {
        return;
      }

      this.chatMessage = {
        id: null,
        content: this.messageControl.value,
        auteur: this.authent.currentUserValue
      };

      this.chatService.sendMessage(this.chatMessage);
      this.messageControl.setValue('');
    }
}
