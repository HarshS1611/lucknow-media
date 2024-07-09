import Main from "./components/Main";
import PortfolioPage from "./components/Portfolio";
import Services from "./components/Services";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
    <div>
      <Main />
      <Services/>
      <PortfolioPage/>
    </div>
  );
}
