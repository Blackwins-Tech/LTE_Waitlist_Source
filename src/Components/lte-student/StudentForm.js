// Import React from 'react'
import React, { useState } from 'react'
import apiClient from '../http-common';

// Installed NPM package manager for 'react-bootstrap'
// Import Navbar from 'react-bootstrap'
import { Navbar, Container, Form, Button } from 'react-bootstrap'

// Function Start
function StudentForm() {

    const [studentData, setStudentData] = useState({
        studentname: '',
        studentnumber: '',
        studentwhatsapp: '',
        sponsorname: '',
        sponsornumber: '',
        sponsorresidence: '',
        studentage: '',
        isstudentundereighteen:'', 
        studentlanguage1: '',
        studentlanguage2: '',
        studenteducation: '',
        readingskill: ''        
    })

    const [studentValidation, setStudentValidation] = useState({
        isInvalidStudentName: false,
        isInvalidStudentNumber: false,
        isInvalidStudentWhatsapp: false,
        isInvalidSponsorName: false,
        isInvalidSponsorNumber: false,
        isInvalidStudentAge: false,
        isInvalidStudentLanguage1: false,
        isInvalidStudentLanguage2: false,
        isInvalidStudentEducation: false
    })

    const studentFormValidation = () => {
        var submitButton = true;
        var invalidStudentName = false;
        var invalidStudentNumber = false;
        var invalidStudentWhatsapp = false;
        var invalidSponsorName = false;
        var invalidSponsorNumber = false;
        var invalidStudentAge = false;
        var invalidStudentLanguage1 = false;
        var invalidStudentLanguage2 = false;
        var invalidStudentEducation = false;

        if((studentData.studentname.length === 0) || (studentData.studentname.length > 30)) {
            invalidStudentName = true;
            submitButton = false;
        }

        if(!(studentData.studentnumber.length === 10)) {
            invalidStudentNumber = true;
            submitButton = false;
        }

        if(!(studentData.studentwhatsapp.length === 10)) {
            invalidStudentWhatsapp = true;
            submitButton = false;
        }

        if((studentData.sponsorname.length === 0) || (studentData.sponsorname.length > 30)) {
            invalidSponsorName = true;
            submitButton = false;
        }

        if(!(studentData.sponsornumber.length === 10)) {
            invalidSponsorNumber = true;
            submitButton = false;
        }

        if(studentData.studentage.length === 0) {
            invalidStudentAge = true;
            submitButton = false;
        }

        if((studentData.studentlanguage1.length === 0) || (studentData.studentlanguage1.length > 30)) {
            invalidStudentLanguage1 = true;
            submitButton = false;
        }

        if((studentData.studentlanguage2.length === 0) || (studentData.studentlanguage2.length > 30)) {
            invalidStudentLanguage2 = true;
            submitButton = false;
        }

        if((studentData.studenteducation.length === 0) || (studentData.studenteducation.length > 50)) {
            invalidStudentEducation = true;
            submitButton = false;
        }

        setStudentValidation({...studentValidation,
            isInvalidStudentName: invalidStudentName,
            isInvalidStudentNumber: invalidStudentNumber,
            isInvalidStudentWhatsapp: invalidStudentWhatsapp,
            isInvalidSponsorName: invalidSponsorName,
            isInvalidSponsorNumber: invalidSponsorNumber,
            isInvalidStudentAge: invalidStudentAge,
            isInvalidStudentLanguage1: invalidStudentLanguage1,
            isInvalidStudentLanguage2: invalidStudentLanguage2,
            isInvalidStudentEducation: invalidStudentEducation
        });
        return submitButton;
    }



     /* DB Student POST  API*/

//   const fortmatResponse = (res) => {
//     return JSON.stringify(res, null, 2);
//   };
  
  
//   async function postData(){
//     try{
//       const res = await apiClient.post("/students", formData, {
//         headers:{
//           "x-access-token":"token-value", 
//         }, 
//       });
//       const result = {
//         status:res.status+"-"+ res.statusText,
//         headers:res.headers, 
//         data:res.data,
//       };
//       setPostResult(fortmatResponse(result));
//       //console.log(postResult.status);
//     }catch(err){
//       setPostResult(fortmatResponse(err.response?.data|| err));
//     }
//   }

  /* DB POST ends */


    return (
        <div>

            {/* ------------------------------------- Top Bar Section ------------------------------------- */}
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    LOGO
                </Navbar.Brand>
            </Navbar>

            {/* ------------------------------------- Body Content ------------------------------------- */}
            <Container>

                {/* ------------------------------------- Header Section ------------------------------------- */}
                <h1 className="mt-3">Student's Form</h1>

                {/* ------------------------------------- Student Form Data Section ------------------------------------- */}
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Student Name</Form.Label>

                        <Form.Control type="name" name="studentname" placeholder="Enter your name" 
                        value = {studentData.studentname}
                        onChange = {(event) => {setStudentData({...studentData, studentname: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidStudentName: false})}} 
                        isInvalid = {studentValidation.isInvalidStudentName} />

                        <Form.Control.Feedback type="invalid">
                            Student name is mandatory and should be less than 30 characters.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Student Phone Number</Form.Label>

                        <Form.Control type="number" name="studentnumber" placeholder="Enter your number"
                        value = {studentData.studentnumber}
                        onChange = {(event) => {setStudentData({...studentData, studentnumber: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidStudentNumber: false})}}
                        isInvalid = {studentValidation.isInvalidStudentNumber} />

                        <Form.Control.Feedback type="invalid">
                            Student number is mandatory and must contains 10 digits.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Student's WhatsApp Number If different from the above phone number</Form.Label>

                        <Form.Control type="number" name="studentwhatsapp" placeholder="Enter your whatsapp number"
                        value = {studentData.studentwhatsapp}
                        onChange = {(event) => {setStudentData({...studentData, studentwhatsapp: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidStudentWhatsapp: false})}}
                        isInvalid = {studentValidation.isInvalidStudentWhatsapp} />

                        <Form.Control.Feedback type="invalid">
                            Student WhatsApp number is mandatory and must contains 10 digits.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sponsor's Name</Form.Label>

                        <Form.Control type="name" name="sponsorname" placeholder="Enter your sponsor's name"
                        value = {studentData.sponsorname}
                        onChange = {(event) => {setStudentData({...studentData, sponsorname: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidSponsorName: false})}}
                        isInvalid = {studentValidation.isInvalidSponsorName} />

                        <Form.Control.Feedback type="invalid">
                            Sponsor name is mandatory and should be less than 30 characters.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sponsor's Phone Number</Form.Label>

                        <Form.Control type="number" name="sponsornumber" placeholder="Enter your sponsor's number"
                        value = {studentData.sponsornumber}
                        onChange = {(event) => {setStudentData({...studentData, sponsornumber: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidSponsorNumber: false})}}
                        isInvalid = {studentValidation.isInvalidSponsorNumber} />

                        <Form.Control.Feedback type="invalid">
                            Sponsor number is mandatory and must contains 10 digits.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" onChange = {(event) => setStudentData({...studentData, 
                        sponsorresidence: event.target.value})}>
                        <Form.Label>Sponsor's Residence</Form.Label>
                        <Form.Check type="radio" name="sponsorresidence" label="APR Villas" value="APR Villas" />
                        <Form.Check type="radio" name="sponsorresidence" label="APR Towers" value="APR Towers" />
                        <Form.Check type="radio" name="sponsorresidence" label="Others" value="Others" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age If the student is under 18</Form.Label>

                        <Form.Control type="number" name="studentage" placeholder="Enter your age"
                        value={studentData.studentage}
                        onChange = { (event) => { 
                            setStudentData({...studentData, studentage: event.target.value});
                        setStudentData({...studentData, isstudentundereighteen: studentData.studentage <18 ? true :false});
                            setStudentValidation({...studentValidation, isInvalidStudentAge: false}) }}
                        isInvalid = {studentValidation.isInvalidStudentAge} />

                        <Form.Control.Feedback type="invalid">
                            Date of Birth is mandatory.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Spoken Language 1</Form.Label>

                        <Form.Control type="name" name="studentlanguage1" placeholder="Enter your first language"
                        value = {studentData.studentlanguage1}
                        onChange = {(event) => {setStudentData({...studentData, studentlanguage1: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidStudentLanguage1: false})}}
                        isInvalid = {studentValidation.isInvalidStudentLanguage1} />

                        <Form.Control.Feedback type="invalid">
                            Spoken Language is mandatory and should not exceeds 30 characters.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Spoken Language 2</Form.Label>

                        <Form.Control type="name" name="studentlanguage1" placeholder="Enter your second language"
                        value = {studentData.studentlanguage2}
                        onChange = {(event) => {setStudentData({...studentData, studentlanguage2: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidStudentLanguage2: false})}}
                        isInvalid = {studentValidation.isInvalidStudentLanguage2} />

                        <Form.Control.Feedback type="invalid">
                            Spoken Language is mandatory and should not exceeds 30 characters.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Highest Level of Education</Form.Label>

                        <Form.Control type="name" name="studenteducation" placeholder="Enter your education"
                        value = {studentData.studenteducation}
                        onChange = {(event) => {setStudentData({...studentData, studenteducation: event.target.value});
                        setStudentValidation({...studentValidation, isInvalidStudentEducation: false})}}
                        isInvalid = {studentValidation.isInvalidStudentEducation} />

                        <Form.Control.Feedback type="invalid">
                            Education level is mandatory and should not exceeds 50 characters.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" onChange = {(event) => setStudentData({...studentData,
                        readingskill: event.target.value})}>
                        <Form.Label>Student's Reading Skill</Form.Label>
                        <Form.Check type="radio" name="readingskill" label="Beginner" value="Beginner" />
                        <Form.Check type="radio" name="readingskill" label="Intermediate" value="Intermediate" />
                        <Form.Check type="radio" name="readingskill" label="Advanced" value="Advanced" />
                    </Form.Group>

                    <hr/>

                    <Button type="submit" variant="primary" className="mb-3"
                    onClick = { (e) => {
                        e.preventDefault(); 
                        var isValid = studentFormValidation();
                        if(isValid)
                            alert("Form Submitted");
                            console.log(studentData);
                    }}> SUBMIT </Button>
                </Form>
            </Container>
        </div>
    )
}

export default StudentForm