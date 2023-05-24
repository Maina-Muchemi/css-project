const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAtttribute("datetime", thisYear)
year.textContent = thisYear