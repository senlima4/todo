/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RegisterHumanInput = {
    clientMutationId?: string | null;
    email: string;
    password: string;
    username: string;
};
export type RegisterHumanMutationVariables = {
    input: RegisterHumanInput;
};
export type RegisterHumanMutationResponse = {
    readonly registerHuman: {
        readonly human: {
            readonly username: string | null;
        } | null;
    } | null;
};
export type RegisterHumanMutation = {
    readonly response: RegisterHumanMutationResponse;
    readonly variables: RegisterHumanMutationVariables;
};



/*
mutation RegisterHumanMutation(
  $input: RegisterHumanInput!
) {
  registerHuman(input: $input) {
    human {
      username
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RegisterHumanPayload",
    "kind": "LinkedField",
    "name": "registerHuman",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Human",
        "kind": "LinkedField",
        "name": "human",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterHumanMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterHumanMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "93e88e3e5ee8dbe4b55cc80d1e018913",
    "id": null,
    "metadata": {},
    "name": "RegisterHumanMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterHumanMutation(\n  $input: RegisterHumanInput!\n) {\n  registerHuman(input: $input) {\n    human {\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fe78c4ed03c95ddf5c51402598ebd790';
export default node;
