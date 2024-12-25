import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-xmas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './xmas.component.html',
  styleUrl: './xmas.component.css'
})
export class XmasComponent {
  username: string = "Tountoun";
  message: string = "I Wish you Merry Christmas! Enjoy the day!";
  generatedImageUrl: string | null = null;

  constructor(private sanitizer: DomSanitizer){}

  async generateCardImage(): Promise<void> {
    const cardElement = document.getElementById('card');
    if (cardElement) {
      const canvas = await html2canvas(cardElement);
      this.generatedImageUrl = canvas.toDataURL('image/png');
    }
  }

  shareOnWhatsApp(): void {
    const message = encodeURIComponent(`Joyeux Noël ! Voici une carte pour toi.`);
    const imageBase64 = encodeURIComponent(this.generatedImageUrl!);
    window.open(`https://wa.me/?text=${message}%0A${imageBase64}`, '_blank');
  }
}
