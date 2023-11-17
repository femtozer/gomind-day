/**
 * Use jest to test each case
 */

export function hello(name?: string): string {
  if (name != null) {
    return `Hello ${name}!`;
  } else {
    return 'Hello world!';
  }
}
