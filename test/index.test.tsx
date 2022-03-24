import Home from '../pages';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);

    Object.defineProperty(window, 'location', {
      writable: true,
      value: { assign: jest.fn() },
    });
  });

  test('Documentation button works', () => {
    const card = screen.getByRole('link', {
      name: 'Documentation → Find in-depth information about Next.js features and API.',
    });

    userEvent.click(card);
    expect(window.location.assign).toBeCalledWith('https://nextjs.org/docs');
  });

  test('Learn button works', () => {
    const card = screen.getByRole('link', {
      name: 'Learn → Learn about Next.js in an interactive course with quizzes!',
    });

    userEvent.click(card);
    expect(window.location.assign).toBeCalledWith('https://nextjs.org/learn');
  });

  test('Examples button works', () => {
    const card = screen.getByRole('link', {
      name: 'Examples → Discover and deploy boilerplate example Next.js projects.',
    });

    userEvent.click(card);
    expect(window.location.assign).toBeCalledWith('https://github.com/vercel/next.js/tree/canary/examples');
  });

  test('Deploy button works', () => {
    const card = screen.getByRole('link', {
      name: 'Deploy → Instantly deploy your Next.js site to a public URL with Vercel.',
    });

    userEvent.click(card);
    expect('test').toEqual('fail');
    expect(window.location.assign).toBeCalledWith(
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    );
  });
});
