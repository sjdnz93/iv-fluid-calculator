import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const calc = (weight) => {
    console.log('WEIGHT', weight)
    if (weight <= 10) {
      const dose = weight * 100
      console.log(`${dose}ml per 24 hours.`)
      return (
        `${dose}ml per 24 hours.`
      )
    } else if (weight > 10 && weight <= 20) {
      const diff = weight - 10
      const subtenBracket = weight - diff

      const doseSubTenBracket = subtenBracket * 100

      const dosePlusTenBracket = diff * 50

      const doseFinal = doseSubTenBracket + dosePlusTenBracket

      console.log(`${doseFinal}ml per 24 hours.`)

      return (
        `${doseFinal}ml per 24 hours.`
      )

    } else if (weight > 20) {

      let dose10 = 0
      let dose20 = 0
      let plusTwentyWeight = 0

      if (weight % 10 === 0) {
        const num = weight / 10

        for (let i = 1; i <= num; i++) {
          if (i === 1) {
            dose10 = 10 * 100
          } else if (i === 2) {
            dose20 = 10 * 50
          } else if (i > 2) {
            plusTwentyWeight++
          }

        }

        plusTwentyWeight = plusTwentyWeight * 10

        const plusTwentyDose = plusTwentyWeight * 20
      
        console.log('DOSE FIRST 10kg', dose10)
        console.log('DOSE SECOND 10kg', dose20)
        console.log('remaining weight above 20kg', plusTwentyWeight)
        console.log('DOSE PER KG OVER 20kg', plusTwentyDose)
  
        const doseFinal = dose10 + dose20 + plusTwentyDose
  
        console.log(`${doseFinal}ml per 24 hours.`)
        
      } else if (weight % 10 > 0) {
        const remainder = weight % 10
        console.log('Remainder', remainder)

        const num = (weight / 10) - (remainder / 10)
        console.log('num', num)

        for (let i = 1; i <= num; i++) {
          if (i === 1) {
            dose10 = 10 * 100
          } else if (i === 2) {
            dose20 = 10 * 50
          } else if (i >= 3) {
            plusTwentyWeight++
            // const diff = weight - 20
            // plusTwentyWeight = weight - diff
            // break
          }

        }

        plusTwentyWeight = plusTwentyWeight * 10 + remainder

        const plusTwentyDose = plusTwentyWeight * 20
      
        console.log('DOSE FIRST 10kg', dose10)
        console.log('DOSE SECOND 10kg', dose20)
        console.log('remaining weight above 20kg', plusTwentyWeight)
        console.log('DOSE PER KG OVER 20kg', plusTwentyDose)
  
        const doseFinal = dose10 + dose20 + plusTwentyDose
  
        console.log(`${doseFinal}ml per 24 hours.`)



      }




    } 

  }

  calc(56)

  return <h1>Hello World</h1>
}

export default App
