import { Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { CoreMenu } from '@core/types';
import { Role } from 'app/auth/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  menu: CoreMenu[] = []; // Assuming you have a menu property to hold the filtered menu items
  currentUserRole: Role; 
  private _menuType: string;

  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   * @param {Renderer2} _renderer
   */
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // Set the default menu
    this._menuType = 'vertical-menu';
  }

  // Accessors
  // -----------------------------------------------------------------------------------------------------

  //Get the menu type
  get menuType(): string {
    return this._menuType;
  }

  @Input()
  //Set the menu type to the native element
  set menuType(value: string) {
    // Remove the old class name from native element
    this._renderer.removeClass(this._elementRef.nativeElement, this.menuType);

    // Store the menuType value
    this._menuType = value;

    // Add the new class name from native element
    this._renderer.addClass(this._elementRef.nativeElement, value);
  }
  ngOnInit(): void {
    // Logic to fetch or load the menu items
    // For demonstration purposes, let's assume you already have the menu items in the `menu` array

    // Filter the menu items based on the current user's role
    this.filterMenuItems();
  }

  filterMenuItems(): void {
    this.menu = this.menu.filter(item => {
      // If the item has a role defined and the current user's role is in the item's role array
      if (item.role && this.currentUserRole && item.role.includes(this.currentUserRole)) {
        return true; // Include the item in the filtered menu
      }
      // If the item does not have a role defined, include it by default
      if (!item.role) {
        return true;
      }
      // Exclude the item if the current user's role is not in the item's role array
      return false;
    });
  }
}