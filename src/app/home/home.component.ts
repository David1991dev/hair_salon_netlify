import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value=250;

  @ViewChild('salonImage') salonImage: ElementRef | undefined;

  @HostListener('window:scroll', ['$event'])
  onResize(event: any) {
  console.log(window.scrollY);


}

  constructor() { }

  ngOnInit(): void {
    console.log(this.salonImage);

  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }




}
