import { generateChipLabel, getEmptyChosen, getQueryStringFromState } from "./filter";
import { filters } from "./test-utils";

test("resets all chosen filters", () => {
  const resetChosenFilters = getEmptyChosen([{ multiChoice: true }, { multiChoice: false }]);

  expect(resetChosenFilters[0]).toBeInstanceOf(Array);
  expect(resetChosenFilters[0]).toHaveLength(0);
  expect(resetChosenFilters[1]).toBe("");
  expect(resetChosenFilters[1]).toHaveLength(0);
});

test("creates a query string with no filters", () => {
  expect(getQueryStringFromState(filters.withNoChosen)).toBe("");
});

test("creates a query string with a multi choice filter", () => {
  expect(getQueryStringFromState(filters.withMultiChoiceChosen)).toBe("TEST_KEY=TEST_CHOICE%2CTEST_CHOICE");
});

test("creates a query string with single choice filter", () => {
  expect(getQueryStringFromState(filters.withSingleChoiceChosen)).toBe("TEST_KEY=TEST_CHOICE");
});

test("creates a query string with single and multi choice filters", () => {
  expect(getQueryStringFromState(filters.withSingleAndMultiChoiceChosen)).toBe(
    "TEST_KEY_1=TEST_CHOICE_1%2CTEST_CHOICE_2&TEST_KEY_2=TEST_CHOICE_1"
  );
});

test("will not create a query string with multi choice filters that has null values", () => {
  expect(getQueryStringFromState(filters.withNullMultiChoiceChosen)).toBe("");
});

test("will not create a query string with single choice filters that has null values", () => {
  expect(getQueryStringFromState(filters.withNullSingleChoiceChosen)).toBe("");
});

describe("generateChipLabel", () => {
  const choices = [
    { label: "Chosen Label", value: "chosen_1" },
    { label: "Chosen Label", value: "chosen_2" },
    { label: "Chosen Label", value: "chosen_3" }
  ];

  test("creates a none multi label with no chosen", () => {
    expect(generateChipLabel("label", false, "", choices)).toBe("label");
  });

  test("creates a multi label with no chosen", () => {
    expect(generateChipLabel("label", true, [], choices)).toBe("label");
  });

  test("creates a none multi label with chosen", () => {
    expect(generateChipLabel("label", false, "chosen_1", choices)).toBe("Chosen Label");
  });

  test("creates a multi label with chosen", () => {
    expect(generateChipLabel("label", true, ["chosen_1", "chosen_2"], choices)).toBe("Chosen Label +1");
  });
});
