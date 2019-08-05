import { storiesOf } from "@storybook/react";
import React from "react";
import EmbedWrapper from "./EmbedWrapper";

storiesOf("EmbedWrapper", module)
  .add("with no products", () => <EmbedWrapper />)
  .add("with filters and no products", () => <EmbedWrapper />)
  .add("with error", () => <EmbedWrapper provider="broken" />)
  .add("with filters and no products", () => <EmbedWrapper />);
