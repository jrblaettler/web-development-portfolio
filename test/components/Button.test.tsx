import Button from '../../components/Button';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  test('Button click works', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Submit</Button>);

    userEvent.click(screen.getByText('Submit'));
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('Button disabled works', () => {
    const mockOnClick = jest.fn();
    render(
      <Button onClick={mockOnClick} disabled={true}>
        test
      </Button>
    );
    userEvent.click(screen.getByText('test'));
    expect(mockOnClick).toBeCalledTimes(0);
  });
});
