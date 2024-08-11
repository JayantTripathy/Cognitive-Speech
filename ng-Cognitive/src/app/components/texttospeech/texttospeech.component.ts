import { Component } from '@angular/core';
import { TextModel } from 'src/app/models/textmodel';
import { LoadingService } from 'src/app/services/loading.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.component.html',
  styleUrls: ['./texttospeech.component.css']
})
export class TexttospeechComponent {
  textToSynthesize: string = '';
  selectedLang!: string;
  voiceGender!: string;

  languageOptions = [
    { value: 'en-IN', label: 'English' },
    { value: 'hi-IN', label: 'Hindi' },
    { value: 'ml-IN', label: 'Malayalam' },
    { value: 'ta-IN', label: 'Tamil' },
    { value: 'te-IN', label: 'Telugu' },
    { value: 'kn-IN', label: 'Kannada' }
  ];

  constructor(private textToSpeechService: TextToSpeechService, private loadingService: LoadingService) {
    this.voiceGender = "F";
  }

  synthesizeText(): void {
    this.loadingService.showLoader();
    this.textToSpeechService.synthesizeText(new TextModel(this.textToSynthesize, this.selectedLang, this.voiceGender)).subscribe({
      next: (audioBlob) => {
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
        this.loadingService.hideLoader();
      },
      error: (err) => {
        console.error('Error synthesizing text', err);
        this.loadingService.hideLoader();
      },
      complete: () => console.info('Request completed')
    }
    );
  }
}
