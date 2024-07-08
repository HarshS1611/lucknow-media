import Main from "./components/Main";
import Services from "./components/Services";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return (
    <div>
      <Main />
      <Services/>
    </div>
  );
}
