import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./HomePage.scss";
import {Link} from 'react-router-dom';
import {Container,Row,Col, Form} from 'react-bootstrap';
import RedImg from './../images/red-drop.svg';
import YellowImg from './../images/yellow-drop.svg';
import WhiteImg from './../images/white-drop.svg';
import CountriesData from '../data/countries.json';

const HomePage = () => {
  const countries =  CountriesData;
  const [ form, setForm ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [gender, setGender] = useState({});
  const history = useHistory();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
   
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }
  const setGenderName =(value)=>{
    setGender(value);
    if ( !!errors['gender'] ) setErrors({
      ...errors,
      'gender': null
    })
  }
  const handleSubmit =  e =>  {
    e.preventDefault();
    const newErrors = findFormErrors();
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } 
    else{
      const { fName,lName,email, nationality,doB,residence, number } = form;
      localStorage.setItem('fName', fName);
      localStorage.setItem('lName', lName);
      localStorage.setItem('email', email);
      localStorage.setItem('nationality', nationality);
      localStorage.setItem('doB', doB);
      localStorage.setItem('residence', residence);
      localStorage.setItem('number', number);
      localStorage.setItem('gender', gender);
      history.push('/info-form');
    }
  }

 const getAge = DOB=> {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age;
}
  const findFormErrors = () => {
    const { fName,lName,email, nationality,doB,residence, number } = form;
    const newErrors = {};
    // Chekcing First Name Errors
    if ( !fName || fName === '' ) newErrors.fName = 'First name is required!';
    else if ( fName.length > 30 ) newErrors.fName = 'First name is too long!';
     // Chekcing Last Name Errors
    if ( !lName || lName === '' ) newErrors.lName = 'Last name is required!';
    else if ( lName.length > 30 ) newErrors.lName = 'Last name is too long!';
    //Checking Age & Date Errors
    const enteredAge = getAge(doB);
    if( enteredAge < 18 ) newErrors.doB = 'You must be 18 years or older to apply for a job!'
    else if (doB===undefined)  newErrors.doB = 'Date of Birth is required!'
    // Chekcing Gender Errors
    if ( Object.keys(gender).length === 0) newErrors.gender = 'Gender is required!'
    // Chekcing Email Errors
    var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if ( !email || email === '' ) newErrors.email = 'Email is required!'
    else if ( !emailPattern.test(email)) newErrors.email = 'Email is invlaid!'
    // Chekcing Nationality Errors
    if ( !nationality || nationality === '' ) newErrors.nationality = 'Please select your nationality!'
    // Chekcing Country of Residence Errors
     if ( !residence || residence === '' ) newErrors.residence = 'Please select your country of residence!'
    // Chekcing Contact Number Errors
    var numberPattern = new RegExp(/^(05[0123456789]{1})+([0-9]{7})+$/);
    if ( !number || number === '' ) newErrors.number = 'Contact number is required!'
    else if ( !numberPattern.test(number)) newErrors.number = 'Please add a valid contact number!'

    return newErrors
  }
        return (
            <div className="home-page">
                <Container fluid>
                    <Row>
                    <Col md={5} className="left-side">
                        <img className="yellow-drop" src={YellowImg} alt="yellow-drop"/>
                        <h1 className="digg-home-title">digg</h1> 
                        <img className="white-drop" src={WhiteImg} alt="white-drop"/>
                        <p className="quote">"Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!"</p>
                        <p className="student-name">Mohammed, One Step Dubai student </p>
                        <p className="student-country">Pakistan</p>
                        <img className="red-drop" src={RedImg} alt="red-drop"/>
                    </Col>
                    <Col md={7} xs={12} className="right-side">
                    <h2 className="apply-now">Apply Now to work in Dubai</h2>
                    <Form>
                        <Row>
                          <Col xs={12} md={6}>   
                            <Form.Group controlId="formBasicFName">
                                <Form.Control className="input-style" type="text" placeholder="First Name"
                                onChange={ e => setField('fName', e.target.value) }
                                isInvalid={ !!errors.fName } />
                                <Form.Control.Feedback type='invalid'>{ errors.fName }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group controlId="formBasicLName">
                              <Form.Control className="input-style" type="text" placeholder="Last Name" 
                               onChange={ e => setField('lName', e.target.value) }
                               isInvalid={ !!errors.lName } />
                              <Form.Control.Feedback type='invalid'>{ errors.lName }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>   
                            <Form.Group controlId="formBasicDoBirth">
                                <Form.Control  onChange={ e => setField('doB', e.target.value)} isInvalid={ !!errors.doB } type="date" placeholder="Date of birth" />
                                <Form.Control.Feedback type='invalid'>{ errors.doB }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <label>Gender</label>
                            <Form.Group isInvalid={ !!errors.gender } className ="gender-radios-group" controlId="formBasicGender" >
                                 <Form.Check label=""  type="radio" checked={gender === 'Male'} value="Male"  onChange={() => setGenderName("Male")} />
                                 <div className="checker"></div>
                                 <Form.Label>Male</Form.Label>
                                 <Form.Check label="" type="radio"  checked={gender === 'Female'} value="Female"  onChange={() => setGenderName("Female")}/>
                                 <div className="checker"></div>
                                 <Form.Label>Female</Form.Label>
                                
                                 <Form.Control.Feedback type='invalid'>{ errors.gender }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>   
                            <Form.Group>
                              <Form.Control as='select'
                              onChange={ e => setField('nationality', e.target.value) }
                              isInvalid={ !!errors.nationality }>
                                <option value=''>Nationality</option>
                               { countries.data.map((country,index)=>(
                                   <option key={index} value={country.name}>{country.name}</option>
                                ))}
                              </Form.Control>
                              <Form.Control.Feedback type='invalid'>{ errors.nationality }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                          <Form.Group>
                              <Form.Control as='select'
                              onChange={ e => setField('residence', e.target.value) }
                              isInvalid={ !!errors.residence }>
                                <option value=''>Country of Residence</option>
                                { countries.data.map((country,index)=>(
                                   <option key={index} value={country.name}>{country.name}</option>
                                ))}
                              </Form.Control>
                              <Form.Control.Feedback type='invalid'>{ errors.residence }</Form.Control.Feedback>
                            </Form.Group>
                          </Col >
                        </Row>
                        <p>How we can contact you?</p>
                        <Row>
                          <Col xs={12} md={6}>   
                            <Form.Group controlId="formBasicNumber">
                                <Form.Control type="text" placeholder="Contact number" 
                                  onChange={ e => setField('number', e.target.value) }
                                  isInvalid={ !!errors.number } />
                                <Form.Control.Feedback type='invalid'>{ errors.number }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Email address"  
                               onChange={ e => setField('email', e.target.value) }
                               isInvalid={ !!errors.email } />
                               <Form.Control.Feedback type='invalid'>{ errors.email }</Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="button-container">
                          <Link to="/info-form">
                          <button className="dig-blue-button"  type="submit" onClick={ handleSubmit }>
                              Apply now
                          </button>
                          </Link>
                        </div>
                    </Form>
                    </Col>
                    </Row>
                </Container> 
            </div>
        )

}

export default HomePage;