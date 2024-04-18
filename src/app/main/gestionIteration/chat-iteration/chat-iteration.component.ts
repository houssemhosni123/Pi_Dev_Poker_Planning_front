import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Chat } from 'app/Model/chat';
import { WebSocketService } from 'app/Services/gestionIterationServices/webSocketservice.service';
import { AuthenticationService } from 'app/auth/service';
import { User } from 'app/auth/models';

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
  public currentUser: User;

  constructor(private chatService: WebSocketService, private authent: AuthenticationService) {


    this.authent.currentUser.subscribe(x => (this.currentUser = x));

  }
  userPrenom= this.authent.currentUserValue.prenom;
  getUserImageUrl(user: User): string {
    return `http://localhost:8080/downloadFileByName/${user.photo}`;
  }
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

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
