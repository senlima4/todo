/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EntryPointQueryVariables = {};
export type EntryPointQueryResponse = {
    readonly allHumans: {
        readonly totalCount: number;
    } | null;
    readonly currentHuman: {
        readonly id: unknown;
    } | null;
};
export type EntryPointQuery = {
    readonly response: EntryPointQueryResponse;
    readonly variables: EntryPointQueryVariables;
};



/*
query EntryPointQuery {
  allHumans {
    totalCount
  }
  currentHuman {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntryPointQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EntryPointQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b3c147e3e48de64e4758cbaab7ad70f4",
    "id": null,
    "metadata": {},
    "name": "EntryPointQuery",
    "operationKind": "query",
    "text": "query EntryPointQuery {\n  allHumans {\n    totalCount\n  }\n  currentHuman {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8941f30e9b81c21412a0c1c9f08737ae';
export default node;
