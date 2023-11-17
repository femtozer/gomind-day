/**
 * Use jest to test each case (even exceptions)
 */

export function isMajor(age: number): boolean {
  if (age < 0) {
    throw new Error('Age must be greater than 0');
  }

  return age >= 18;
}
