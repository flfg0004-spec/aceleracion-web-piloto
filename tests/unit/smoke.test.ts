import { describe, expect, test } from 'bun:test';
import { saludo } from '../../src/greeting.ts';

describe('saludo', () => {
  test('incluye el nombre', () => {
    expect(saludo('piloto')).toContain('piloto');
  });

  test('anuncia el stack operativo', () => {
    expect(saludo('x')).toContain('Stack 2026');
  });
});
