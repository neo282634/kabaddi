import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  colors: string[] = ['red', 'green'];
  colorIndex: number = 0;
  colorChangeInterval: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.colorChangeInterval = setInterval(() => {
      this.changeColor();
    }, 1000);
  };

  changeColor() {
    const changingText = this.el.nativeElement.querySelector('#election');
    changingText.style.color = this.colors[this.colorIndex];
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
  }

  ngOnDestroy() {
    clearInterval(this.colorChangeInterval);
  }
}
