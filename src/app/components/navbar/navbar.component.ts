import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

function isNavigationEnd(event: Event): event is NavigationEnd {
  return event instanceof NavigationEnd;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isCategoryActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(isNavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isCategoryActive = this.checkIfCategoryActive(event.urlAfterRedirects);
    });
  }

  private checkIfCategoryActive(url: string): boolean {
    return url.startsWith('/categoria/');
  }
}


