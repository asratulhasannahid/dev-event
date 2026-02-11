import Hallo from "../components/Hallo";

const Home = async () => {
  console.log("What type of a component am I?");

  return (
    <main>
      <div className="text-5xl underline bg-red-500 text-center pt-10 pl-10 pr-10 pb-10">
        Welcome to the world!, I learn core concept and theory from this project
      </div>
      <Hallo></Hallo>
    </main>
  );
};

export default Home;
