import { useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';
import Bug from './bug';
import Success from './success';

//state: we get previous state and event current dispatch value
//event.target.value denotes the input text box below form
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  //hook it allows you to get the data from form. It is similar to useState() in react. in this case it returns current state and dispatch function
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0) return <Bug message={'Success'} />;

  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-4' onSubmit={handleSubmit}>
      <div className='input-type'>
        <input
          type='text'
          onChange={setFormData}
          name='firstname'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='FirstName'
        />
      </div>
      <div className='input-type'>
        <input
          type='text'
          onChange={setFormData}
          name='lastname'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Lastname'
        />
      </div>
      <div className='input-type'>
        <input
          type='text'
          onChange={setFormData}
          name='email'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Email'
        />
      </div>
      <div className='input-type'>
        <input
          type='text'
          onChange={setFormData}
          name='firstname'
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          placeholder='Salary'
        />
      </div>
      <div className='input-type'>
        <input
          type='date'
          onChange={setFormData}
          name='date'
          className='border px-5 py-3 focus:outline-none rounded-md'
          placeholder='date'
        />
      </div>

      <div className='flex gap-10 items-center'>
        <div className='form-check'>
          <input
            value='Active'
            onChange={setFormData}
            id='radioDefault1'
            type='radio'
            name='status'
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          />
          <label htmlFor='radioDefault1' className='inline-block tet-gray-800'>
            Active
          </label>
        </div>
        <div className='form-check'>
          <input
            value='Inactive'
            onChange={setFormData}
            id='radioDefault2'
            type='radio'
            name='status'
            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          />
          <label htmlFor='radioDefault2' className='inline-block tet-gray-800'>
            Inactive
          </label>
        </div>
      </div>

      <button className='flex justify-center text-md w-2/6  bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        Add{' '}
        <span className='px-1'>
          <BiPlus size={24} />
        </span>
      </button>
    </form>
  );
}
