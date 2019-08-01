import { makeProviderURI } from "./api";
import { filters } from "../test-utils";
import { makeFilterQueryString } from "./filter";

test("Creates a valid provider url", () => {
  const filterQueryString = makeFilterQueryString(
    filters.withSingleChoiceChosen
  );

  expect(makeProviderURI("http://localhost:3000", filterQueryString)).toBe(
    "http://localhost:3000?TEST_KEY=TEST_CHOICE"
  );
  expect(
    makeProviderURI("http://localhost:3000?query=test", filterQueryString)
  ).toBe("http://localhost:3000?query=test&TEST_KEY=TEST_CHOICE");
});
