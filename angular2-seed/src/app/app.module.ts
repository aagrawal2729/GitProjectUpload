import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EmpListComponent } from './empList/empList.component' ;
import  { EmpService } from './shared/empService';
import {EmpDetailsComponent} from './empDetails/empDetails.component';
import { LoginComponent } from './Login_Module/login.component';
import { AdminLoginServiceComponent } from './shared/AdminLoginService' ;
import { CommonService } from './shared/CommonService';
import { AdminComponent} from './Admin_Module/admin.component';
import { TrainerComponent} from './Trainer_Module/trainer.component';
import { TraineeComponent} from './Trainee_Module/trainee.component';


@NgModule({
  declarations: [
    AppComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    EmpListComponent,
    EmpDetailsComponent,
    LoginComponent,
    AdminComponent,
    TrainerComponent,
    TraineeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService , EmpService  , AdminLoginServiceComponent, CommonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
