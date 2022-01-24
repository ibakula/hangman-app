import { computeScore } from './components/utils/calc-utils';

it("Solution with fewer errors should always be higher", function() {
  expect(computeScore(90, 20, 0, 40000).score)
  .toBeGreaterThan(computeScore(4, 4, 1, 5000).score);
});

it("Solution with same number of errors, but larger number of unique letters should be scored higher", function() {
  expect(computeScore(90, 21, 0, 40000).score)
  .toBeGreaterThan(computeScore(60, 20, 0, 5000).score);
});

it("Solution with same number of errors, unique letters but longer should be scored higher", function() {
  expect(computeScore(91, 20, 0, 40000).score)
  .toBeGreaterThan(computeScore(90, 20, 0, 5000).score);
});

it("Solution with same number of errors, unique letters and quote length but lower duration should be scored higher", function() {
  // Note: due to "rounding off" this test will fail if both scored under, or equal to 1000ms
  // Meaning they will score "tied" in terms of duration
  expect(computeScore(90, 20, 0, 1000).score)
  .toBeGreaterThan(computeScore(90, 20, 0, 2000).score);
});
