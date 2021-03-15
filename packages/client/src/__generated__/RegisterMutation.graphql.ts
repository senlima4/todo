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
export type RegisterMutationVariables = {
    input: RegisterHumanInput;
};
export type RegisterMutationResponse = {
    readonly registerHuman: {
        readonly human: {
            readonly username: string | null;
        } | null;
    } | null;
};
export type RegisterMutation = {
    readonly response: RegisterMutationResponse;
    readonly variables: RegisterMutationVariables;
};



/*
mutation RegisterMutation(
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
    "name": "RegisterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a74061b359c9172bf3db14930a8e5996",
    "id": null,
    "metadata": {},
    "name": "RegisterMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterMutation(\n  $input: RegisterHumanInput!\n) {\n  registerHuman(input: $input) {\n    human {\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dc17cf9722f37ca72fd13d6bec4f3bd8';
export default node;
