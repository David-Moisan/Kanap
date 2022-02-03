import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout(props) {
  return (
    <main className='page-inner'>
      <Navbar />
      {props.children}
    </main>
  );
}
