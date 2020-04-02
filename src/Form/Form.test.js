import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('Has an input for user name', () => {
    const { getByPlaceholderText } = render(<Form />)
    const name = getByPlaceholderText('Name');

    expect(name).toBeInTheDocument();

  });

  it('Has an input for date', () => {
    const { getByPlaceholderText } = render(<Form />)
    const date = getByPlaceholderText('Date (mm/dd)');

    expect(date).toBeInTheDocument();

  });

  it('Has an input for user time', () => {
    const { getByPlaceholderText } = render(<Form />)
    const time = getByPlaceholderText('Time');

    expect(time).toBeInTheDocument();

  });

  it('Has an input for user name', () => {
    const { getByPlaceholderText } = render(<Form />)
    const numOfGuests = getByPlaceholderText('Number of Guests');

    expect(numOfGuests).toBeInTheDocument();

  });
})
