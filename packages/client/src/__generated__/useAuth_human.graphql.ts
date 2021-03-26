/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAuth_human = {
    readonly id: unknown;
    readonly username: string | null;
    readonly " $refType": "useAuth_human";
};
export type useAuth_human$data = useAuth_human;
export type useAuth_human$key = {
    readonly " $data"?: useAuth_human$data;
    readonly " $fragmentRefs": FragmentRefs<"useAuth_human">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useAuth_human"
};
(node as any).hash = '07a03910ca490aee48b6a250cebf27a7';
export default node;
