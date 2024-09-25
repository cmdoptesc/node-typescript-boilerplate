import { describe, it, expect } from 'vitest';
import { doSomething } from '../../src/main';

describe('doSomething function', () => {
  const name = 'John';

  // Assert if setTimeout was called properly
  it('returns the name', async () => {
    const result = doSomething(name);

    expect(result).toEqual(name);
  });
});
