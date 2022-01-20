// Import React from 'react'
import React from 'react';

// Install NPM package manager for 'react-bootstrap'
// Import Form from 'react-bootstrap'
import {Form} from 'react-bootstrap';

export default function PrereqInfo({ formData, setFormData, validationRes, setValidationRes }) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" onChange = {(event) => setFormData({...formData, volunteergrade: event.target.value})}>
                    <Form.Label>Are you a student on or above 9th Grade?</Form.Label>

                    <Form.Check type="radio" name="volunteergrade" label="Yes" value="Yes" />
                    <Form.Check type="radio" name="volunteergrade" label="No" value="No" />
                </Form.Group>

                <Form.Group className="mb-3" onChange = {(event) => setFormData({...formData, volunteerstudent: event.target.value})}>
                    <Form.Label>Do you already have a student?</Form.Label>

                    <Form.Check type="radio" name="volunteerstudent" label="Yes" value="Yes" />
                    <Form.Check type="radio" name="volunteerstudent" label="No" value="No" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Tentative Start Date</Form.Label>

                    <Form.Control type="date" name="startdate" value={formData.startdate}
                    onChange = { (event) => { setFormData({...formData, startdate: event.target.value});
                    setValidationRes({...validationRes, isInvalidStartDate: false}) }}
                    isInvalid = {validationRes.isInvalidStartDate} />

                    <Form.Control.Feedback type="invalid">
                        Date of Birth is mandatory.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}