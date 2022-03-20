"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proto_1 = require("../../proto");
var types_1 = require("../../types");
// export * as vesting from './module';
types_1.codec.register('/cosmos.vesting.v1beta1.BaseVestingAccount', proto_1.cosmos.vesting.v1beta1.BaseVestingAccount);
types_1.codec.register('/cosmos.vesting.v1beta1.ContinuousVestingAccount', proto_1.cosmos.vesting.v1beta1.ContinuousVestingAccount);
types_1.codec.register('/cosmos.vesting.v1beta1.DelayedVestingAccount', proto_1.cosmos.vesting.v1beta1.DelayedVestingAccount);
