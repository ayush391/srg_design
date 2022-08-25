import React from 'react'
import { useState } from 'react'

import './signUpForm.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faAdd, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import go_back_bg from '../assets/go-back-bg.svg'

const SignUpForm = () => {
    const [formValues, setFormValues] = useState([{ field: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
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
        <div className='signup-container'>
            <div class='signup-form-background'>
                <form class='srg-form-inverted' onSubmit={handleSubmit}>
                    <h1 class='signup-form-heading'>Sign Up</h1>
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
                        (formValues.length <= 4) ?
                            addFormFields()
                            : null
                    }>
                        <FontAwesomeIcon icon={faAdd} color='white' size={'lg'} />
                    </button>
                    <button type='submit'>NEXT</button>
                </form>


            </div>
            <div class='go-back'>
                <img src={go_back_bg} />
                <div className='go-back-icon'>
                    <a href='/'>
                        <FontAwesomeIcon icon={faCircleArrowLeft} color='#CECBE6'></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default SignUpForm