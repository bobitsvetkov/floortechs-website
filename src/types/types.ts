export type Page = 'home' | 'solutions' | 'work' | 'installation' | 'contact';

export interface Credentials {
    emailJsPublicKey: string;
    emailJsServiceKey: string;
    emailJsTemplateKey: string;
    recaptchaSiteKey: string;
    googleMapsApiKey: string;
}