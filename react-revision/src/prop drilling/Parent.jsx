import React from "react";
import ChildA from "./ChildA";

function Parent() {
  const myname = "john";

  return (
    <div>
      <ChildA name={myname} />
    </div>
  );
}

export default Parent;
