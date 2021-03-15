/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AuthenticateInput = {
    clientMutationId?: string | null;
    email: string;
    password: string;
};
export type LoginMutationVariables = {
    input: AuthenticateInput;
};
export type LoginMutationResponse = {
    readonly authenticate: {
        readonly jwtToken: unknown | null;
    } | null;
};
export type LoginMutation = {
    readonly response: LoginMutationResponse;
    readonly variables: LoginMutationVariables;
};



/*
mutation LoginMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwtToken
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
    "concreteType": "AuthenticatePayload",
    "kind": "LinkedField",
    "name": "authenticate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jwtToken",
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
    "name": "LoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4af1ad21ded7e7ec3458fcd1ffca3519",
    "id": null,
    "metadata": {},
    "name": "LoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwtToken\n  }\n}\n"
  }
};
})();
(node as any).hash = '88cc0e7f445957ed909a8b859c1d7718';
export default node;
