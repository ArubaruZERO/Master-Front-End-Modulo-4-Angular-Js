import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { ImgListEntity } from 'src/app/model/ImgEntity'

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css'],
})
export class ImagesListComponent implements OnInit {
  imageSelected: ImgListEntity;

  @Input()
  images: ImgListEntity[];

  @Output()
  imageClicker: EventEmitter<ImgListEntity> = new EventEmitter();

  constructor() {
    this.images = [];
  }

  ngOnInit(): void {}

  select(image: ImgListEntity) {
    this.imageSelected = { ...image };
    this.imageClicker.emit(this.imageSelected) //pasar evento de imagen y se llama image clicker
  }
}

