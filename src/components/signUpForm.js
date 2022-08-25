import React from 'react'
import { useState } from 'react'

import './signUpForm.css'

import fb_logo from '../assets/srg/fb.png'
import google_logo from '../assets/srg/google.png'
import twitter_logo from '../assets/srg/twitter.png'
import apple_logo from '../assets/srg/apple3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faAdd } from '@fortawesome/free-solid-svg-icons'

const SignUpForm = () => {
    const [formValues, setFormValues] = useState([{ field: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.field] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { field: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    return (
        <div className='container'>
            <div class='form-background'>
                <form class='srg-form-inverted' onSubmit={handleSubmit}>
                    <h1 class='form-heading'>Sign Up</h1>
                    {/* <label for='email'>email</label> */}
                    {formValues.map((element, index) => (

                        <div>

                            <div class='input-container'>
                                <input type='text' name='field' placeholder='Enter Value' value={element.field || ""} onChange={e => handleChange(index, e)} ></input>
                                <FontAwesomeIcon icon={faEnvelope} color='#CECBE6' size={'lg'} />
                            </div>
                            {
                                index ?
                                    <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                    : null
                            }

                        </div>
                    ))}
                    <button className="button add" type="button" onClick={() => 
                        (formValues.length <= 4)?
                        addFormFields()
                        :null
                    }>
                        <FontAwesomeIcon icon={faAdd} color='white' size={'lg'} />
                    </button>
                    <button type='submit'>NEXT</button>


                </form>


            </div>
        </div>
    )
}

export default SignUpForm