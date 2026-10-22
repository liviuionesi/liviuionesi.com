import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import GitHubStats from '../GitHubStats';

jest.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({ t: (key: string) => key }),
}));
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe('GitHubStats', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        login: 'liviuionesi',
        name: 'Liviu Ionesi',
        bio: 'bio',
        avatar_url: 'https://example.com/a.png',
        html_url: 'https://github.com/liviuionesi',
        created_at: '2014-06-25T06:48:42Z',
        public_repos: 12,
      }),
    });
  });

  it('reads the liviuionesi account', async () => {
    render(<GitHubStats />);
    await waitFor(() => expect(screen.getByText('@liviuionesi')).toBeInTheDocument());
    expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/liviuionesi');
  });

  it('shows the repository count and the contributions of the last year', async () => {
    render(<GitHubStats />);
    await waitFor(() => expect(screen.getByText('12')).toBeInTheDocument());
    expect(screen.getByText('2,869')).toBeInTheDocument();
  });
});
