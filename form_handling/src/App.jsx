import './App.css'
import { useForm } from "react-hook-form"
import { useState } from 'react'


function App() {

  const [isLoading, setisLoading] = useState(false)
  const [submit, setSubmit] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  function resetForm() {
  setisLoading(false);
  setSubmit(false);
  reset(); 
}

  const onSubmit = (data) => {

    setisLoading(true)

    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .finally(() => {
        


        setTimeout(() => {
          setisLoading(false);
        }, 1000);

        setSubmit(true)
      });

      setTimeout(() => {
        resetForm();
      }, 3500);

  }


  return (
    <>
      <div className="container">
        <form action="">

          <div className="name inputField">
            <label htmlFor="fullName">Enter your full name</label>
            <input type="text" id="fullName" placeholder="Name" {...register('Name', {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/,
                message: "Enter name in 'First Middle Last' format"
              }
            })} />

            {errors.Name && <span style={{ fontSize: '12px', color: 'red' }}>{errors.Name.message}</span>}

          </div>

          <div className="number inputField">
            <label htmlFor="mobileNumber">Enter your Mobile number</label>
            <input type="number" id="mobileNumber" placeholder='Number' {...register('number', {
              required: "Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter exactly 10 digits"
              }
            })} />

            {errors.number && <span style={{ fontSize: '12px', color: 'red' }}>{errors.number.message}</span>}

          </div>

          <div className="email inputField">
            <label htmlFor="emailAddress">Enter your Email address</label>
            <input type="email" id="emailAddress" placeholder='Email' {...register('emailId', {
              required: "Email Id is required",
              pattern: {
                value: /^[A-Za-z][A-Za-z0-9]*@[a-z]+\.com$/,
                message: "Enter a valid email like user@name.com"
              }
            })} />

            {errors.emailId && <span style={{ fontSize: '12px', color: 'red' }}>{errors.emailId.message}</span>}

          </div>

          <div className="btn">
            <button onClick={handleSubmit(onSubmit)} disabled={isLoading} style={{ background: isLoading ? 'yellow' : submit ? '#00ff00' : 'rgba(225, 225, 225, 0.3)' }}>{isLoading ? 'Submitting...' : submit ? 'Submitted' : 'Submit'}</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
