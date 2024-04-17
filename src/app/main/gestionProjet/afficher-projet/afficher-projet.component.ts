import { Component, OnInit } from "@angular/core";
import { ProjetService } from "app/Services/gestionProjetServices/ProjetServices";
import { data } from "autoprefixer";
import { Projet } from "Models/projet.model";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { saveAs } from 'file-saver';
@Component({
  selector: "app-afficher-projet",
  templateUrl: "./afficher-projet.component.html",
  styleUrls: ["./afficher-projet.component.scss"],
})
export class AfficherProjetComponent implements OnInit {
  projets: Projet[];
  selectedProject = null;
  public contentHeader: object;
  showSucessDelete: boolean = false;
  dropdownStyle: { [key: string]: string } = {};
  isDropdownOpen: boolean = false;
  constructor(
    private projetService: ProjetService,
    private router: Router,
    private httpClient: HttpClient,
    private modalService: NgbModal
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

    this.loadProjets();
  }
  loadProjets(): void {
    this.projetService.getProjets().subscribe(
      (data: Projet[]) => {
        this.projets = data;
        console.log(this.projets);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateProjet(idProjet: number, projet: Projet): void {
    this.router.navigate(["/edit-projet", idProjet]);
  }

  //suppimer projet avec userstory
  deleteProjet(idProjet: number) {
    this.httpClient
      .delete(
        `http://localhost:8081/pokerplanning/Projet/deleteprojet/${idProjet}`
      )
      .subscribe(
        () => {
          // Gérer la suppression réussie
          console.log("Projet supprimé avec succès.");
          this.showSucessDelete = true;
          setTimeout(() => {
            this.showSucessDelete = false;
            this.modalService.dismissAll();
            this.loadProjets();
          }, 2000);

          // Mettre à jour la liste des projets ou toute autre logique nécessaire
        },
        (error: any) => {
          console.error("Erreur lors de la suppression du projet:", error);
        }
      );
  }
  // modal Open Danger
  modalOpenDanger(project, modalDanger) {
    this.selectedProject = project;
    this.modalService.open(modalDanger, {
      centered: true,
      windowClass: "modal modal-danger",
    });
  }

  deleteSelectedProjet() {
    this.deleteProjet(this.selectedProject.idProjet);
  }
  //Icon pour les projets
  getPicture(projectType): string {
    if (projectType === "ANGULAR") {
      return "assets/images/icons/angular.svg";
    } else if (projectType === "FIGMA") {
      return "assets/images/icons/figma.svg";
    } else if (projectType === "REACT") {
      return "assets/images/icons/react.svg";
    } else if (projectType === "BOOTSTRAP") {
      return "assets/images/icons/bootstrap.svg";
    } else if (projectType === "VUEJS") {
      return "assets/images/icons/vuejs.svg";
    } else if (projectType === "SPRINGBOOT") {
      return "assets/images/icons/spring.svg";
    }
  }
 //background color for table
  getBackgroundColor(projet): string {
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
  //API EXCEL
  exportExcel() {
    this.projetService.exportExcel().subscribe((file) => {
      const fileName = "project-list.xlsx";
      saveAs(file, fileName);
    });
  }
  //menu deroulant 
  toggleDropdown(event: MouseEvent, container: HTMLElement) {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      const button = event.currentTarget as HTMLElement;
      const buttonRect = button.getBoundingClientRect();
      console.log("gggg ", buttonRect);
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
}
