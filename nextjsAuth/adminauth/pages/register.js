import React, { useState } from 'react';
import Layout from '../layouts/Layout';

const Register = () => {
  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);

  // const submit = (e: import('react').SyntheticEvent) => {
  // }

  return (
    <div>
      <Layout>
        <form onSubmit={submit}>
          <h1 class='h3 mb-3 fw-normal'>Please register</h1>
          <input
            className='form-control'
            placeholder='Name'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='password'
            class='form-control'
            placeholder='Password'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            class='w-100 btn btn-lg btn-primary'
            type='submit'
            onChange={(e) => setPassword(e.target.value)}
          >
            Submit
          </button>
        </form>
      </Layout>
    </div>
  );
};
export default Register;
