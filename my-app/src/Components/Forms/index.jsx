import './index.css';
import { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import {
      getFirstName,
      getLastName,
      getBirthdate,
      getStartDay,
      getSelect,
      getStreet,
      getState,
      getCity,
      getZipCode,
} from '../../Store';

export default function Forms() {
      const dispatch = useDispatch();

      const dataFromLocalStorage = (event) => {
            const dataLS = localStorage.getItem('Forms');
            if (dataLS) {
                  return JSON.parse(dataLS);
            } else {
                  return [];
            }
      };

      const [newData, setNewData] = useState(dataFromLocalStorage());
      const [newForm, setNewForm] = useState(false);

      const [firstName, setNewFirstName] = useState('');
      const [lastName, setNewLastName] = useState('');
      const [birthdate, setBirthdate] = useState(new Date());
      const [startDate, setStartDate] = useState(new Date());
      const [select, setNewSelect] = useState('');
      const [city, setNewCity] = useState('');
      const [state, setNewState] = useState('');
      const [street, setNewStreet] = useState('');
      const [zipCode, setNewZipCode] = useState('');
      const options = [
            { value: 'Sales', label: 'Sales' },
            { value: 'Marketing', label: 'Marketing' },
            { value: 'Engineering', label: 'Engineering' },
            { value: 'Human Resources', label: 'Human Resources' },
            { value: 'Legal', label: 'Legal' },
      ];
      
      const newFirstName = useSelector((state) => state?.firstName?.value);

      const newLastName = useSelector((state) => state?.lastName?.value);
      // const newbirtdate = useSelector((state) => state?.Birthdate?.value);
      // const newStartDay = useSelector((state) => state?.StartDate?.value);
      const newSelect = useSelector((state) => state?.Select?.value);
      const newCity = useSelector((state) => state?.City?.value);
      const newState = useSelector((state) => state?.State?.value);
      const newStreet = useSelector((state) => state?.Street?.value);
      const newZipCode = useSelector((state) => state?.ZipCode?.value);
    
      const handleChange = (event) => {
            console.log(event.value);
            // setNewSelect({ value: event.target.value });
            setNewSelect(event.value);
      };

      const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(getFirstName(firstName));
            dispatch(getLastName(lastName));
            // dispatch(getBirthdate(birthdate));
            // dispatch(getStartDay(startDate));
            dispatch(getSelect(select));
            dispatch(getStreet(street));
            dispatch(getCity(city));
            dispatch(getState(state));
            dispatch(getZipCode(zipCode));
            // let data = {
            //       // firstName,
            //       // lastName,
            //       birthdate,
            //       startDate,
            //       select,
            //       city,
            //       state,
            //       street,
            //       zipCode,
            // };
            const user = {
                  firstName: firstName,
                  lastName: lastName,
                  // Birthdate: newbirtdate,
                  // StartDay: newStartDay,
                  Select: select,
                  Street: street,
                  City: city,
                  State: state,
                  ZipCode: zipCode,
            };
            console.log(user)
            setNewData([...newData, user])
            // setNewData([...newData, data]);
            setNewForm(true);
      };

      useEffect(() => {
            localStorage.setItem('Forms', JSON.stringify(newData));
      }, [newData]);

      return (
            <section className="form">
                  <div className="rounded-form">
                        <h2 className="form-title">Create an new employee</h2>
                        <form onSubmit={handleSubmit}>
                              <div className="form-container">
                                    <div className="form-content">
                                          <label htmlFor="FirstName">
                                                Firstname
                                          </label>
                                          <input
                                                type="text"
                                                id="FirstName"
                                                name="FirstName"
                                                placeholder="Enter the firstname of employee"
                                                onChange={(e) =>
                                                      setNewFirstName(
                                                            e.target.value
                                                      )
                                                }
                                          />
                                          <label htmlFor="LastName">
                                                Lastname
                                          </label>
                                          <input
                                                type="text"
                                                id="LastName"
                                                name="LastName"
                                                placeholder="Enter the lastname of employee"
                                                onChange={(e) =>
                                                      setNewLastName(
                                                            e.target.value
                                                      )
                                                }
                                          />

                                          <label htmlFor="Birthdate">
                                                Date of Birth
                                          </label>
                                          <DatePicker
                                                selected={birthdate}
                                                onChange={(date) =>
                                                      setBirthdate(date)
                                                }
                                                name="Birthdate"
                                          />

                                          <label htmlFor="StartDate">
                                                Start Date
                                          </label>
                                          <DatePicker
                                                selected={startDate}
                                                onChange={(date) =>
                                                      setStartDate(date)
                                                }
                                                name="StartDate"
                                          />
                                          <label htmlFor="Departement">
                                                Departement
                                          </label>
                                          <Select
                                                options={options}
                                                name="Departement"
                                                onChange={handleChange}
                                          />
                                    </div>
                                    <div className="form-content">
                                          <h2>Address</h2>
                                          <label htmlFor="Street">Street</label>
                                          <input
                                                type="text"
                                                name="Street"
                                                onChange={(e) =>
                                                      setNewStreet(
                                                            e.target.value
                                                      )
                                                }
                                          />

                                          <label htmlFor="City">City</label>
                                          <input
                                                type="text"
                                                name="City"
                                                onChange={(e) =>
                                                      setNewCity(e.target.value)
                                                }
                                          />

                                          <label htmlFor="State">State</label>
                                          <input
                                                type="text"
                                                name="State"
                                                onChange={(e) =>
                                                      setNewState(
                                                            e.target.value
                                                      )
                                                }
                                          />

                                          <label htmlFor="ZipCode">
                                                Zip Code
                                          </label>
                                          <input
                                                type="number"
                                                name="ZipCode"
                                                onChange={(e) =>
                                                      setNewZipCode(
                                                            e.target.value
                                                      )
                                                }
                                          />
                                    </div>
                              </div>
                              <button className="form-btn">Save</button>
                        </form>
                  </div>
            </section>
      );
}
