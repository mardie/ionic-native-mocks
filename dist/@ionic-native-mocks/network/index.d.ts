import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
export declare class NetworkMock extends Network {
    /**
     * Connection type
     * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     * @return {string}
     */
    type: string;
    /**
     * Downlink Max Speed
     * @return {string}
     */
    downlinkMax: string;
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    onchange(): Observable<any>;
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    onDisconnect(): Observable<any>;
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    onConnect(): Observable<any>;
}
