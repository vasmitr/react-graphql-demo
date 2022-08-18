import { gql } from "@apollo/client"
import { fetchGqlApi } from "../../Api"
import { Units } from "../../types"


export function fetchWeatherApi(city: string, units: Units = 'metric') {

    const query = gql`
        query GetCityByName($city: String!, $units: Unit!) {
            getCityByName(name: $city, config: {units: $units}) {
                country
                weather {
                    temperature {
                        actual
                        feelsLike
                        min
                        max
                    }
                    summary {
                        title
                        description
                    }
                    wind {
                        speed
                        deg
                    }
                    clouds {
                        all
                        visibility
                        humidity
                    }
                }
            }
        }
    `

    return fetchGqlApi(query, { city, units });
}