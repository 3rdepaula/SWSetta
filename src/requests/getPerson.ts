import { AxiosResponse } from "axios"

import { PersonStarWarsProps } from "../types/person.type"
import api from "../service/api"

export const getPerson = (page: number): Promise<AxiosResponse<PersonStarWarsProps>> => {
    return api.get(`people/?page=${page}`)
}