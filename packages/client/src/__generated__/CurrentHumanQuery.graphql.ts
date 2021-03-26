/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CurrentHumanQueryVariables = {};
export type CurrentHumanQueryResponse = {
    readonly currentHuman: {
        readonly id: unknown;
    } | null;
};
export type CurrentHumanQuery = {
    readonly response: CurrentHumanQueryResponse;
    readonly variables: CurrentHumanQueryVariables;
};



/*
query CurrentHumanQuery {
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
    "name": "CurrentHumanQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CurrentHumanQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a642ad20cd0ef3df5ebc0cf8dfb22e37",
    "id": null,
    "metadata": {},
    "name": "CurrentHumanQuery",
    "operationKind": "query",
    "text": "query CurrentHumanQuery {\n  currentHuman {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '71a52427cc4410a5891d9c30e163434b';
export default node;
