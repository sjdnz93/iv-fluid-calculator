import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const App = () => {

  const [dose, setDose] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (weight <= 10) {
      const doseFinal = weight * 100
      setDose(`${doseFinal}ml`)
    } else if (weight > 10 && weight <= 20) {
      const dosePlusTen = ((weight - 10) * 50) + 1000
      setDose(`${dosePlusTen}ml`)
    } else if (weight > 20) {
      const dosePlusTwenty = ((weight - 20) * 20) + 1500
      setDose(`${dosePlusTwenty}ml`)
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
          <h1>IV Fluid Calculator</h1>
          <Form.Group className='mb-3'>
            <Form.Label>Enter child&apos;s weight:</Form.Label>
            <Form.Control placeholder='Input weight in kilograms' type='number' onChange={handleChange} value={weight}></Form.Control>
          </Form.Group>
          {/* <h2>Result</h2> */}
          {dose ?
            <p>Dose is <span>{dose}</span> per 24 hours.</p>
            :
            <p>Input weight into calculator.</p>
          }
          <div className='button-wrapper'>
            <Button variant='primary' type='submit' className={weight ? 'active' : 'disabled'}>Calculate</Button>
            <Button variant='danger' type='reset' onClick={clearForm}>Clear</Button>
          </div>
        </Form>
      </div>

    </main>
  )
}

export default App
