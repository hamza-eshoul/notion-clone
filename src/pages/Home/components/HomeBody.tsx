// partials
import HomepageBodyText from "./HomepageBodyText";
import HomepageBodyTitle from "./HomepageBodyTitle";

const HomeBody = () => {
  return (
    <section className="mt-32 flex flex-col">
      <HomepageBodyTitle />
      <HomepageBodyText />
    </section>
  );
};

export default HomeBody;
