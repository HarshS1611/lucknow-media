import Main from "./components/Main";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return (
    <div>
      <Main />
    </div>
  );
}
