let defaultCity = '柞水'
let defaultId = '0001'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  if (localStorage.Id) {
    defaultId = localStorage.Id
  }
} catch (e) {}

export default {
  city: defaultCity,
  id: defaultId
}
