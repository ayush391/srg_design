import React from 'react'

import './designForm.css'

import fb_logo from '../assets/srg/fb.png'
import google_logo from '../assets/srg/google.png'
import twitter_logo from '../assets/srg/twitter.png'
import apple_logo from '../assets/srg/apple3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

const DesignForm = () => {
    return (
        <div className='container'>
            <div class='wobb-logo'>
                <h1>
                    wobb
                </h1>
            </div>
            <div class='form-background'>
                <form class='srg-form'>
                    <h1 class='form-heading'>Login</h1>
                    {/* <label for='email'>email</label> */}
                    
                    <div class='input-container'>
                        <input type='email' name='email' placeholder='Email'></input>
                        <FontAwesomeIcon icon={faEnvelope} color='#CECBE6' size={'lg'} />
                    </div>

                    <div class='input-container'>
                        <input type='password' placeholder='Password'></input>
                        <FontAwesomeIcon icon={faKey} color='#CECBE6' size={'lg'} />

                    </div>
                    
                    <button>NEXT</button>

                    <div class='socials'>
                        <div class='social-icon-container'>
                            <a href='#'><img class='social-icon' src={fb_logo}></img></a>
                        </div>
                        <div class='social-icon-container'>
                            <a href='#'><img class='social-icon' src={google_logo}></img></a>
                        </div>
                        <div class='social-icon-container'>
                            <a href='#'><img class='social-icon' src={twitter_logo}></img></a>
                        </div>
                        <div class='social-icon-container'>
                            <a href='#'><img class='social-icon' src={apple_logo}></img></a>
                        </div>
                    </div>

                    <div class='sign-up-container'>
                        <div class='sign-up'>
                        <a href='/signup'><h5>New to Wobb? Sign Up</h5></a>
                        </div>
                        <div class='copyright-text'>
                            <h6>©Copyrights 2022 reserved</h6>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default DesignForm