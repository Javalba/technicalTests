import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestWrapperComponent } from './components/test-wrapper/test-wrapper.component';



const routes: Routes = [
  {
    path: '',component: LayoutComponent,
    children: [
      {path:'',component: TestWrapperComponent},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
