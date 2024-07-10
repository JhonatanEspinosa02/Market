import React from "react";

//import custom components
import SpanNavigation from "./span/header_span";
import HeaderNavigation from "./navigation/header_navigation";

export default function Header() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <SpanNavigation></SpanNavigation>
    </>
  );
}
