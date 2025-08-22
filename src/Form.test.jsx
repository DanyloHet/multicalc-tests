import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OperandContext } from './context/OperandContext';
import Form from './Form.jsx';

describe('Form', () => {
  it('button disabled if input field is empty', () => {
    const operand = '';
    render(
      <OperandContext.Provider value={{ operand }}>
        <Form />
      </OperandContext.Provider>
    );

    const input = screen.getByLabelText(/Calculate with/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(input.value).toBe('');
    expect(submitButton).toBeDisabled();
  });

  it('button enabled if input field contains value', () => {
    const operand = 2;
    render(
      <OperandContext.Provider value={{ operand }}>
        <Form />
      </OperandContext.Provider>
    );

    const input = screen.getByLabelText(/Calculate with/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(Number(input.value)).toBe(2);
    expect(submitButton).toBeEnabled();
  });
});
