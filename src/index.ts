import { Construct } from "@aws-cdk/core";
import { Stream } from '@aws-cdk/aws-kinesis';

export class AutoscalingKinesisStream extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new Stream(this, 'Stream', {});
  }
}
