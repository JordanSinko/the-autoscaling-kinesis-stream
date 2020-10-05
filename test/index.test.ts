import "@aws-cdk/assert/jest";
import { App, Stack } from "@aws-cdk/core";

import { AutoscalingKinesisStream } from "../src";

test("Snapshot", () => {
  const app = new App();
  const stack = new Stack(app, "testing-stack");

  new AutoscalingKinesisStream(stack, "Stream");

  expect(app.synth().getStackArtifact(stack.artifactId).template).toMatchSnapshot();
});
