import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrashComponent } from './trash/trash.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [  { path: '', redirectTo: 'users', pathMatch: 'full' },
{ path: 'users', component: UsersComponent  },
{path: 'user/:id', component: UserComponent  },
{path: 'trash', component: TrashComponent  },
{path: '**', redirectTo: 'users', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
