import React, { render } from "react";

console.log(import.meta.resolve("./deep/reallydeep.tsx"))
console.log(React.createElement);

export default (inRoot:Element)=>
{
    render(<div class="p-4 bg-blue-500 text-white m-big">sup.</div>, inRoot);
};
