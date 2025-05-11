import React, { useState } from 'react'

function Forms() {
    const [formData, setFormData] = useState({ uname: '', phone: '', email: '', pass: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^\S+@\S+\.\S+$/
        const phoneRegex = /^[987]\d{9}$/
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (formData.uname.trim() === "" || formData.email === "" || formData.pass === "" || formData.phone === "") {
            alert("Data can't be empty")
        }
        else {
            if (!emailRegex.test(formData.email.trim())) {
                alert("Email is wrong")
            }
            else if (!phoneRegex.test(formData.phone.trim())) {
                alert("Contact is wrong")
            }
            else if (!passwordRegex.test(formData.pass.trim())) {
                alert("Password is wrong")
            }
            else {
                alert("Everything is right")
            }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='uname' placeholder='Enter Name...' value={formData.uname} onChange={handleChange}/>
                <input type='tel' name='phone' placeholder='Enter contact...' value={formData.phone} onChange={handleChange}/>
                <input type='email' name='email' placeholder='Enter email... ' value={formData.email} onChange={handleChange}/>
                <input type='password' name='pass' placeholder='Enter password... 'value={formData.pass} onChange={handleChange}/>

                <input type='submit' value="Submit Form"/>
            </form></>
    )
}

export default Forms