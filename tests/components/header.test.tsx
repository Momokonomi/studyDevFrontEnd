import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/header';
describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });
  test('コンポーネント一覧', async () => {
    const header = await screen.findAllByRole('header');
    console.log(header);
  });
});
