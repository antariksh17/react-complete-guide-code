import {useRef, useState} from 'react';


// Using value once-> useref | using value multiple times for every keystroke + reset value-> use state


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');

  const nameInputRef =useRef();

  const nameInputChangeHandler = (event) => {
    
    setEnteredName(event.target.value);

  }

  const formSubmissionHandler =event => {

    event.preventDefault();

    if( enteredName.trim() === ''){
      return ;
    }

    console.log(enteredName)
    console.log("ref", nameInputRef.current.value)
  // nameInputRef.current.value = ''
    setEnteredName('')
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} value={enteredName}onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
