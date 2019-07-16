import { InjectionToken } from "@angular/core";

export const ENVIRONMENT = new InjectionToken<any>('environment');
export const LOCATION = new InjectionToken<Location>('location');
export const LOCALSTORAGE = new InjectionToken<Storage>('localStorage');