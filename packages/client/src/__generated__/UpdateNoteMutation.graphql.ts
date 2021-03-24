/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateNoteInput = {
    clientMutationId?: string | null;
    nodeId: string;
    notePatch: NotePatch;
};
export type NotePatch = {
    content?: string | null;
    createdAt?: unknown | null;
    humanId?: unknown | null;
    id?: unknown | null;
    updatedAt?: unknown | null;
};
export type UpdateNoteMutationVariables = {
    input: UpdateNoteInput;
};
export type UpdateNoteMutationResponse = {
    readonly updateNote: {
        readonly note: {
            readonly id: unknown;
            readonly nodeId: string;
            readonly content: string;
            readonly createdAt: unknown | null;
            readonly updatedAt: unknown | null;
        } | null;
    } | null;
};
export type UpdateNoteMutation = {
    readonly response: UpdateNoteMutationResponse;
    readonly variables: UpdateNoteMutationVariables;
};



/*
mutation UpdateNoteMutation(
  $input: UpdateNoteInput!
) {
  updateNote(input: $input) {
    note {
      id
      nodeId
      content
      createdAt
      updatedAt
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
    "concreteType": "UpdateNotePayload",
    "kind": "LinkedField",
    "name": "updateNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "UpdateNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "76daa7023a5933fe7a50f72373854c7d",
    "id": null,
    "metadata": {},
    "name": "UpdateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateNoteMutation(\n  $input: UpdateNoteInput!\n) {\n  updateNote(input: $input) {\n    note {\n      id\n      nodeId\n      content\n      createdAt\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7fb670ab0a4202499f99073dd15005b4';
export default node;
