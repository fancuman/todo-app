import React from "react";
import LinkFilter from "../containers/LinkFilter";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../config";

export default function Footer() {
  return (
    <div>
      Select{" : "}
      <LinkFilter filter={SHOW_ALL}>All</LinkFilter>
      {" , "}
      <LinkFilter filter={SHOW_COMPLETED}>Completed</LinkFilter>
      {" , "}
      <LinkFilter filter={SHOW_ACTIVE}>Active</LinkFilter>
    </div>
  );
}
