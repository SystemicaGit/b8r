import { Schema, model } from "mongoose";
import { MODELS } from "../constants/model.constants";
import { authCodeType } from "../constants/global.constants";

const AuthCodeSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: MODELS.USERS,
      default: null,
    },
    entity: {
      type: Schema.Types.String,
    },
    code: {
      type: Schema.Types.String,
      unique: true,
      index: true,
      required: true,
    },
    codeType: {
      type: Schema.Types.String, // FL=field-agent, BA=property-agent, DA=other
      enum: authCodeType,
    },
    status: {
      type: Schema.Types.Boolean, // Active/Inactive
      default: false,
    },
    startTime: {
      type: Schema.Types.String,
      default: null,
    },
    endTime: {
      type: Schema.Types.String,
      default: null,
    },
  },
  { timestamps: true }
);

AuthCodeSchema.index({ code: 1 }, { unique: true });

export default model(MODELS.AUTHCODE, AuthCodeSchema);
