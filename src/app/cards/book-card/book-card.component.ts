import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() title: string;
  @Input() author: string;
  @Input() myRating: string;
  @Input() description: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  // @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  // @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    // let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    // if(this.bodyText.nativeElement.scrollHeight > 80) {
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    // } else{
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    // }
  }

  onXButtonClick(){
    this.deleteEvent.emit();
  }

}
