import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
  standalone: false
})
export class Footer {
    protected readonly currentYear = new Date().getFullYear();

}
