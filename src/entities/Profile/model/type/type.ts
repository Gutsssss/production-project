import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export enum ValidateProfileErrors {
    INVALID_DATA = 'INVALID_DATA',
    INVALID_AGE = 'INVALID_AGE',
    INVALID_CITY = 'INVALID_CITY',
    SERVER_ERROR = 'SERVER_ERROR',
    INVALID_NAME = 'NAME'
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?:Profile,
    form?:Profile
    isLoading:boolean,
    error:string,
    readonly:boolean,
    validateErrors?:ValidateProfileErrors[]
}
