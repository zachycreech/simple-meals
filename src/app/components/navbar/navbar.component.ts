import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  aboutZachy = "https://zachywheeler.github.io/website/"
  aboutWilder= "https://www.linkedin.com/in/wilder-hamm-9948a0161/"
  constructor() { }

  ngOnInit(): void {
  }

}
