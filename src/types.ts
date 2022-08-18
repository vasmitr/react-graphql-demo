export type Units = 'metric' | 'imperial' | 'kelvin';

export interface WeatherData {
    __typename: string;
    temperature: {
        __typename: string;
        actual: number;
        feelsLike: number;
        min: number;
        max: number;
    };
    summary: {
        __typename: string;
        title: string;
        description: string;
    };
    wind: {
        __typename: string;
        speed: number;
        deg: number;
    };
    clouds: {
        __typename: string;
        all: number;
        visibility: number;
        humidity: number;
    };
};