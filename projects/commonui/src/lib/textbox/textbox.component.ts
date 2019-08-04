import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pa-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input() ctrlid : string = 'txtTextBox';
  @Input() type : string = 'text';
  @Input() label : string = 'label';
  @Input() icon : string = 'default';
  @Input() value : string = '';

  constructor() { }

  ngOnInit() {
  }

}
