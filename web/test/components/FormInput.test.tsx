import FormInput from 'components/FormInput';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form';
import { waitFor } from '@testing-library/dom';
describe('FormInput', () => {
  test('FormInput onBlur works', async () => {
    const mockBlur = jest.fn();
    const mockValidate = jest.fn(() => 'blur error');
    render(
      <Form initialValues={{ test: '' }} onSubmit={() => {}} submitErrorMessage="">
        <FormInput label="test" id="test" name="test" onBlur={mockBlur} validate={mockValidate} />
      </Form>
    );
    const input = screen.getByLabelText('test');

    userEvent.type(input, 'test');
    waitFor(() => expect(input).toHaveValue('test')); //gets rid of the act error
    expect(mockBlur).toBeCalledTimes(0);
    expect(mockValidate).toBeCalledTimes(0);
    expect(screen.queryByText('blur error')).toBeNull();

    userEvent.click(document.body);
    expect(mockBlur).toBeCalledTimes(1);
    expect(mockValidate).toBeCalledTimes(1);
    expect(mockBlur).toBeCalledWith('test');
    expect(mockValidate).toBeCalledWith('test');
    await screen.findByText('blur error');
  });

  test('FormInput onChange works', async () => {
    const mockChange = jest.fn();
    const mockValidate = jest.fn(() => 'change error');
    render(
      <Form initialValues={{ test: '' }} onSubmit={() => {}} submitErrorMessage="">
        <FormInput label="test" id="test" name="test" onChange={mockChange} validate={mockValidate} />
      </Form>
    );
    const input = screen.getByLabelText('test');

    userEvent.type(input, 'test');
    expect(mockChange).toBeCalledTimes(4);
    expect(mockValidate).toBeCalledTimes(0);
    expect(screen.queryByText('change error')).toBeNull();

    userEvent.click(document.body);
    userEvent.type(input, 'test');
    expect(mockChange).toBeCalledTimes(8);
    expect(mockChange).toBeCalledWith('testtest');
    expect(mockValidate).toBeCalledTimes(5);
    expect(mockValidate).toBeCalledWith('testtest');
    await screen.findByText('change error');
  });
});
