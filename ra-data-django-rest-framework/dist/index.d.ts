import { Sort, DataProvider } from 'ra-core';
export { default as tokenAuthProvider, fetchJsonWithAuthToken, } from './tokenAuthProvider';
export { default as jwtTokenAuthProvider, fetchJsonWithAuthJWTToken, } from './jwtTokenAuthProvider';
export declare const getOrderingQuery: (sort: Sort) => {
    ordering: string;
};
declare const _default: (apiUrl: String, httpClient?: Function) => DataProvider;
export default _default;
