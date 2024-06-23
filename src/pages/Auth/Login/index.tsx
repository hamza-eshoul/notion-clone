import LoginAuth from "./components/LoginAuth";
import LoginFooter from "./components/LoginFooter";
import LoginHeader from "./components/LoginHeader";
import LoginLayout from "./components/LoginLayout";

const LoginPage = () => {
  return (
    <LoginLayout>
      <>
        <LoginHeader />
        <LoginAuth />
        <LoginFooter />
      </>
    </LoginLayout>
  );
};

export default LoginPage;
