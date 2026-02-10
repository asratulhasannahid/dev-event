import Hallo from "../components/Hallo";

const Home = () => {
  console.log("What type of a component am I?");
  return (
    <main>
      <div className="text-5xl underline bg-red-500 text-center pt-10 pl-10 pr-10 pb-10">
        Welcome to the world!
      </div>
      <Hallo></Hallo>
    </main>
  );
};

export default Home;
