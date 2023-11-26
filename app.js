let userInput = document.getElementById("date")

// remove from calendar possibility of choosing past date
userInput.max = new Date().toISOString().split("T")[0]

let result = document.getElementById("result")

// calculating the age
function calculateAge() {
   let birthDate = new Date(userInput.value)

   // store the birth's date
   let d1 = birthDate.getDate()
   let m1 = birthDate.getMonth() + 1
   let y1 = birthDate.getFullYear()

   let today = new Date() // generate today's date

   // store today's date
   let d2 = today.getDate()
   let m2 = today.getMonth() + 1
   let y2 = today.getFullYear()

   // store difference of birth's date and today's date
   let d3, m3, y3

   y3 = y2 - y1

   if(m2 >= m1) {
      m3 = m2 - m1
   } else {
      y3--
      m3 = 12 + m2 -m1
   }

   if(d2 >= d1) {
      d3 = d2 - d1
   } else {
      m3--
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
   }

   if(m3 < 0) {
      m3 = 11
      y3--
   }

   let pluralDays = d3 !== 1 ? " days" : " day";
   let pluralMonths = d3 !== 1 ? " months" : " month";
   let pluralYears = d3 !== 1 ? " years" : " year";

   result.innerHTML = `You are <span>${y3}</span>${pluralYears}, <span>${m3}</span>${pluralMonths} and <span>${d3}</span>${pluralDays} old.`
}

// it will retur the last day of the month
function getDaysInMonth(year, month) {
   return new Date(year, month, 0).getDate()
}