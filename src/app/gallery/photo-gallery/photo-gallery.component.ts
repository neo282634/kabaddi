import { Component, ElementRef } from '@angular/core';
import bootstrap from 'bootstrap';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  constructor(private elementRef: ElementRef) {}
  
  ngOnInit(): void {
    //  this.imagesModel();
  }

  imagesModel(){
    const popup = this.elementRef.nativeElement.ownerDocument.createElement('div');
    popup.id = 'popup';

    const image = this.elementRef.nativeElement.ownerDocument.createElement('img');
    const caption = this.elementRef.nativeElement.ownerDocument.createElement('p');
    caption.textContent = '';

    popup.appendChild(image);
    popup.appendChild(caption);

    this.elementRef.nativeElement.ownerDocument.body.appendChild(popup);

    const anchors = this.elementRef.nativeElement.ownerDocument.querySelectorAll('div a');
    anchors.forEach((anchor: Element) => {
      anchor.addEventListener('click', (event: any) => {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          image.setAttribute('src', href);
          popup.style.display = 'block';
        }
      });
    });

    const thumbnailImage = this.elementRef.nativeElement.ownerDocument.querySelector('div.thumbnail img');
    if (thumbnailImage) {
      const captionText = thumbnailImage.getAttribute('alt');
      if (captionText) {
        caption.textContent = captionText;
      }
    }

    popup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

}
