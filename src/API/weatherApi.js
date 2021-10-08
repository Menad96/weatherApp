import { createClient } from 'pexels'


const API_KEY = 'Your API KEY openWeather'
const API_KEY_IMG = 'Your API KEY pexels'
export async function weatherInfo(name) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&lang=fr&appid=${API_KEY}`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else return response.statusText
}
export async function weatherNow(name) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=fr&appid=${API_KEY}`)
  if (response.ok) {
    const data = await response.json()
    return data
  }
  else return response.statusText
}
export async function getImageCity() {
  const client = createClient(API_KEY_IMG)
  const query = 'nature'
  const response = await client.photos.search({ query })
  if (response.photos !== null) {
    const link = await response.photos[Math.round(Math.random() * 15)].src.large
    return link
  }
  return './img/ottawa2.jpeg'
}
