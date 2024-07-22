import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './components/Form';
import { showForm, hideForm } from './action/formAcion'; // Corrected import path
import './App.css';

function App() {
  const [autoplayInterval, setAutoplayInterval] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
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
          <p className={fadeIn ? 'fade-in' : ''}>
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
              𝘚𝘪 𝘉𝘦𝘢𝘶𝘵𝘺 𝘉𝘢𝘳 𝘣𝘳𝘪𝘯𝘨𝘴 𝘵𝘩𝘦 𝘭𝘶𝘹𝘶𝘳𝘺 𝘰𝘧 𝘱𝘳𝘰𝘧𝘦𝘴𝘴𝘪𝘰𝘯𝘢𝘭 𝘣𝘦𝘢𝘶𝘵𝘺 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘥𝘪𝘳𝘦𝘤𝘵𝘭𝘺 𝘵𝘰 𝘺𝘰𝘶𝘳 𝘭𝘰𝘤𝘢𝘵𝘪𝘰𝘯,        𝘸𝘩𝘦𝘵𝘩𝘦𝘳 𝘪𝘵'𝘴 𝘪𝘯 𝘵𝘩𝘦 𝘤𝘰𝘮𝘧𝘰𝘳𝘵 𝘰𝘧 𝘺𝘰𝘶𝘳 𝘰𝘸𝘯 𝘩𝘰𝘮𝘦, 𝘢𝘵 𝘢 𝘴𝘱𝘦𝘤𝘪𝘢𝘭 𝘦𝘷𝘦𝘯𝘵 𝘷𝘦𝘯𝘶𝘦, 𝘰𝘳 𝘢𝘯𝘺 𝘰𝘵𝘩𝘦𝘳 𝘱𝘳𝘦𝘧𝘦𝘳𝘳𝘦𝘥 𝘴𝘦𝘵𝘵𝘪𝘯𝘨.        𝘖𝘶𝘳 𝘥𝘦𝘥𝘪𝘤𝘢𝘵𝘦𝘥 𝘵𝘦𝘢𝘮 𝘪𝘴 𝘤𝘰𝘮𝘮𝘪𝘵𝘵𝘦𝘥 𝘵𝘰 𝘶𝘯𝘷𝘦𝘪𝘭𝘪𝘯𝘨 𝘵𝘩𝘦 𝘪𝘯𝘯𝘢𝘵𝘦 𝘣𝘦𝘢𝘶𝘵𝘺 𝘢𝘯𝘥 𝘪𝘯𝘥𝘪𝘷𝘪𝘥𝘶𝘢𝘭𝘪𝘵𝘺 𝘵𝘩𝘢𝘵 𝘥𝘦𝘧𝘪𝘯𝘦𝘴 𝘦𝘢𝘤𝘩 𝘸𝘰𝘮𝘢𝘯,        𝘰𝘧𝘧𝘦𝘳𝘪𝘯𝘨 𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘦𝘥 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘵𝘢𝘪𝘭𝘰𝘳𝘦𝘥 𝘵𝘰 𝘦𝘯𝘩𝘢𝘯𝘤𝘦 𝘺𝘰𝘶𝘳 𝘯𝘢𝘵𝘶𝘳𝘢𝘭 𝘧𝘦𝘢𝘵𝘶𝘳𝘦𝘴 𝘢𝘯𝘥 𝘣𝘰𝘰𝘴𝘵 𝘺𝘰𝘶𝘳 𝘤𝘰𝘯𝘧𝘪𝘥𝘦𝘯𝘤𝘦.        𝘍𝘳𝘰𝘮 𝘦𝘹𝘲𝘶𝘪𝘴𝘪𝘵𝘦 𝘮𝘢𝘬𝘦𝘶𝘱 𝘢𝘳𝘵𝘪𝘴𝘵𝘳𝘺 𝘵𝘰 𝘳𝘦𝘫𝘶𝘷𝘦𝘯𝘢𝘵𝘪𝘯𝘨 𝘴𝘬𝘪𝘯𝘤𝘢𝘳𝘦 𝘵𝘳𝘦𝘢𝘵𝘮𝘦𝘯𝘵𝘴, 𝘸𝘦 𝘴𝘱𝘦𝘤𝘪𝘢𝘭𝘪𝘻𝘦 𝘪𝘯 𝘱𝘳𝘰𝘷𝘪𝘥𝘪𝘯𝘨 𝘶𝘯𝘱𝘢𝘳𝘢𝘭𝘭𝘦𝘭𝘦𝘥        𝘱𝘢𝘮𝘱𝘦𝘳𝘪𝘯𝘨 𝘵𝘩𝘢𝘵 𝘤𝘦𝘭𝘦𝘣𝘳𝘢𝘵𝘦𝘴 𝘺𝘰𝘶𝘳 𝘶𝘯𝘪𝘲𝘶𝘦 𝘦𝘴𝘴𝘦𝘯𝘤𝘦 𝘢𝘯𝘥 𝘦𝘮𝘱𝘰𝘸𝘦𝘳𝘴 𝘺𝘰𝘶 𝘵𝘰 𝘴𝘩𝘪𝘯𝘦 𝘸𝘪𝘵𝘩 𝘳𝘢𝘥𝘪𝘢𝘯𝘤𝘦.      </p>
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

      <div className='footer'>
      </div>
    </>
  );
}

export default App;
