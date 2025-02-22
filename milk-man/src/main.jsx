import React from "react";
import ReactDom from "react-dom/client";
function Hello(){
    return <p>hello</p>;
}

const sample = ReactDom.createRoot(document.getElementById('root'));
sample.render(<Hello />);