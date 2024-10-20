import '@testing-library/jest-dom';
import Home from '../src/app/page';
import { render } from '@testing-library/react';
test('テスト', async () => {
  render(<Home />).debug();
  expect(1).toBe(1);
});
