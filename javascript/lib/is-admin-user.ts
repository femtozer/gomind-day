import { setTimeout } from 'timers/promises';

export async function isAdminUser(): Promise<boolean> {
  // fake admin validation
  await setTimeout(Math.random() * 3);
  return Math.random() < 0.5;
}
