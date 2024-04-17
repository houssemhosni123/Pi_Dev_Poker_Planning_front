import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Userstory } from "Models/userstory.model";
import { UserStoryService } from "app/Services/gestionUserStoryServices/UserStoryServices";
import { Router } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
@Component({
  selector: "app-afficher-userstory",
  templateUrl: "./afficher-userstory.component.html",
  styleUrls: ["./afficher-userstory.component.scss"],
})
export class AfficherUserstoryComponent implements OnInit {
  public contentHeader: object;
  userstorys: Userstory[];
  projetDetails: any = {};
  dropdownStyle: { [key: string]: string } = {};
  isDropdownOpen: boolean = false;
  searchText: string;
  constructor(
    private UserstoryService: UserStoryService,
    private router: Router,
    private _renderer: Renderer2,
    private _elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: "Bootstrap Tables",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Home",
            isLink: true,
            link: "/",
          },
          {
            name: "Table",
            isLink: true,
            link: "/",
          },
          {
            name: "Bootstrap Tables",
            isLink: false,
          },
        ],
      },
    };

    this.loadUserStorys();
  }

  //afficher userstory
  loadUserStorys(): void {
    this.UserstoryService.getUserStorys().subscribe(
      (data: Userstory[]) => {
        this.userstorys = data;
        console.log(this.userstorys);
      },
      (error) => {
        console.log(error);
      }
    );

    //modifier userstory
  }

  updateUserStory(idUserStory: number, userstory: Userstory): void {
    this.router.navigate(["/edit-userstory", idUserStory]);
  }

  //afficher details projet
  loadProjetDetails(idUserStory: number): void {
    this.UserstoryService.getProjetDetailsForUserStory(idUserStory).subscribe(
      (data) => {
        // Redirection vers la page des détails du projet avec l'ID du projet
        this.router.navigate(["/projet", idUserStory]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //couleur de l'affichage du tableau
  getBackgroundColor(Userstory): string {
    let colors = [];
    colors.push("#90CAF9"); // Bleu clair
    colors.push("#A5D6A7"); // Vert clair
    colors.push("#FFCDD2"); // Rouge clair
    colors.push("#FFE0B2"); // Orange clair
    colors.push("#80DEEA"); // Bleu ciel clair
    colors.push("#B39DDB"); // Violet clair
    colors.push("#FFF59D"); // Jaune clair
    colors.push("#81D4FA"); // Bleu clair 2
    colors.push("#E1BEE7"); // Violet clair 2
    colors.push("#FFE082"); // Jaune clair 2
    colors.push("#80CBC4"); // Turquoise clair
    colors.push("#FFAB91"); // Saumon clair
    colors.push("#81C784"); // Vert d'eau clair
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }
  //menu deroulant
  toggleDropdown(event: MouseEvent, container: HTMLElement) {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      const button = event.currentTarget as HTMLElement;
      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const leftOffset = buttonRect.left - containerRect.left;
      const x = buttonRect.top - 100;
      this.dropdownStyle = {
        display: "block",
        position: "absolute",
        top: `${x}px`,
        left: `${leftOffset}px`,
      };
    } else {
      this.dropdownStyle = {
        display: "none",
      };
    }
    event.stopPropagation();
  }

  search(event) {
    this.UserstoryService.search(this.searchText).subscribe((data) => {
      this.userstorys = data;
    });
  }

  // Méthode pour masquer ou afficher le menu vertical
  /*toggleVerticalMenu(hidden: boolean) {
    if (hidden) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'data-col', '1-column');
    } else {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'data-col');
    }
  }*/
}
