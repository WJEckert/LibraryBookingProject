import axios from 'axios'

//const BASE_URL = "https://mtabbf.herokuapp.com"
 const BASE_URL = "http://localhost:3001"

async function doPost(route, data) {
  return axios.post(`${BASE_URL}${route}`, data)
}

async function doGet(route) {
  return axios.get(`${BASE_URL}${route}`)
}

const api = {
  bookOfficeToday: async function (name, email) {
    return await doPost('/bookingOffice', {name, email})
  },
  getSeatsLeft: async function() {
    return await doGet('/bookingOffice/getSeatsLeft')
  },
  getNowEmails: async function() {
    const emails = await doGet('/bookingOffice/getNowEmails')
    return emails.data.payload
  },
  createEvent: async function(image, title, description, date, link) {
    const event = await doPost('/events', {image, title, description, date, link})
    return event.data.payload
  },
  getEvents: async function() {
    const events = await doGet('/events')
    return events.data.payload
  },
  getTopUsers: async function() {
    const topUsers = await doGet('/bookingOffice/topUsers')
    return topUsers.data.payload
  }
}

export default api
