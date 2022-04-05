import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent implements OnInit {

  userArray: any = [];
  removeItem: any = [];

  constructor(public global: GlobalService,
    private _router: Router,
    private _apiService: ApiService) {}

  ngOnInit(): void {
    this.global.trashIcon = '../../assets/trash.svg';
    this.global.userIcon = '../../assets/user.png';
    this.global.addIcon = '../../assets/add.png';
    this.getUserList();
  }

  navigateToTrash() {
    this._router.navigate(['/trash']);
  }

  getUserList(){
this.global.isLoading = true;
const query = 'employees'
this._apiService.getUsers(query).then(
  res => {
if(res){
this.global.isLoading = false;
this.userArray.push(...res.data);
console.log('res', res);
}
  }
).catch(err =>{
  this.global.isLoading = false;
  console.log('err', err);
});
  }

  goToDetailPage(id:string){
    this._router.navigate(['/user', id]);
  }

  deleteUser(id: string){
    let newUserArray = []
   let removeData = this.userArray.find((d: { id: string; }) => d.id === id)
    this.removeItem.push(removeData);
     localStorage.removeItem = this.removeItem.map((data: any) => JSON.stringify(data));
     newUserArray = this.userArray.splice(this.userArray.findIndex((v: { id: string; }) => v.id === id));
     console.log(localStorage.removeItem);
  }
}
