import ReactDOM from "react-dom";
export const node = (component: unknown) => ReactDOM.findDOMNode(component as never);
