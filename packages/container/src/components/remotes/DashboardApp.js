import { mount } from "dashboard/DashboardApp";
import useRemoteApp from "../../hooks/useRemoteApp";

export default ({ onSingIn, isSignIn, showProfileSideModel, setShowProfileSideModel }) => {
  return useRemoteApp(mount, {onSingIn, isSignIn});
};
