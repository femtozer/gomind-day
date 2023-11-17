/**
 * Use jest to test each case (even exceptions)
 * You can use Faker.js to generate random data
 */

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  countryCode: 'fr' | 'us';
}

export function isMajor(user: User): boolean {
  if (user.age < 0) {
    throw new Error('Age must be greater than 0');
  }

  const ageMin = user.countryCode === 'fr' ? 18 : 21;
  return user.age >= ageMin;
}
