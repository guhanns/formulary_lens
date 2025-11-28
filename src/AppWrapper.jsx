import { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logUserLogin } from './Components/redux/features/auditLogs';

export default function AppWrapper() {
  const { instance } = useMsal();
  const dispatch = useDispatch()
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const location = useLocation()


  useEffect(() => {
    const handleSSORedirect = async () => {
      try {
        const response = await instance.handleRedirectPromise();
        if (response) {
          const user = response.account.name;
          if (user) {
            dispatch(logUserLogin(user)); // 🔥 Audit log HERE
          }
          instance.setActiveAccount(response.account);
          navigate("/overview"); // ✅ Redirect to dashboard after login
        } else if (isAuthenticated) {
          const account =
            instance.getActiveAccount() || instance.getAllAccounts()[0];
          if (account) {
            instance.setActiveAccount(account);
            if (location === "/") {
              navigate("/overview", { replace: true });
              console.log(window.location.pathname);
            } // ✅ Already logged in
          }
        }
      } catch (error) {
        console.error('MSAL Redirect Error:', error);
      }
    };

    handleSSORedirect();
  }, [instance, navigate, isAuthenticated]);

  return null; // Optional — or render <RouterProvider router={router} />
}
