import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";
import { useHistory } from "react-router-dom";

export default ({ onSingIn, isSignIn, showProfileSideModel, setShowProfileSideModel }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSingIn,
      isSignIn,
      showProfileSideModel, 
      setShowProfileSideModel
    });
    history.listen(onParentNavigate);
  }, [isSignIn, showProfileSideModel, setShowProfileSideModel]);

  return <div ref={ref}></div>;
};
