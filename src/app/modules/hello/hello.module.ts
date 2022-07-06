import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello.routing';
import { SharedModule } from '@shared/shared.module';
import { HelloHomeComponent } from './page/hello-home/hello-home.component';

@NgModule({
  declarations: [
    HelloHomeComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [],
})
export class HelloModule {}
