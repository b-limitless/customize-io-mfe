// import React from "react";
// import {createRoot} from "react-dom/client";
// import { createMemoryHistory, createBrowserHistory } from "history";
// import App from "./App";

// // Mount function to start up the app
// const mount = (
//   el,
//   { onNavigate, defaultHistory, initialPath, onSignIn, isSignedIn }
// ) => {
//   const history =
//     defaultHistory ||
//     createMemoryHistory({
//       initialEntries: [initialPath],
//     });

//   if (onNavigate) {
//     history.listen(onNavigate);
//   }

//   const root = createRoot(el);
//   root.render(<App history={history} onSignIn={onSignIn} isSignedIn={isSignedIn} />);

//   return {
//     onParentNavigate({ pathname: nextPathname }) {
//       const { pathname } = history.location;

//       if (pathname !== nextPathname) {
//         history.push(nextPathname);
//       }
//     },
//   };
// };

// // If we are in development and in isolation,
// // call mount immediately
// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.querySelector("#customize-id-customer-interaction");

//   if (devRoot) {
//     mount(devRoot, { defaultHistory: createBrowserHistory() });
//   }
// }

// // We are running through container
// // and we should export the mount function
// export { mount };
