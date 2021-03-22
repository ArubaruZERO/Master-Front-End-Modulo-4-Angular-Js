import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ImgListEntity } from 'src/app/model/ImgEntity';
import { ImgService } from 'src/app/service/img.service';
@Component({
  selector: 'app-gallery-wrapper',
  templateUrl: './gallery-wrapper.component.html',
  styleUrls: ['./gallery-wrapper.component.css'],
})
export class GalleryWrapperComponent implements OnInit {
  imagesList: ImgListEntity[];
  imageSelected: ImgListEntity;
  actualIndex: number;
  newIndex: number;
  actualZoom: number;
  zoom: number;

  constructor(private ImgService: ImgService) {
    this.imagesList = [...this.ImgService.getImages()];
    this.actualZoom = 500;
    this.actualIndex = 0;
    this.imageSelected = this.imagesList[this.actualIndex];
    this.zoom = 50;
  }

  ngOnInit(): void {}

  // un metodo que recibe lo que esta emitiendo en el html
  onImageClick(image: ImgListEntity) {
    this.actualIndex = image.id;
    this.imageSelected = this.imagesList[this.actualIndex];
    return this.actualIndex;
  }

  nextNav(): void {
    this.actualIndex++;
    this.imageSelected = this.imagesList[this.actualIndex];
    console.log(this.imageSelected);
  }

  prevNav(): void {
    this.actualIndex--;
    this.imageSelected = this.imagesList[this.actualIndex];
  }

  zoomIn(): void {
    this.actualZoom = this.actualZoom + this.zoom;
  }

  zoomOut(): void {
    this.actualZoom = this.actualZoom - this.zoom;
  }
}
