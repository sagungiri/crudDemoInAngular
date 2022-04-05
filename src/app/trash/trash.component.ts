import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.sass']
})
export class TrashComponent implements OnInit {

  constructor(public global: GlobalService, private _router: Router) { }

  ngOnInit(): void {
    this.global.trashIcon = '../../assets/trash.svg';
    this.global.userIcon = '../../assets/user.png';
  }
  navigateToUserList() {
    this._router.navigate(['/users']);
  }
}
