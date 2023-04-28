import { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const App = () => {

  const [dose, setDose] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('WEIGHT', weight)

    let doseReal = null

    if (weight <= 10) {
      const doseFinal = weight * 100
      console.log(`${doseFinal}ml per 24 hours.`)
      setDose(`${doseFinal}ml per 24 hours.`)
      doseReal = doseFinal

    } else if (weight > 10 && weight <= 20) {
      const diff = weight - 10
      const subtenBracket = weight - diff

      const doseSubTenBracket = subtenBracket * 100

      const dosePlusTenBracket = diff * 50

      const doseFinal = doseSubTenBracket + dosePlusTenBracket

      console.log(`${doseFinal}ml per 24 hours.`)
      setDose(`${doseFinal}ml per 24 hours.`)
      return doseFinal

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
        setDose(`${doseFinal}ml per 24 hours.`)
        doseReal = doseFinal
        return

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
        setDose(`${doseFinal}ml per 24 hours.`)
        doseReal = doseFinal
        return doseFinal
      }

    }
    console.log('DOSE REAL', doseReal)

  }

  const handleChange = (e) => {
    setWeight(e.target.value)
  }

  const clearForm = (e) => {
    e.preventDefault()
    setDose('')
    setWeight('')
  }




  return (
    <main>

      <div className='wrapper'>
        <Form className='form' onSubmit={handleSubmit}>
          <h1>IV Fluid Regime Calculator</h1>
          <Form.Group className='mb-3'>
            <Form.Label>Enter child&apos;s weight:</Form.Label>
            <Form.Control placeholder='Input weight in kilograms' type='number' onChange={handleChange} value={weight}></Form.Control>
          </Form.Group>
          <h2>Result</h2>
          <p>{dose ? `Dose is ${dose}` : 'Input weight into calculator.'}</p>
          <Button variant='primary' type='submit'>Calculate</Button>
          <Button variant='danger' type='reset' onClick={clearForm}>Clear</Button>
        </Form>
      </div>


    </main>




  )
}

export default App
