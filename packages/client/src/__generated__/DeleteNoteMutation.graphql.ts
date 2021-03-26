/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteNoteInput = {
    clientMutationId?: string | null;
    nodeId: string;
};
export type DeleteNoteMutationVariables = {
    input: DeleteNoteInput;
};
export type DeleteNoteMutationResponse = {
    readonly deleteNote: {
        readonly deletedNoteId: string | null;
    } | null;
};
export type DeleteNoteMutation = {
    readonly response: DeleteNoteMutationResponse;
    readonly variables: DeleteNoteMutationVariables;
};



/*
mutation DeleteNoteMutation(
  $input: DeleteNoteInput!
) {
  deleteNote(input: $input) {
    deletedNoteId
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedNoteId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteNoteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteNotePayload",
        "kind": "LinkedField",
        "name": "deleteNote",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteNoteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteNotePayload",
        "kind": "LinkedField",
        "name": "deleteNote",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedNoteId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2e3300aaf5a624113ef689c1bc8e4490",
    "id": null,
    "metadata": {},
    "name": "DeleteNoteMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteNoteMutation(\n  $input: DeleteNoteInput!\n) {\n  deleteNote(input: $input) {\n    deletedNoteId\n  }\n}\n"
  }
};
})();
(node as any).hash = '66e094fd187ba66a1c741194e9cb88a3';
export default node;
