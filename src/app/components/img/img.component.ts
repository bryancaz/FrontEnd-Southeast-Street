import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''
  // mandar por imputs
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg
    //console.log("change just img =>", this.img);
  }

  @Input() alt: string = '';

  imgDefault = "https://raw.githubusercontent.com/platzi/angular-componentes/2-step/src/assets/images/default.png";
  @Output() loaded = new EventEmitter<string>();

  

  constructor() {
    //antes del render y solos se corre una vez, no asincronas (async), solo cosas imediatas
    // console.log("constructor", "imgValue =>", this.img);

  }

  ngOnChanges(changes: SimpleChanges) {
    // Tambien antes y durante del render, y corre mas de una vez, cada ves que cambien inputs
   // console.log("ngOnChanges");

  }

  ngOnInit(): void {
    // Tambien antes del render, si podemos correr cosas async, fecth, solo se corre una vez (useefect - me pasece)
 //   console.log("ngOnInit");

    //  this.counterFn = window.setInterval(()=>{
    //   this.counter += 1
    //   console.log("run counter");
    //   } ,1000);
  }

  ngAfterViewInit() {
    //Despues del render
   // console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    //se elimina lo remueve de la interfaz
    //console.log("ngOnDestroy");

    // window.clearInterval(this.counterFn);

  }

  imgerror() {
    this.img = this.imgDefault;
  }

  imgloaded() {
    //console.log("log hijo");
    this.loaded.emit(this.img);
  }
}
