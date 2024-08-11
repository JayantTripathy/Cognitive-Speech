export class TextModel {
    text?: string;
    language?: string;
    voicetype?: string;

    constructor(_text: string, _language: string, _voicetype: string) {
        this.text = _text;
        this.language = _language;
        this.voicetype = _voicetype;
    }
}