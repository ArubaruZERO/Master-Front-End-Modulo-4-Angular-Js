import { Injectable } from '@angular/core';
import { ImgListEntity } from '../model/imgEntity';
@Injectable({
  providedIn: 'root',
})
export class ImgService {
  imageList: ImgListEntity[];
  imageSelected: ImgListEntity;

  constructor() {
    this.imageList = [
      { id: 0, src: '../../assets/img/butterfly.jpg', title: 'Butterfly' },
      { id: 1, src: '../../assets/img/city.jpg', title: 'City' },
      { id: 2, src: '../../assets/img/desert.jpg', title: 'Dessert' },
      { id: 3, src: '../../assets/img/serie.jpg', title: 'Serie' },
      { id: 4, src: '../../assets/img/water.jpg', title: 'Water' },
    ];
  }
  getImages(): ImgListEntity[] {
    return [...this.imageList];
  }

  getByIndex(index: number): ImgListEntity {
    return this.imageList[index];
  }
}
