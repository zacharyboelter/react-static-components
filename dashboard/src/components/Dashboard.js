import NavBar from "./NavBar";
import Reviews from "./Reviews";
import Visitors from "./Visitors";
import Sentiment from "./Sentiment";
import Rating from "./Rating";


const Dashboard = (props) => {
    return (
        <div id=''>
            <NavBar />
            <main id='main'>
                <div id='main-overview'>
                    <Reviews />
                    <Rating />
                    <Sentiment />
                </div>
            </main>
            <Visitors />
        </div>
    );
}

export default Dashboard;