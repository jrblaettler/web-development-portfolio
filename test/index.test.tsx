import Home from '../pages';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('Documentation button works', () => {
    const card = screen.getByRole('link', {
      name: 'Documentation → Find in-depth information about Next.js features and API.',
    });

    expect(card.getAttribute('href')).toEqual('https://nextjs.org/docs');
  });

  test('Learn button works', () => {
    const card = screen.getByRole('link', {
      name: 'Learn → Learn about Next.js in an interactive course with quizzes!',
    });

    expect(card.getAttribute('href')).toEqual('https://nextjs.org/learn');
  });

  test('Examples button works', () => {
    const card = screen.getByRole('link', {
      name: 'Examples → Discover and deploy boilerplate example Next.js projects.',
    });

    expect(card.getAttribute('href')).toEqual('https://github.com/vercel/next.js/tree/canary/examples');
  });

  test('Deploy button works', () => {
    const card = screen.getByRole('link', {
      name: 'Deploy → Instantly deploy your Next.js site to a public URL with Vercel.',
    });

    expect(card.getAttribute('href')).toEqual(
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
    );
  });
});
