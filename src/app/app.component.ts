import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'vanilla-tilt'; 
declare var VanillaTilt: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    VanillaTilt.init(document.querySelectorAll(".tilt"));
  }

  joinServer() {
    window.open("https://discord.gg/J3tvqde", "_blank");
  }
}
