import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import {
  addSelectedToMany,
  generateFilters,
  generateProducts,
  Story,
} from "../test";
import EmbedWrapper from "./EmbedWrapper";

storiesOf("EmbedWrapper", module)
  .add("with products", () => (
    <Story>
      <EmbedWrapper
        products={generateProducts(3)}
        onApply={action("apply")}
        onMoreDetails={action("more-details")}
      />
    </Story>
  ))
  .add("with limited products", () => (
    <Story>
      <EmbedWrapper
        products={generateProducts(3)}
        productsLimit={1}
        onApply={action("apply")}
        onMoreDetails={action("more-details")}
      />
    </Story>
  ))
  .add("with filters", () => (
    <Story>
      <EmbedWrapper
        filters={generateFilters(3)}
        products={generateProducts(3)}
        onApply={action("apply")}
        onMoreDetails={action("more-details")}
      />
    </Story>
  ))
  .add("with selected filters", () => (
    <Story>
      <EmbedWrapper
        filters={addSelectedToMany(generateFilters(3))}
        products={generateProducts(3)}
        onApply={action("apply")}
        onMoreDetails={action("more-details")}
      />
    </Story>
  ))
  .add("with provider", () => (
    <Story>
      <EmbedWrapper
        provider="http://localhost:9001/products.json"
        onApply={action("apply")}
        onMoreDetails={action("more-details")}
      />
    </Story>
  ));
