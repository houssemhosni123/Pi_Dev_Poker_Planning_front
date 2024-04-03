import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreTranslationService } from '@core/services/translation.service';

import { locale as german } from 'app/main/GestionTacheProjet/datatables/i18n/de';
import { locale as english } from 'app/main/GestionTacheProjet/datatables/i18n/en';
import { locale as french } from 'app/main/GestionTacheProjet/datatables/i18n/fr';
import { locale as portuguese } from 'app/main/GestionTacheProjet/datatables/i18n/pt';

import * as snippet from 'app/main/GestionTacheProjet/datatables/datatables.snippetcode';

import { DatatablesService } from 'app/main/GestionTacheProjet/datatables/datatables.service';
import { TacheService } from 'app/Services/gestionTacheProjet/tacheProjet';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatablesComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  private tempData = [];
  idTache: number;

  public contentHeader: object;
  public rows: any;
  public selectedOption = 10; // Default value for the number of entries
  public ColumnMode = ColumnMode;
  // Private
 

  // public
  
  public filterDateCreation: string = '';
  public filterLieu: string = '';
  public filterNom: string = '';
  public selected = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  // snippet code variables
  public _snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
  public _snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
  public _snippetCodeRowDetails = snippet.snippetCodeRowDetails;
  public _snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
  public _snippetCodeResponsive = snippet.snippetCodeResponsive;
  public _snippetCodeMultilangual = snippet.snippetCodeMultilangual;
  modalService: any;
  route: any;

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  
  updateRowLimit(): void {
    // Update row limit based on selected option
    this.rows = this.tempData.slice(0, this.selectedOption);
    // Whenever the option changes, always go back to the first page
    this.table.offset = 0;
  }
  /**
   * Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  filterData(): void {
    // Filter data based on criteria
    this.rows = this.tempData.filter(row => {
      const filterDateCreation = this.filterDateCreation ? new Date(this.filterDateCreation) : null;
      const filterLieu = this.filterLieu ? this.filterLieu.toLowerCase() : null;
      const filterNom = this.filterNom ? this.filterNom.toLowerCase() : null;
      
      // Convert row date to a Date object
      const rowDate = row.dateCreation ? new Date(row.dateCreation) : null;
  
      // Check if filterDateCreation is a valid Date object
      const isValidDate = filterDateCreation instanceof Date && !isNaN(filterDateCreation.getTime());
  
      // Compare dates if both filterDateCreation and rowDate are valid
      const dateCreationMatch = isValidDate && rowDate ? rowDate.toDateString() === filterDateCreation.toDateString() : true;
      
      // Check for lieu match
      const lieuMatch = filterLieu ? row.lieu.toLowerCase() === filterLieu : true;
      
      // Check for nom match
      const nomMatch = filterNom ?
        (row.user.nom.toLowerCase().includes(filterNom) || row.user.prenom.toLowerCase().includes(filterNom)) : true;
  
      return dateCreationMatch && lieuMatch && nomMatch;
    });
  
    this.table.offset = 0; // Reset to the first page
  }
 

  /**
   * Row Details Toggle
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * For ref only, log selected values
   *
   * @param selected
   */
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  /**
   * For ref only, log activate events
   *
   * @param selected
   */
  onActivate(event) {
    // console.log('Activate Event', event);
  }
  
  /**
   * Custom Chkbox On Select
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreTranslationService} _coreTranslationService
   */
  taches: any[] = []; // Initialize taches as an empty array

  constructor(private _TacheService: TacheService,private _datatablesService: DatatablesService, private _coreTranslationService: CoreTranslationService) {
    this._unsubscribeAll = new Subject();
    this._coreTranslationService.translate(english, french, german, portuguese);
  }
  fetchData(): void {
    // Fetch your data here, replace this with your actual data fetching logic
    this._TacheService.getAllTaches().subscribe(data => {
      this.rows = data;
      this.tempData = [...data]; // Store a copy of the data for filtering
    });
  }
  calculateRemainingDays(endDate: string): string {
    const currentDate = new Date();
    const endTaskDate = new Date(endDate);
    const differenceInTime = endTaskDate.getTime() - currentDate.getTime();
  
    // Calculate years, months, and days
    const differenceInYears = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 365));
    const remainingMonths = Math.floor((differenceInTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const remainingDays = Math.floor((differenceInTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  
    let remainingString = '';
    if (differenceInYears > 0) {
      remainingString += differenceInYears + ' year';
      if (differenceInYears > 1) remainingString += 's';
      remainingString += ' ';
    }
    if (remainingMonths > 0) {
      remainingString += remainingMonths + ' month';
      if (remainingMonths > 1) remainingString += 's';
      remainingString += ' ';
    }
    if (remainingDays > 0) {
      remainingString += remainingDays + ' day';
      if (remainingDays > 1) remainingString += 's';
    }
  
    return remainingString.trim();
  }
  deleteTache(idTache: number): void {
    this._TacheService.deleteTache(idTache).subscribe({
      next: () => {
        // Handle successful deletion by removing the task from the rows array
        this.rows = this.rows.filter(tache => tache.idTache !== idTache);
        console.log('Task deleted successfully');
      },
      error: (error) => {
        // Handle error, such as displaying an error message
        console.error('Error deleting task:', error);
      }
    });
  }
  
  
  
  
  

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {

    this.fetchData();

     this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
       this.rows = response;
       this.tempData = this.rows;
       this.kitchenSinkRows = this.rows;
       this.exportCSVData = this.rows;
     });
  
     // content header
     this.contentHeader = {
       headerTitle: 'Datatables',
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
             name: 'Forms & Tables',
             isLink: true,
             link: '/'
           },
           {
             name: 'Datatables',
             isLink: false
           }
         ]
       }
     };
   }
   ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
