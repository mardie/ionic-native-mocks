import { NativeGeocoder } from '@ionic-native/native-geocoder';
export declare class NativeGeocoderMock extends NativeGeocoder {
    /**
     * Reverse geocode a given latitude and longitude to find location address
     * @param latitude {number} The latitude
     * @param longitude {number} The longitude
     * @return {Promise<any>}
     */
    reverseGeocode(latitude: number, longitude: number): Promise<NativeGeocoderReverseResult>;
    /**
     * Forward geocode a given address to find coordinates
     * @param addressString {string} The address to be geocoded
     * @return {Promise<any>}
     */
    forwardGeocode(addressString: string): Promise<NativeGeocoderForwardResult>;
}
/**
 * Encapsulates format information about a reverse geocoding result.
 */
export interface NativeGeocoderReverseResult {
    /**
     * The street.
     */
    street: string;
    /**
     * The house number.
     */
    houseNumber: string;
    /**
     * The postal code.
     */
    postalCode: string;
    /**
     * The city.
     */
    city: string;
    /**
     * The district.
     */
    district: string;
    /**
     * The country name.
     */
    countryName: string;
    /**
     * The country code.
     */
    countryCode: string;
    administrativeArea: string;
    subAdministrativeArea: string;
    locality: string;
    subLocality: string;
    thoroughfare: string;
    subThoroughfare: string;
}
/**
 * Encapsulates format information about a forward geocoding result.
 */
export interface NativeGeocoderForwardResult {
    /**
     * The latitude.
     */
    latitude: string;
    /**
     * The longitude.
     */
    longitude: string;
}
