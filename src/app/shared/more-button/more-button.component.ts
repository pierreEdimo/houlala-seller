import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss']
})
export class MoreButtonComponent {
   @Output() onMoreClicked: EventEmitter<void> = new EventEmitter<void>(); 
}
