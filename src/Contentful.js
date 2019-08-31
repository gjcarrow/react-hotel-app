import { createClient } from 'contentful';


export default createClient({
  accessToken: process.env.REACT_APP_HOTEL_ACCESS_TOKEN,
  space: process.env.REACT_APP_HOTEL_SPACE
})