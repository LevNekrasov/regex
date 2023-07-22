/* eslint-disable linebreak-style */
import Validator from '../validator';

test('name verification', () => {
  const result = new Validator();
  expect(result.validateUsername('Test_-1-_Name')).toBe(true);
});
