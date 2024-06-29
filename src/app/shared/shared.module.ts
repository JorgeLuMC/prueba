import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [RouterModule],
})
export class SharedModule { }
