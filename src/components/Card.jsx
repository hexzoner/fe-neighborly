import { useNavigate } from "react-router-dom";



const Card = ({ index, post }) => {
    const navigate = useNavigate();
    function handleDetailsClick() {
        navigate("/posts/${post._id}");
    }

    return (
        <li className="flex flex-col items-center w-full p-4 m-4 border-2 border-blue-400 rounded-lg">
            <div className="py-2 pl-10">
                <h2>{post.title}</h2>
            </div>
            <div className="py-2 pl-10">
                <p>{post.content}</p>
            </div>
            <button
                onClick={() => handleDetailsClick()}
                className="inline-flex items-center justify-center p-2 mx-4 font-bold border-2 border-blue-400 rounded-lg"
            >
                More Details
            </button>
        </li>
    );
};

export default Card; 