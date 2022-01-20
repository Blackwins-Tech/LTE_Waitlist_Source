// Import React from 'react'
import React from 'react';

// Install NPM package manager for 'react-bootstrap'
// Import Form from 'react-bootstrap'
import {Form} from 'react-bootstrap';

// Function Start
export default function APRInfo({ formData, setFormData, validationRes, setValidationRes }) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" onChange = {(event) => setFormData({...formData, inaprhomeresiding: event.target.value})}>
                    <Form.Label>Are you residing in APR ?</Form.Label>

                    <Form.Check type="radio" name="inaprhomeresiding" label="Yes" value="Yes" />
                    <Form.Check type="radio" name="inaprhomeresiding" label="No" value="No" />
                </Form.Group>

                <Form.Group className="mb-3" onChange = {(event) => setFormData({...formData, aprhome: event.target.value})}>
                    <Form.Label>APR Home Address</Form.Label>

                    <Form.Check type="radio" name="aprhome" label="APR Villas" value="APR Villas" />
                    <Form.Check type="radio" name="aprhome" label="APR Towers" value="APR Towers" />
                    <Form.Check type="radio" name="aprhome" label="Other" value="Other" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>APR Reference's Name</Form.Label>

                    <Form.Control type="name" name="aprreferencename" placeholder="Enter the name"
                    value={formData.aprreferencename}
                    onChange = { (event) => { setFormData({...formData, aprreferencename: event.target.value});
                    setValidationRes({...validationRes, isInvalidAprReferenceName: false}) }}
                    isInvalid = {validationRes.isInvalidAprReferenceName} />

                    <Form.Control.Feedback type="invalid">
                        Reference's name is mandatory and should be less than 20 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>APR Reference's Mobile Number</Form.Label>

                    <Form.Control type="number" name="aprreferencemobilenumber"
                    placeholder="Enter the number"
                    value={formData.aprreferencemobilenumber}
                    onChange = { (event) => { setFormData({...formData, aprreferencemobilenumber: event.target.value});
                    setValidationRes({...validationRes, isInvalidAprReferenceNumber: false}) }}
                    isInvalid = {validationRes.isInvalidAprReferenceNumber} />

                    <Form.Control.Feedback type="invalid">
                        Reference mobile number is mandatory and must contains 10 digits.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teacher's Home Address</Form.Label>

                    <Form.Control type="text" name="teacherhomeaddress" placeholder="Enter your address"
                    value={formData.teacherhomeaddress}
                    onChange = { (event) => { setFormData({...formData, teacherhomeaddress: event.target.value});
                    setValidationRes({...validationRes, isInvalidTeacherHomeAddress: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherHomeAddress} />

                    <Form.Control.Feedback type="invalid">
                        Home address is mandatory and should be less than 100 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Pincode</Form.Label>

                    <Form.Control type="number" name="pincode" placeholder="Enter your pincode" value={formData.pincode}
                    onChange = { (event) => { setFormData({...formData, pincode: event.target.value});
                    setValidationRes({...validationRes, isInvalidTeacherPincode: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherPincode} />

                    <Form.Control.Feedback type="invalid">
                        Pincode is mandatory and must contains 6 digits.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    
                    <Form.Control type="text" name="country" placeholder="Enter your country" value={formData.country}
                    onChange = { (event) => { setFormData({...formData, country: event.target.value});
                    setValidationRes({...validationRes, isInvalidTeacherCountry: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherCountry} />

                    <Form.Control.Feedback type="invalid">
                        Country is mandatory and should be less than 30 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>

                    <Form.Control type="text" name="state" placeholder="Enter your state" value={formData.state}
                    onChange = { (event) => { setFormData({...formData, state: event.target.value});
                    setValidationRes({...validationRes, isInvalidTeacherState: false}) }}
                    isInvalid = {validationRes.isInvalidTeacherState} />
                    
                    <Form.Control.Feedback type="invalid">
                        State is mandatory and should be less than 30 characters.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}