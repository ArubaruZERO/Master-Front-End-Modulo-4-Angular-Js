import { Component, Input, OnInit } from '@angular/core';
import { ImgListEntity } from 'src/app/model/ImgEntity';
@Component({
  selector: 'app-images-selected',
  templateUrl: './images-selected.component.html',
  styleUrls: ['./images-selected.component.css'],
})
export class ImagesSelectedComponent implements OnInit {
  @Input()
  zoomValue: number;
  @Input()
  image: ImgListEntity;

  constructor() {}

  ngOnInit(): void {}
}
