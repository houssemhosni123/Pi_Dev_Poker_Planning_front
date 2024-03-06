import { Component, OnInit } from '@angular/core';
import { Userstory } from "Models/userstory.model";
import { UserStoryService } from 'app/Services/gestionUserStoryServices/UserStoryServices';
import { Router } from '@angular/router';
@Component({
  selector: 'app-afficher-userstory',
  templateUrl: './afficher-userstory.component.html',
  styleUrls: ['./afficher-userstory.component.scss']
})
export class AfficherUserstoryComponent implements OnInit {
  public contentHeader: object;
  userstorys:Userstory[];
  constructor(private UserstoryService:UserStoryService,private router: Router) {} 

  ngOnInit(): void {
  
  this.contentHeader = {
    headerTitle: 'Bootstrap Tables',
    actionButton: true,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Table',
          isLink: true,
          link: '/'
        },
        {
          name: 'Bootstrap Tables',
          isLink: false
        }
      ]
    }
  };
   
  
  this.loadUserStorys();
}
loadUserStorys(): void {
  this.UserstoryService.getUserStorys().subscribe((data:Userstory[]) => {
      this.userstorys = data;
      console.log(this.userstorys)
    },
    (error) => {
      console.log(error);
    }
  );
  
  }

  }

