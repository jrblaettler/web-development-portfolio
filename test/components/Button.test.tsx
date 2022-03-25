import Button from '../../components/Button';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  test('Button click works', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick} />);

    userEvent.click(screen.getByText('Submit'));
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('Button label works', () => {
    render(<Button onClick={() => {}} label="test" />);

    expect(screen.getByText('test')).toBeTruthy;
  });
});
