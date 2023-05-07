import { Component, Input } from '@angular/core';
import { INavbarLink } from '@shared/models/navbar-link.model';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css'],
})
export class NavListComponent {
  @Input() navLink!: INavbarLink;
  @Input() isExpanded!: boolean;
  @Input() isShowing!: boolean;
  showSubmenu = false;

  public get isExpandedOrIsShowing() {
    return this.isExpanded || this.isShowing;
  }
}
