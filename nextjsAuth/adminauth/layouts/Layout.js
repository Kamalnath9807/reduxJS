import React from 'react';
import Head from 'next/head';
import Link from 'next';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossorigin='anonymous'
        />
      </Head>

      <nav class='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
        <div class='container-fluid'>
          <a href='/' className='navbar-brand'>
            Home
          </a>

          <div>
            <ul class='navbar-nav me-auto mb-2 mb-md-0'>
              <li class='nav-item'>
                <a href='/login' className='nav-link active'>
                  Login
                </a>
              </li>
              <li class='nav-item'>
                <a href='/register' className='nav-link active'>
                  register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className='form-signin'>{children}</main>
    </>
  );
};

export default Layout;
