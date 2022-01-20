// Import React and useState from 'react'
import React, { useState } from "react";
import apiClient from './Components/http-common';

// Import CSS File
import "./App.css";

// Install NPM package manager for 'react-bootstrap'
// Import Container from 'react-bootstrap'
import { Container, Button } from "react-bootstrap";

// Import All Components

// Import Title Bar
import TitleBar from "./Components/common/header/TitleBar";

// Import Form Data
import PrimaryInfo from "./Components/lte-teacher-volunteer/PrimaryInfo";
import APRInfo from "./Components/lte-teacher-volunteer/APRInfo";
import PrereqInfo from "./Components/lte-teacher-volunteer/PrereqInfo";
import ParentInfo from "./Components/lte-teacher-volunteer/ParentInfo";


// Function Start
function App() {

  const [page, setPage] = useState(0);
  const [postResult, setPostResult] = useState(null);
  const [formData, setFormData] = useState({
    teachername: '',
    teachermobilenumber: '',
    teacheremailid: '',
    spokenlanguage1: '',
    spokenlanguage2: '',
    spokenlanguage3: '',
    inaprhomeresiding: '',
    aprhome: '',
    aprreferencename: '',
    aprreferencemobilenumber: '',
    teacherhomeaddress: '',
    pincode: '',
    country: '',
    state: '',
    volunteergrade: '',
    volunteerstudent: '',
    startdate: '',
    parentname: '',
    parentmobilenumber: ''
  })

  const [validationRes, setValidationRes] = useState({
    isInvalidTeacherName: false,
    isInvalidTeacherMobileNumber: false,
    isInvalidTeacherMailId: false,
    isInvalidSpokenLanguage1: false,
    isInvalidSpokenLanguage2: false,
    isInvalidSpokenLanguage3: false,
    isInvalidAprReferenceName: false,
    isInvalidAprReferenceNumber: false,
    isInvalidTeacherHomeAddress: false,
    isInvalidTeacherPincode: false,
    isInvalidTeacherCountry: false,
    isInvalidTeacherState: false,
    isInvalidStartDate: false,
    isInvalidParentName: false,
    isInvalidParentMobileNumber: false
  })

  /* DB Teacher POST API */

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  
  
  
  async function postData(){
    try{
      const res = await apiClient.post("/teachers", formData, {
        headers:{
          "x-access-token":"token-value", 
        }, 
      });
      const result = {
        status:res.status+"-"+ res.statusText,
        headers:res.headers, 
        data:res.data,
      };
      setPostResult(fortmatResponse(result));
      //console.log(postResult.status);
    }catch(err){
      setPostResult(fortmatResponse(err.response?.data|| err));
    }
  }

  /* DB POST ends */
  // Initializing header in array
  const FormTitles = ["Primary Information", "APR Information", "Pre-Requisite Information", "Parent Information"];

  // Conditions to render Form Data
  const PageDisplay = () => {
    if (page === 0) {
      return <PrimaryInfo formData={formData} setFormData={setFormData} validationRes={validationRes}
      setValidationRes={setValidationRes} />
    }
    else if (page === 1) {
      return <APRInfo formData={formData} setFormData={setFormData} validationRes={validationRes}
      setValidationRes={setValidationRes} />
    }
    else if (page === 2) {
      return <PrereqInfo formData={formData} setFormData={setFormData} validationRes={validationRes}
      setValidationRes={setValidationRes} />
    }
    else {
      return <ParentInfo formData={formData} setFormData={setFormData} validationRes={validationRes}
      setValidationRes={setValidationRes} />
    }
  }


  // Pattern for Email Validation
  const checkInvalidEmail = (email) => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var result = pattern.test(email);
    return !result;
  }

  // Arrow function for primaryValidation()
  const primaryValidation = () => {
    var canMoveToNextPage = true;
    var invalidName = false;
    var invalidMobile = false;
    var invalidEmail = false;
    var invalidSpokenLang1 = false;
    var invalidSpokenLang2 = false;
    var invalidSpokenLang3 = false;

    if((formData.teachername.length === 0) || (formData.teachername.length > 20)) {
      invalidName = true;
      canMoveToNextPage = false;
    }

    if(!(formData.teachermobilenumber.length === 10)) {
      invalidMobile = true;
      canMoveToNextPage = false;
    }

    if(formData.teacheremailid.length === 0) {
      invalidEmail = true;
      canMoveToNextPage = false;
    } else {
      if(checkInvalidEmail(formData.teacheremailid)) {
        invalidEmail = true;
        canMoveToNextPage = false;
      }
    }

    if((formData.spokenlanguage1.length === 0) || (formData.spokenlanguage1.length > 20)) {
      canMoveToNextPage = false;
      invalidSpokenLang1 = true;
    }

    if((formData.spokenlanguage2.length === 0) || (formData.spokenlanguage2.length > 20)) {
      invalidSpokenLang2 = true;
      canMoveToNextPage = false;
    }

    if((formData.spokenlanguage3.length === 0) || (formData.spokenlanguage3.length > 20)) {
      invalidSpokenLang3 = true;  
      canMoveToNextPage = false;
    }

    setValidationRes({
      ...validationRes,
      isInvalidTeacherName: invalidName,
      isInvalidTeacherMobileNumber: invalidMobile,
      isInvalidTeacherMailId: invalidEmail,
      isInvalidSpokenLanguage1: invalidSpokenLang1,
      isInvalidSpokenLanguage2: invalidSpokenLang2,
      isInvalidSpokenLanguage3: invalidSpokenLang3
     });
    return canMoveToNextPage;
  }

  // Arrow function for aprValidation()
  const aprValidation = () => {
    var canMoveToNextPage = true;
    var invalidAprName = false;
    var invalidAprMobile = false;
    var invalidAddress = false;
    var invalidPincode = false;
    var invalidCountry = false;
    var invalidState = false;

    if((formData.aprreferencename.length === 0) || (formData.aprreferencename.length > 20)) {
      invalidAprName = true;
      canMoveToNextPage = false;
    }

    if(!(formData.aprreferencemobilenumber.length === 10)) {
      invalidAprMobile = true;
      canMoveToNextPage = false;
    }

    if((formData.teacherhomeaddress.length === 0) || (formData.teacherhomeaddress.length > 100)) {
      invalidAddress = true;
      canMoveToNextPage = false;
    }

    if(!(formData.pincode.length === 6)) {
      invalidPincode = true;
      canMoveToNextPage = false;
    }

    if((formData.country.length === 0) || (formData.country.length > 30)) {
      invalidCountry = true;
      canMoveToNextPage = false;
    }

    if((formData.state.length === 0) || (formData.state.length > 30)) {
      invalidState = true;
      canMoveToNextPage = false;
    }

    setValidationRes({
      ...validationRes,
      isInvalidAprReferenceName: invalidAprName,
      isInvalidAprReferenceNumber: invalidAprMobile,
      isInvalidTeacherHomeAddress: invalidAddress,
      isInvalidTeacherPincode: invalidPincode,
      isInvalidTeacherCountry: invalidCountry,
      isInvalidTeacherState: invalidState
     });
    return canMoveToNextPage;
  }

  // Arrow function for prereqValidation()
  const prereqValidation = () => {
    var canMoveToNextPage = true;
    var invalidTentativeDate = false;

    if(formData.startdate.length === 0) {
      invalidTentativeDate = true;
      canMoveToNextPage = false;
    }

    setValidationRes({
      ...validationRes,
      isInvalidStartDate: invalidTentativeDate
     });
    return canMoveToNextPage;
  }

  // Arrow function for parentValidation()
  const parentValidation = () => {
    var canMoveToNextPage = true;
    var invalidParentName = false;
    var invalidParentNumber = false;

    if((formData.parentname.length === 0) || (formData.parentname.length > 20)) {
      invalidParentName = true;
      canMoveToNextPage = false;
    }

    if(!(formData.parentmobilenumber.length === 10)) {
      invalidParentNumber = true;
      canMoveToNextPage = false;
    }

    setValidationRes({
      ...validationRes,
      isInvalidParentName: invalidParentName,
      isInvalidParentMobileNumber: invalidParentNumber
     });
    return canMoveToNextPage;
  }

  // Starts return function
  return (
    <div>
      {/* -------------------- Section Top Bar -------------------- */}
      <TitleBar />

      {/* -------------------- Section Body -------------------- */}
      <Container>
        {/* -------------------- Section Header -------------------- */}
        <h1 className="mt-3">Volunteer's Form</h1>

        {/* -------------------- Section Progress Bar -------------------- */}
        <span className="progressbar-percent">Completed: {page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%"}
        </span>

        <div className="progressbar">
          <div style={{width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%"}}></div>
        </div>

        {/* -------------------- Section Form Data -------------------- */}
        <h1>{FormTitles[page]}</h1>   {/* Call array for header */}

        {PageDisplay()} {/* Rendering form data */}
        
        {/* -------------------- Section Buttons -------------------- */}
        <div className="com-btn mb-5">
          <Button variant="light" className="mr-3"
          onClick={() => setPage((currPage) => currPage - 1)} 
          disabled = {page === 0} > PREV </Button>

          <Button variant="primary" className="ml-3"
            onClick={ () => {
              if (page === 0) {
                var isValid = primaryValidation();
                 if(isValid)
                  setPage((currPage) => currPage + 1);
              }
              if (page === 1) {
                var isValid = aprValidation();
                if(isValid)
                  setPage((currPage) => currPage + 1);
              }
              if (page === 2) {
                var isValid = prereqValidation();
                if(isValid)
                  setPage((currPage) => currPage + 1);
              }
              if (page === FormTitles.length - 1) {
                var isValid = parentValidation();
                if(isValid)
                  alert("Form Submitted");
                  postData();
                  //console.log(formData);
              }
            } }>
            {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
          </Button>
        </div>
      </Container>
      
    </div>
  )
}

export default App;