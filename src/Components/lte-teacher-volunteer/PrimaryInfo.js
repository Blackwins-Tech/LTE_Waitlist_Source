// Import React from 'react'
import React from 'react';

// Install NPM package manager for 'react-bootstrap'
// Import Form from 'react-bootstrap'
import {Form} from 'react-bootstrap';

export default function PrimaryInfo({ formData, setFormData, validationRes, setValidationRes }) {

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Teacher's Name</Form.Label>

                    <Form.Control type="name" name="teachername" placeholder="Enter your name"
                    value={formData.teachername}
                    onChange = { (event) => { setFormData({...formData, teachername: event.target.value});
                    setValidationRes({...validationRes, isInvalidTeacherName: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherName} />

                    <Form.Control.Feedback type="invalid">
                        Name is mandatory and should be less than 20 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teacher's Mobile Number</Form.Label>

                    <Form.Control type="number" name="teachermobilenumber" placeholder="Enter your number" 
                    value={formData.teachermobilenumber}
                    onChange = { (event) => { setFormData({...formData, teachermobilenumber: event.target.value});
                    setValidationRes({...validationRes, isInvalidTeacherMobileNumber: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherMobileNumber} />

                    <Form.Control.Feedback type="invalid">
                        Mobile number must contains 10 digits.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teacher's Email ID</Form.Label>

                    <Form.Control type="email" name="teacheremailid" placeholder="Enter your email"
                    value={formData.teacheremailid}
                    onChange = { (event) => { setFormData({...formData, teacheremailid: event.target.value });
                    setValidationRes({...validationRes,
                    isInvalidTeacherMailId: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherMailId} />

                    <Form.Control.Feedback type="invalid">
                       Enter valid Email Id
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Spoken Language - 1</Form.Label>

                    <Form.Control type="text" name="spokenlanguage1" placeholder="Enter your known language" 
                    value={formData.spokenlanguage1} 
                    onChange = { (event) => { setFormData({...formData, spokenlanguage1: event.target.value });
                    setValidationRes({...validationRes, isInvalidSpokenLanguage1: false}) }}
                    isInvalid = {validationRes.isInvalidSpokenLanguage1} />

                    <Form.Control.Feedback type="invalid">
                        Spoken Language is mandatory and should be less than 20 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Spoken Language - 2</Form.Label>

                    <Form.Control type="text" name="spokenlanguage2" placeholder="Enter your known language"
                    value={formData.spokenlanguage2}
                    onChange = { (event) => { setFormData({...formData, spokenlanguage2: event.target.value });
                    setValidationRes({...validationRes,
                    isInvalidSpokenLanguage2: false}) }}
                    isInvalid = {validationRes.isInvalidSpokenLanguage2} />

                    <Form.Control.Feedback type="invalid">
                        Spoken Language is mandatory and should be less than 20 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Spoken Language - 3</Form.Label>

                    <Form.Control type="text" name="spokenlanguage3" placeholder="Enter your known language"
                    value={formData.spokenlanguage3}
                    onChange = { (event) => { setFormData({...formData, spokenlanguage3: event.target.value });
                    setValidationRes({...validationRes,
                    isInvalidSpokenLanguage3: false}) } }
                    isInvalid = {validationRes.isInvalidSpokenLanguage3} />

                    <Form.Control.Feedback type="invalid">
                        Spoken Language is mandatory and should be less than 20 characters.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}