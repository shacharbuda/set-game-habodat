import {BASE_URL} from './consts'
const es = new EventSource(`${BASE_URL}/stream`);

export default {
    es
}