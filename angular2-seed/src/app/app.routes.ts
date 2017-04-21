import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { EmpListComponent } from './empList/empList.component' ;
import { EmpDetailsComponent } from './empDetails/empDetails.component'
import { LoginComponent } from './Login_Module/login.component';
import { AdminComponent} from './Admin_Module/admin.component';
import { TrainerComponent} from './Trainer_Module/trainer.component';
import { TraineeComponent} from './Trainee_Module/trainee.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },

  { path : 'EmployeeList' , component : EmpListComponent },
  
  { path : 'empDetails/:id', component : EmpDetailsComponent } ,
   
  { path : 'home' , component : HomeComponent } ,

  { path : 'login' , component : LoginComponent },

  { path : 'admin' , component : AdminComponent },

  { path : 'trainer' , component : TrainerComponent },

  { path : 'trainee' , component : TraineeComponent },
];


