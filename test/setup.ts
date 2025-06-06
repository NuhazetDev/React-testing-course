import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

afterEach(() => {
  // Add cleanup logic here if needed
  cleanup();
  vi.clearAllMocks()
});