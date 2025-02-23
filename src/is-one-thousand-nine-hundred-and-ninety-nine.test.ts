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
