import React from 'react';
import Layout from '../layouts/Layout';

const Login = () => {
  return (
    <div>
      <Layout>
        <form>
          <h1 class='h3 mb-3 fw-normal'>Please sign in</h1>

          <input
            type='email'
            className='form-control'
            placeholder='name@example.com'
            required
          />

          <input
            type='password'
            class='form-control'
            placeholder='Password'
            required
          />

          <button class='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default Login;
