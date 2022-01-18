import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function LogDetails() {
const URL = `http://localhost:3003/logs`
const [log, setLog] = useState([]);
const navigate = useNavigate();
const { index } = useParams();

useEffect(() => {
    axios.get(`${URL}/${index}`)
    .then((response) => {
        console.log(response.data);
        setLog(response.data);
    })
    .catch((error) => console.log("catch", error));
}, []);


const handleDelete = () => {
    axios.delete(`${URL}/${index}`).then(() => navigate(`/logs`));
};


return (
    <div className="LogsDetails">
        <span>
            <strong>CaptainName:</strong> {log.captainName}
        </span>
    <br />
        <span>
            <strong>Title:</strong> {log.title}
        </span>
    <br />
        <span>
            <strong>Post:</strong> {log.post}
        </span>
    <br />
        <span>
            <strong>mistakesWereMadeToday:</strong> {log.mistakesWereMadeToday}
        </span>
    <br />
        <span>
            <strong>daysSinceLastCrisis:</strong> {log.daysSinceLastCrisis}
        </span>
    <br />

        <div>
            <Link to={`/Logs`}>
                <button>Back</button>
            </Link>
        </div>
            
        <div>
            <Link to={`/Logs`}>
                <button onClick={handleDelete}>Delete</button>
            </Link>
        
        </div>

    </div>

    );
}

export default LogDetails;
