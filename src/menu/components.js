import React from "react";
import Foo from "./Foo";
import Bar from "./Bar";

const Components = {
  foo: Foo,
  bar: Bar
};

export default block => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
        block: block,
        key: block._uid
     
    });
  }
  return React.createElement(
    () => 
    <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
