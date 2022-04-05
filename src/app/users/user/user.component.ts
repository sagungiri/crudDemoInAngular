import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  userId : any = '';
  userForm: FormGroup | undefined;
  submitted: boolean = false;

  constructor(public global: GlobalService,
     private _router: Router,
     private _route: ActivatedRoute,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.global.trashIcon = '../../assets/trash.svg';
    this.global.userIcon = '../../assets/user.png';

    this.userId = this._route.snapshot.paramMap.get('id');
    this.userForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Age: ['', Validators.required],
      Salary: ['', Validators.required],
    });
  }

  navigateToTrash() {
    this._router.navigate(['/trash']);
  }

  getUsers(){
    
  }

  submitDetail(){

  }
}
