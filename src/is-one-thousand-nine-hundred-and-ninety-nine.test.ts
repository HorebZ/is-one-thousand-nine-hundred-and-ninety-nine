import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { isOneThousandNineHundredAndNinetyNine } from "./is-one-thousand-nine-hundred-and-ninety-nine.ts";

Deno.test("should return true when the input is 1999", () => {
  assertEquals(isOneThousandNineHundredAndNinetyNine(1999), true);
});

Deno.test("should return false when the input is not 1999", () => {
  assertEquals(isOneThousandNineHundredAndNinetyNine(2000), false);
  assertEquals(isOneThousandNineHundredAndNinetyNine(1998), false);
  assertEquals(isOneThousandNineHundredAndNinetyNine(0), false);
  assertEquals(isOneThousandNineHundredAndNinetyNine(-1999), false);
});

Deno.test("should return false when the input is a non-integer number", () => {
  assertEquals(isOneThousandNineHundredAndNinetyNine(1999.5), false);
  assertEquals(isOneThousandNineHundredAndNinetyNine(1999.99), false);
});

Deno.test("should return false when the input is a string", () => {
  // @ts-expect-error - We expect this to be false
  assertEquals(isOneThousandNineHundredAndNinetyNine("1999"), false);
  // @ts-expect-error - We expect this to be false
  assertEquals(isOneThousandNineHundredAndNinetyNine("2000"), false);
});

Deno.test("should return false when the input is an object", () => {
  // @ts-expect-error - We expect this to be false
  assertEquals(isOneThousandNineHundredAndNinetyNine({}), false);
});

Deno.test("should return false when the input is an array", () => {
  // @ts-expect-error - We expect this to be false
  assertEquals(isOneThousandNineHundredAndNinetyNine([]), false);
});

Deno.test("should return false when the input is a boolean", () => {
  // @ts-expect-error - We expect this to be false
  assertEquals(isOneThousandNineHundredAndNinetyNine(true), false);
});

Deno.test("should return false when the input is a function", () => {
  // @ts-expect-error - We expect this to be false
  assertEquals(isOneThousandNineHundredAndNinetyNine(() => {}), false);
});

