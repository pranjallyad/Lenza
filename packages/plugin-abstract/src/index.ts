import { Plugin } from "@elizaos/core";

import transfer from "./actions/transfer.ts";
import trasferFromWallet from "./actions/trasferFromWallet.ts";

export const abstractPlugin: Plugin = {
    name: "abstract",
    description: "Abstract Plugin for Eliza",
    actions: [transfer,trasferFromWallet],
    evaluators: [],
    providers: [],
};

export default abstractPlugin;
