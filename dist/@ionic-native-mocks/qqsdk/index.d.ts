import { QQSDK } from '@ionic-native/qqsdk';
export interface QQShareOptions {
    /**
     * The clinet type, QQ or TIM
     * Default is QQ
     */
    client?: number;
    /**
     * The Share Sence
     * Default is QQ
     */
    scene?: number;
    /**
     * The text for shareText
     */
    text?: string;
    /**
     * The url for share news or audio
     */
    url?: string;
    /**
     * The title for share image,news or audio
     */
    title?: string;
    /**
     * The description for share image,news or audio
     */
    description?: string;
    /**
     * The image for share image,news or audio
     * Image supports three types:
     * 1. Network URL
     * 2. Base64
     * 3. Absolute file path
     */
    image?: string;
    /**
     *  The URL for audio
     */
    flashUrl?: string;
}
export declare class QQSDKMock extends QQSDK {
    /**
     * QQ Share Scene
     */
    Scene: {
        QQ: number;
        QQZone: number;
        Favorite: number;
    };
    /**
     *  client type:  QQ application or TIM application
     */
    ClientType: {
        QQ: number;
        TIM: number;
    };
    /**
     * open QQ or TIM client perform ssoLogin
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    ssoLogin(options: QQShareOptions): Promise<any>;
    logout(): Promise<any>;
    /**
     * Detect if the QQ application or TIM application is installed on the device.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    checkClientInstalled(options: QQShareOptions): Promise<any>;
    /**
     * shareText
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    shareText(options: QQShareOptions): Promise<any>;
    /**
     * shareImage
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    shareImage(options: QQShareOptions): Promise<any>;
    /**
     * shareNews
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    shareNews(options: QQShareOptions): Promise<any>;
    /**
     * shareAudio
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    shareAudio(options: QQShareOptions): Promise<any>;
}
