import { FileEncryption } from '@ionic-native/file-encryption';
export declare class FileEncryptionMock extends FileEncryption {
    /**
     * Enrcypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    encrypt(file: string, key: string): Promise<any>;
    /**
     * Decrypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    decrypt(file: string, key: string): Promise<any>;
}
