import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ImagesListComponent} from './images-list/images-list.component';
import {ImagesSelectedComponent} from './images-selected/images-selected.component';
import { GalleryWrapperComponent } from './gallery-wrapper/gallery-wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ZoomDirective } from './../../directives/zoom.directive'
@NgModule({
  declarations: [
    GalleryPageComponent,
    ImagesSelectedComponent,
    ImagesListComponent,
    GalleryWrapperComponent,
    ZoomDirective

  ],
  imports: [CommonModule,
  MatButtonModule, MatCardModule
  ],
  exports: [
    GalleryPageComponent,
    GalleryPageComponent,
    ImagesSelectedComponent,
    ImagesListComponent,

  ],
})
export class GalleryModule {}
