"use server";

import { ERROR_MESSAGES } from '@/app/constants';
import prisma from '@/app/lib/prisma';

export const actionCalledClient = async (
  name: string,
  email: string
): Promise<
  | { success: false; errors: (keyof typeof ERROR_MESSAGES)[] }
  | { success: true }
> => {
  try {
    const errors: (keyof typeof ERROR_MESSAGES)[] = [];
    if (name === "") {
      errors.push("empty_name");
    }
    if (email === "") {
      errors.push("empty_email");
    }
    if (errors.length > 0) {
      return { success: false, errors };
    }
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, errors: ["unexpected_error"] };
  }
};