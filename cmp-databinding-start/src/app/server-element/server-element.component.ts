import { Component,
         OnInit,
         Input,
         OnChanges,
         SimpleChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         ViewChild,
         ElementRef,
         ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
             OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
             AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() srvElement: {
        type: string,
        name: string,
        content: string
    };
    @Input() name;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { console.log('Constructor Called'); }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content of Header: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() { console.log('ngDoCheck called'); }

  ngAfterContentInit() { console.log('ngAfterContentInit called'); }

  ngAfterContentChecked() {
      console.log('ngAfterContentChecked called');
      console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content of Header: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() { console.log('ngAfterViewChecked called'); }

  ngOnDestroy(): void { console.log('ngOnDestroy called'); }
}
