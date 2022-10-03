
import './index.css';
import { useState } from 'react';
import { Modal } from 'simple-component-library-modal';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../Store/actions';
import { states } from './data';
import { newDepartement } from './data';

export default function Forms() {
      const dispatch = useDispatch();
      

      /**
       * all state i using for my form
       */
      const [errorMessage, setErrorMessage] = useState(false);
      const [newOpenModal, setNewOpenModal] = useState(false);

      const [firstName, setNewFirstName] = useState('');
      const [lastName, setNewLastName] = useState('');
      const [birthdate, setBirthdate] = useState('');
      const [startDate, setStartDate] = useState('');
      const [street, setNewStreet] = useState('');
      const [city, setNewCity] = useState('');
      const [state, setNewState] = useState('');
      const [zipCode, setNewZipCode] = useState('');
      const [departement, setNewDepartement] = useState(null);

      const [birthdateValue, setBirthdateValue] = useState('');
      const [startDateValue, setStartDateValue] = useState('');

      /**
       * @const dataState && @const dataDepartement do a map on select to find the right value
       */
      const dataState = states.map((state) => {
            return {
                  value: state?.value,
                  label: state?.label,
            };
      });

      const dataDepartement = newDepartement.map((departements) => {
            return {
                  value: departements?.value,
                  label: departements?.label,
            };
      });

      /**
       *
       * @const {handleChange} && @const {handleChangeStateValue} event retrieves the value of the select inputs
       */
      const handleChange = (event) => {
            setNewDepartement(event.value);
      };

      const handleChangeStateValue = (event) => {
            setNewState(event.value);
      };

      /**
       * @const handleDateFormat
       * @param {*} date
       * @param {*} dateFormatted
       * @param {*} inputDate
       * Gets the date value, and converts it with just the MM/DD/YYYY value
       */
      const handleDateFormat = (date, dateFormatted, inputDate) => {
            const dateWithoutTime = date
                  .toLocaleString('fr-FR')
                  .split(' ')
                  .shift();
            inputDate(date);
            dateFormatted(dateWithoutTime);
      };

      /**
       * @const inputIsFilled
       * @param {*} input
       * @returns all input if they are greater than 2
       */
      const inputIsFilled = (input) => {
            return input.length >= 2;
      };

      /**
       * @const initialStates set all state to empty string
       */
      const initialStates = () => {
            setNewFirstName('');
            setNewLastName('');
            setNewCity('');
            setBirthdate('');
            setBirthdateValue('');
            setStartDateValue('');
            setStartDate('');
            setNewDepartement(null);
            setNewState('');
            setNewStreet('');
            setNewZipCode('');
      };

      /**
       * @const handleSubmit
       * @param {*} event
       * If all the fields are filled then we return an array with the dispatch of all the data
       * then we set the error message to false we open the modal and we reset the inputs
       */

      const handleSubmit = (event) => {
            event.preventDefault();
            if (
                  inputIsFilled(firstName) &&
                  inputIsFilled(lastName) &&
                  inputIsFilled(birthdate) &&
                  inputIsFilled(street) &&
                  inputIsFilled(city) &&
                  inputIsFilled(state) &&
                  inputIsFilled(zipCode) &&
                  inputIsFilled(startDate) &&
                  inputIsFilled(departement)
            ) {

                  dispatch(
                        addEmployee({
                              FirstName: firstName,
                              LastName: lastName,
                              DateOfBirthdate: birthdate,
                              StartDate: startDate,
                              Departement: departement,
                              Street: street,
                              City: city,
                              State: state,
                              ZipCode: zipCode,
                        })
                  );

                  initialStates();
                  setErrorMessage(false);
                  setNewOpenModal(true);
            } else {
                  setErrorMessage(true);
            }
      };


      return (
            <section className="form">
                  {newOpenModal === true ? (
                        <div className="easy">
                              <Modal
                                    openModal={newOpenModal}
                                    title="Thank you, the form has been completed"
                                    message="Your new employee has been created"
                                    btnMessage="Close"
                                    closeModal={() => setNewOpenModal(false)}
                              />
                        </div>
                  ) : (
                        <></>
                  )}
                  <div>
                        <h1 className="form-title">Create an new employee</h1>
                        <form onSubmit={handleSubmit}>
                              <div className="main-user-box">
                                    <h2>Information employee</h2>
                                    <div className="name-user-box">
                                          <div className="user-box">
                                                <label htmlFor="FirstName">
                                                      First name
                                                </label>
                                                <input
                                                      type="text"
                                                      id="FirstName"
                                                      name="FirstName"
                                                      value={firstName}
                                                      placeholder="Enter the firstname of employee"
                                                      onChange={(e) =>
                                                            setNewFirstName(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                          <div className="user-box">
                                                <label htmlFor="LastName">
                                                      Last name
                                                </label>
                                                <input
                                                      type="text"
                                                      id="LastName"
                                                      name="LastName"
                                                      value={lastName}
                                                      placeholder="Enter the lastname of employee"
                                                      onChange={(e) =>
                                                            setNewLastName(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                    </div>
                                    <div className="date-user-box">
                                          <div className="user-box">
                                                <label htmlFor="Birthdate">
                                                      Date of birthdate
                                                </label>
                                                <DatePicker
                                                      idHtmlFor="Birthdate"
                                                      placeholderText="dd/mm/yyyy"
                                                      dateFormat="dd/MM/yyyy"
                                                      onChange={(date) =>
                                                            handleDateFormat(
                                                                  date,
                                                                  setBirthdate,
                                                                  setBirthdateValue
                                                            )
                                                      }
                                                      selected={birthdateValue}
                                                      maxDate={new Date()}
                                                />
                                          </div>

                                          <div className="user-box">
                                                <label htmlFor="StartDate">
                                                      Start date
                                                </label>
                                                <DatePicker
                                                      idHtmlFor="StartDate"
                                                      placeholderText="dd/mm/yyyy"
                                                      dateFormat="dd/MM/yyyy"
                                                      onChange={(date) =>
                                                            handleDateFormat(
                                                                  date,
                                                                  setStartDate,
                                                                  setStartDateValue
                                                            )
                                                      }
                                                      selected={startDateValue}
                                                      maxDate={new Date()}
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="main-user-box">
                                    <h2>Address</h2>
                                    <div className="name-user-box">
                                          <div className="user-box">
                                                <label htmlFor="Street">
                                                      Street
                                                </label>
                                                <input
                                                      id="Street"
                                                      type="text"
                                                      name="Street"
                                                      value={street}
                                                      placeholder="Enter the street of employee"
                                                      onChange={(e) =>
                                                            setNewStreet(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                          <div className="user-box">
                                                <label htmlFor="City">
                                                      City
                                                </label>
                                                <input
                                                      id="City"
                                                      type="text"
                                                      name="City"
                                                      value={city}
                                                      placeholder="Enter the city of employee"
                                                      onChange={(e) =>
                                                            setNewCity(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                    </div>
                                    <div className="date-user-box">
                                          <div className="user-box">
                                                <label htmlFor="States">
                                                      States
                                                </label>
                                                <Select
                                                      value={dataState.filter(
                                                            (d) =>
                                                                  d.value ===
                                                                  state
                                                      )}
                                                      id="States"
                                                      options={dataState}
                                                      name="States"
                                                      onChange={
                                                            handleChangeStateValue
                                                      }
                                                />
                                          </div>
                                          <div className="user-box">
                                                <label htmlFor="ZipCode">
                                                      Zip Code
                                                </label>
                                                <input
                                                      id="ZipCode"
                                                      type="number"
                                                      name="ZipCode"
                                                      placeholder="Enter the zip code of employee"
                                                      value={zipCode}
                                                      onChange={(e) =>
                                                            setNewZipCode(
                                                                  e.target.value
                                                            )
                                                      }
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="main-user-box">
                                    <h2>Services </h2>
                                    <div className="user-box-service">
                                          <label htmlFor="Departement">
                                                Departement
                                          </label>
                                          <Select
                                                id="Departement"
                                                value={dataDepartement.filter(
                                                      (d) =>
                                                            d.value ===
                                                            departement
                                                )}
                                                options={dataDepartement}
                                                name="Departement"
                                                onChange={handleChange}
                                          />
                                    </div>
                              </div>
                              {errorMessage && (
                                    <div className="error-message">
                                          <small className="Small-error-message">
                                                Warning some fields are not
                                                filled in !
                                          </small>
                                    </div>
                              )}
                              <button type="submit" className="form-btn">
                                    Save
                              </button>
                        </form>
                  </div>
            </section>
      );
}
