import { defaults } from 'lodash'
import { apiUrl } from 'src/config'
import axios from 'axios'

export const createClient = (options = {}) => axios.create(defaults({
  baseURL: apiUrl,
  async: true,
  crossDomain: true,
  headers: {
    'content-type': 'application/json'
  }
}, options))

export default createClient()
