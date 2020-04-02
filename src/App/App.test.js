import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('Has a title ', () => {
    const { getByText } = render(<App />)
    const title = getByText('Turing Cafe Reservations');

    expect(title).toBeInTheDocument();
  });
})
