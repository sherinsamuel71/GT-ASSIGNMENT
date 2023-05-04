import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isModalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  modalOpen(){
    this.isModalOpen = true;
  }
  close(){
    this.isModalOpen = false;
  }
}
