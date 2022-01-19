import { computeScore } from './components/utils/calc-utils';

it("Solution with fewer errors should always be higher", function() {
  const testData = [
  {
    "id": 14,
    "quoteId": "5syS8jEn8m",
    "length": 86,
    "uniqueCharacters": 22,
    "userName": "Renzo",
    "errors": 10,
    "duration": 106316
   },
   {
     "id": 15,
     "quoteId": "bfpxfIQlqZ_3",
     "length": 90,
     "uniqueCharacters": 20,
     "userName": "Naiel",
     "errors": 11,
     "duration": 107881
    },
  ];
  expect(computeScore(testData[0].length, testData[0].uniqueCharacters, testData[0].errors, testData[0].duration)).toBeGreaterThan(computeScore(testData[1].length, testData[1].uniqueCharacters, testData[1].errors, testData[1].duration));
});

it("Solution with same number of errors, but larger number of unique letters should be scored higher", function() {
  let testData = [
  {
    "id": 14,
    "quoteId": "5syS8jEn8m",
    "length": 86,
    "uniqueCharacters": 22,
    "userName": "Renzo",
    "errors": 10,
    "duration": 106316
  },
  {
    "id": 15,
    "quoteId": "bfpxfIQlqZ_3",
    "length": 86,
    "uniqueCharacters": 20,
    "userName": "Naiel",
    "errors": 10,
    "duration": 106316
  }
  ];
  expect(computeScore(testData[0].length, testData[0].uniqueCharacters, testData[0].errors, testData[0].duration)).toBeGreaterThan(computeScore(testData[1].length, testData[1].uniqueCharacters, testData[1].errors, testData[1].duration));
});

it("Solution with same number of errors, unique letters but longer should be scored higher", function() {
  let testData = [
  {
    "id": 14,
    "quoteId": "5syS8jEn8m",
    "length": 90,
    "uniqueCharacters": 22,
    "userName": "Renzo",
    "errors": 10,
    "duration": 106316
  },
  {
    "id": 15,
    "quoteId": "bfpxfIQlqZ_3",
    "length": 89,
    "uniqueCharacters": 22,
    "userName": "Naiel",
    "errors": 10,
    "duration": 106316
  }
  ];
  expect(computeScore(testData[0].length, testData[0].uniqueCharacters, testData[0].errors, testData[0].duration)).toBeGreaterThan(computeScore(testData[1].length, testData[1].uniqueCharacters, testData[1].errors, testData[1].duration));
});

it("Solution with same number of errors, unique letters and quote length but lower duration should be scored higher", function() {
  let testData = [
  {
    "id": 14,
    "quoteId": "5syS8jEn8m",
    "length": 90,
    "uniqueCharacters": 22,
    "userName": "Renzo",
    "errors": 11,
    "duration": 102315
  },
  {
    "id": 15,
    "quoteId": "bfpxfIQlqZ_3",
    "length": 90,
    "uniqueCharacters": 22,
    "userName": "Naiel",
    "errors": 11,
    "duration": 107881
  }
  ];
  expect(computeScore(testData[0].length, testData[0].uniqueCharacters, testData[0].errors, testData[0].duration)).toBeGreaterThan(computeScore(testData[1].length, testData[1].uniqueCharacters, testData[1].errors, testData[1].duration));
});
