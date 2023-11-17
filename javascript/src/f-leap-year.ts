/**
 * TDD / BDD
 *
 * Title: Leap years
 *
 * Narrative:
 * As a user born on February 29
 * I want to know if the given year is a leap year,
 * to find out if I can have a birthday party this year :D
 *
 * Acceptance criterias:
 * Given that the given year is not divisible by 4
 * when I call the isLeapYear function
 * then the function should return False
 *
 * Given that the given year is divisible by 4 but not by 100
 * when I call the isLeapYear function
 * then the function should return True
 *
 * Given that the given year is divisible by 4 and by 100 but not divisible by 400
 * when I call the isLeapYear function
 * then the function should return False
 *
 * Given that the given year is divisible by 400
 * when I call the isLeapYear function
 * then the function should return True
 *
 * Given that the given year is zero
 * and Wikipedia says that year zero does not exist in Gregorian calendar (https://en.wikipedia.org/wiki/Year_zero)
 * when I call the isLeapYear function
 * then the function should raise a ValueError exception: Year must be different from zero
 *
 * Given that the year param is not given
 * when I call the isLeapYear function
 * then the year param should be the current year by default
 *
 * First write tests then implement the function
 * You can use setSystemTime to travel through time: https://jestjs.io/docs/jest-object#jestsetsystemtimenow-number--date
 */

export function isLeapYear(year?: number): boolean {
  throw new Error('Not Implemented');
}
