// assets
import Logo from "assets/images/logo.png";

// components
import Image from "components/Image";

const LoginHeader = () => {
  return (
    <header className="flex flex-col text-[1.375rem] font-semibold leading-[1.3]">
      <div className="flex items-center justify-center w-full pb-4">
        <div className="size-14">
          <Image src={Logo} alt="logo" />
        </div>
      </div>

      <h1>Think it. Make it.</h1>
      <p className="text-[#ACABA9]">Log in to your Notion account</p>
    </header>
  );
};

export default LoginHeader;
