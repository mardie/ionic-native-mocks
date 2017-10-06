import { TextToSpeech } from '@ionic-native/text-to-speech';
export interface TTSOptions {
    /** text to speak */
    text: string;
    /** a string like 'en-US', 'zh-CN', etc */
    locale?: string;
    /** speed rate, 0 ~ 1 */
    rate?: number;
}
export declare class TextToSpeechMock extends TextToSpeech {
    /**
     * This function speaks
     * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
     * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
     */
    speak(textOrOptions: string | TTSOptions): Promise<any>;
    /**
     * Stop any current TTS playback
     * @return {Promise<any>}
     */
    stop(): Promise<any>;
}
