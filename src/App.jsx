import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './components/Form';
import { showForm, hideForm } from './action/formAcion'; // Corrected import path
import './App.css';

function App() {
  const isFormVisible = useSelector(state => state.form.isFormVisible);
  const dispatch = useDispatch();

  const handleFormToggle = () => {
    if (isFormVisible) {
      dispatch(hideForm());
    } else {
      dispatch(showForm());
    }
  };

  return (
    <>
      <div className='center-container'>
        <div className="me">
          {/* <img src={} alt="inna" /> */}
        </div>
        <div className="description-box">
          <p>
            Specializing in: Hair, Makeup, Massages, nails, and wedding prep. Fill out the form below to make an
            appointment or contact me via email!
          </p>
        </div>
      </div>

      <div className='undercar-container'>
        <div className='undercar-title'>Beauty at its Finest</div>
        <div className='undercartitle-container'>
          <div className='undercar-left'>
            <h1>Highly trained and Skilled Beauty Professional</h1>
            <p className='leftp'>
              {/* Your content here */}
            </p>
          </div>
          <div className='undercar-middle'>
          </div>
          <div className='undercar-right'>
          </div>
        </div>
        <div className='form-button'>
          <button className="open-form-button" onClick={handleFormToggle}>
            {isFormVisible ? "Close Form" : "Book Now!"}
          </button>
          {isFormVisible && (
            <div className='form-container'>
              <div className='form'>
                <Form />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
