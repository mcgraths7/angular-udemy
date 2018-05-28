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
         ElementRef} from '@angular/core';

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

  constructor() { console.log('Constructor Called'); }

  ngOnChanges(changes: SimpleChanges): void { console.log('ngOnChanges called', changes); }

  ngOnInit() { console.log(this.header.nativeElement.textContent); }

  ngDoCheck() { console.log('ngDoCheck called'); }

  ngAfterContentInit() { console.log('ngAfterContentInit called'); }

  ngAfterContentChecked() { console.log('ngAfterContentChecked called'); }

  ngAfterViewInit() { console.log('ngAfterViewInit called', this.header.nativeElement.textContent); }

  ngAfterViewChecked() { console.log('ngAfterViewChecked called'); }

  ngOnDestroy(): void { console.log('ngOnDestroy called'); }
}
