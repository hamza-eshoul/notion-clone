// partials
import HomeLayout from "./components/HomeLayout";
import HomeAside from "./components/HomeAside";
import HomeBody from "./components/HomeBody";

const HomePage = () => {
  return (
    <HomeLayout>
      <HomeAside />
      <HomeBody />
    </HomeLayout>
  );
};

export default HomePage;
