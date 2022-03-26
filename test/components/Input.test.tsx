import Input from 'components/Input';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from 'components/Button';

describe('Input', () => {
  test('Input blur handler works', () => {
    const mockBlur = jest.fn();
    render(<Input label="test" id="test" name="test" onBlur={mockBlur} />);

    userEvent.type(screen.getByLabelText('test'), 'test');
    expect(mockBlur).toBeCalledTimes(0);
    userEvent.click(document.body);
    expect(mockBlur).toBeCalledTimes(1);
    expect(mockBlur).toBeCalledWith('test');
  });

  test('Input onChange handler works', () => {
    const mockChange = jest.fn();
    render(<Input label="test" id="test" name="test" onChange={mockChange} />);

    userEvent.type(screen.getByLabelText('test'), 'test');
    userEvent.click(document.body);
    expect(mockChange).toBeCalledTimes(0);
    userEvent.type(screen.getByLabelText('test'), 'test');
    expect(mockChange).toBeCalledTimes(4);
    expect(mockChange).toBeCalledWith('testtest');
  });

  test('Input onSubmit handler works', () => {
    const mockSubmit = jest.fn();
    render(
      <Input label="test" id="test" name="test" onSubmit={mockSubmit}>
        <Button onClick={() => {}}>Submit</Button>
      </Input>
    );

    userEvent.type(screen.getByLabelText('test'), 'test');
    userEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toBeCalledTimes(1);
    expect(mockSubmit).toBeCalledWith('test');
  });
});
