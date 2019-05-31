import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TaskAddComponent} from './task-add/task-add.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {Routes,RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'tasklist',
    component:TaskListComponent
  },
  {
    path:'taskadd',
    component:TaskAddComponent
  },
  {
    path:'taskedit/:id',
    component:TaskEditComponent
    }
    
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



