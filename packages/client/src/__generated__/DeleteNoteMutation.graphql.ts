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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteNotePayload",
    "kind": "LinkedField",
    "name": "deleteNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedNoteId",
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
    "name": "DeleteNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteNoteMutation",
    "selections": (v1/*: any*/)
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
(node as any).hash = '340d0802fa3dcdeab12d7f7985e2e973';
export default node;
