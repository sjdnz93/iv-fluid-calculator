import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import logo from './images/poole.jpeg'

const App = () => {

  const [dose, setDose] = useState('')
  const [hourDose, setHourDose] = useState('')
  const [weight, setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (weight <= 10) {
      const doseFinal = weight * 100
      setDose(`${doseFinal}ml`)
      const hour1 = doseFinal / 24
      setHourDose(`${hour1.toFixed(2)}ml`)
    } else if (weight > 10 && weight <= 20) {
      const dosePlusTen = ((weight - 10) * 50) + 1000
      setDose(`${dosePlusTen}ml`)
      const hour2 = dosePlusTen / 24
      setHourDose(`${hour2.toFixed(2)}ml`)
    } else if (weight > 20) {
      const dosePlusTwenty = ((weight - 20) * 20) + 1500
      setDose(`${dosePlusTwenty}ml`)
      const hour3 = dosePlusTwenty / 24
      setHourDose(`${hour3.toFixed(2)}ml`)
    }

  }

  const handleChange = (e) => {
    setWeight(e.target.value)
  }

  const clearForm = (e) => {
    e.preventDefault()
    setDose('')
    setHourDose('')
    setWeight('')
  }

  return (
    <main>

      <Image src={logo} alt='poole-nhs-logo' className='logo'></Image>

      <div className='wrapper'>
        <Form className='form' onSubmit={handleSubmit}>
          <h1>IV Fluid Calculator</h1>
          <Form.Group className='mb-3'>
            <Form.Label>Enter child&apos;s weight:</Form.Label>
            <Form.Control placeholder='Input weight in kilograms' type='number' onChange={handleChange} value={weight}></Form.Control>
          </Form.Group>
          {/* <h2>Result</h2> */}
          {dose ?
            <>
              <p>Dose is <span>{dose}</span> per 24 hours.</p>
              <p>OR</p>
              <p><span>{hourDose}</span> every hour.</p>
            </>
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
