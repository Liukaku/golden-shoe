import React, { createContext } from "react";
import { ContextState } from "../interfaces";

export const CTX = React.createContext<ContextState | null>(null);

export default CTX;
