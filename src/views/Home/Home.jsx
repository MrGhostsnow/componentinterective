import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home_Page">
        <Card
          src="./assets/images/icon-star.svg"
          h1="How did we do?"
          p="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        />
      </div>
    </>
  );
}

export default Home;
