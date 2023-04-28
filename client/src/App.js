import { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const App = () => {

  const [dose, setDose] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('WEIGHT', weight)

    if (weight <= 10) {
      const doseFinal = weight * 100
      console.log(`${doseFinal}ml per 24 hours.`)
      setDose(`${doseFinal}ml per 24 hours.`)
    } else if (weight > 10 && weight <= 20) {
      const dosePlusTen = ((weight - 10) * 50) + 1000
      console.log(dosePlusTen)
      setDose(`${dosePlusTen}ml per 24 hours.`)
    } else if (weight > 20) {
      const dosePlusTwenty = ((weight - 20) * 20) + 1500
      setDose(`${dosePlusTwenty}ml per 24 hours.`)
    }

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
