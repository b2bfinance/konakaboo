import { makeProviderURI } from "./api";
import { filters } from "./test-utils";

test("appends filters with a question mark when the provider has no query strings", () => {
  expect(makeProviderURI("http://localhost:3000", filters.withSingleChoiceChosen)).toBe(
    "http://localhost:3000?TEST_KEY=TEST_CHOICE"
  );
});

test("appends filters with an ampersand when the provider has query strings", () => {
  expect(makeProviderURI("http://localhost:3000?query=test", filters.withSingleChoiceChosen)).toBe(
    "http://localhost:3000?query=test&TEST_KEY=TEST_CHOICE"
  );
});
