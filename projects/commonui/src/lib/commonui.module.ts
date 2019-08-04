import { NgModule } from '@angular/core';
import { CommonuiComponent } from './commonui.component';
import { TextboxComponent } from './textbox/textbox.component';
import { MdcTextFieldModule, MdcIconModule } from '@angular-mdc/web';





@NgModule({
  declarations: [CommonuiComponent, TextboxComponent],
  imports: [
    MdcTextFieldModule,
    MdcIconModule
  ],
  exports: [CommonuiComponent, TextboxComponent]
})
export class CommonuiModule { }
