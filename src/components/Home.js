import service from "../services/trivia-service"
import {useState, useEffect} from "react";
import CreateTrivia from "./CreateTrivia";
import Question from "./Question/Question";
import NavBar from "./NavBar";
import './index.css'


const Home = (props) => {
    const [skip, setSkip] = useState(0);
    const limit = 10;
    const user = localStorage.getItem("user");
    const [trivia, setTrivia] = useState([]);
    useEffect(async() => {
        await service.findAllTrivia().then(trivia => {
            setTrivia(trivia);
            setSkip(skip+10);
        });
    }, []);
    

    const renderCreate = () => {
        if(user && JSON.parse(user).user_type === "moderator") {
            return (<>
                <h2 id="question-title">Create A Question</h2>
                <CreateTrivia/>
                </>)
        }
    } 
    
    return (
        <div>
            <div style={{position:"sticky", top:"0", zIndex:"100"}} >
                <NavBar />
            </div>
            
            <br />
            {renderCreate()}
            <h2 id="question-title">Questions</h2>
            <hr></hr>
            <div className="home">
                {trivia.map(trivia => {
                    return(<Question key={trivia._id} trivia={trivia} />
                        ) 
                })}
            </div>
        </div>
    );
    
}

export default Home;