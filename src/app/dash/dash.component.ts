import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Devices', cols: 1, rows: 1 },
          { title: 'System Status', cols: 1, rows: 1 },
          { title: 'Activity logs', cols: 1, rows: 1 },
          { title: 'System Options', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Devices', cols: 2, rows: 1 },
        { title: 'System Status', cols: 1, rows: 1 },
        { title: 'Activity logs', cols: 1, rows: 2 }, 
        { title: 'System Options', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
