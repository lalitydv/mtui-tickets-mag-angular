import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Initialize the sidebar based on the initial view mode
    this.setupSidebar();
  }

  // Function to toggle the sidebar and adjust the main content
  toggleSidenav() {
    this.sidenav.toggle();
  }

  private setupSidebar() {
    // Determine the view mode (desktop or mobile)
    const isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);

    // Set sidebar behavior based on the view mode
    if (isMobile) {
      this.sidenav.mode = 'over'; // Drawer mode for mobile
      this.sidenav.close(); // Close the sidebar in mobile mode
    } else {
      this.sidenav.mode = 'side'; // Sidebar mode for desktop
      this.sidenav.open(); // Open the sidebar in desktop mode
    }
  }
  
}
