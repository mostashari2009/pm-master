import { AuthProvider } from 'ra-core';
export interface Options {
    obtainAuthTokenUrl?: string;
}
declare function jwtTokenAuthProvider(options?: Options): AuthProvider;
export declare function createOptionsFromJWTToken(): {
    user?: undefined;
} | {
    user: {
        authenticated: boolean;
        token: string;
    };
};
export declare function fetchJsonWithAuthJWTToken(url: string, options: object): Promise<{
    status: number;
    headers: Headers;
    body: string;
    json: any;
}>;
export default jwtTokenAuthProvider;
