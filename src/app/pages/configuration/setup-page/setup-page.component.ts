import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  copy(id: string){
    const textarea = this.elRef.nativeElement.querySelector('#'+id)
    textarea.select();
    document.execCommand('copy')
    textarea.setSelectionRange(0, 0);
    console.log(textarea.value)
  }

}
