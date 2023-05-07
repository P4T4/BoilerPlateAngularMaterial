import { Component } from '@angular/core';
import { INavbarLink } from '@shared/models/navbar-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinkList: INavbarLink[] = [
    {
      path: '',
      icon: 'home',
      label: 'Parent',
      children: [
        {
          path: '',
          icon: 'home',
          label: 'children',
          children: [
            { path: '', icon: 'home', label: 'sub-children', children: [] },
            { path: '', icon: 'home', label: 'sub-children2', children: [] },
          ],
        },
      ],
    },
    {
      path: '',
      icon: 'thumb_down',
      label: 'Parent 3',
      children: [
        { path: '', icon: 'home', label: 'children', children: [] },
        { path: '', icon: 'home', label: 'children', children: [] },
      ],
    },
    {
      path: '',
      icon: 'thumb_up',
      label: 'Parent 2',
      children: [],
    },
  ];
  isExpanded = true;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
