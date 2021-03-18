/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AuthQueryVariables = {};
export type AuthQueryResponse = {
    readonly currentHuman: {
        readonly id: unknown;
    } | null;
    readonly allHumans: {
        readonly nodes: ReadonlyArray<{
            readonly username: string | null;
        }>;
    } | null;
};
export type AuthQuery = {
    readonly response: AuthQueryResponse;
    readonly variables: AuthQueryVariables;
};



/*
query AuthQuery {
  currentHuman {
    id
  }
  allHumans {
    nodes {
      username
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Human",
    "kind": "LinkedField",
    "name": "currentHuman",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "HumansConnection",
    "kind": "LinkedField",
    "name": "allHumans",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Human",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c023438a6032faca6c7f0a6f30f6fdfd",
    "id": null,
    "metadata": {},
    "name": "AuthQuery",
    "operationKind": "query",
    "text": "query AuthQuery {\n  currentHuman {\n    id\n  }\n  allHumans {\n    nodes {\n      username\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8c0c274650be8670917d614927988712';
export default node;
