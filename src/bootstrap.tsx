import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === 'development') {
  const isolationEnvElement = document.querySelector('#dev-products');

  if (isolationEnvElement) {
    mount(isolationEnvElement);
  }
}

export { mount };
