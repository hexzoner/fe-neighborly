import { useNavigate } from "react-router-dom";



const Card = ({ index, post }) => {
    const navigate = useNavigate();

    function handleDetailsClick(pokemonId) {
        navigate("/Details/${pokemonId}");
    }

    return (
        <li className="w-full m-4 flex flex-col items-center rounded-lg border-2 border-blue-400 p-4">
            <div className="py-2 pl-10">
                <h2>{post.title}</h2>
            </div>
            <div className="py-2 pl-10">
                <p>{post.content}</p>
            </div>
            <button
                onClick={() => handleDetailsClick(pokemon.id)}
                className="mx-4 inline-flex items-center justify-center rounded-lg border-2 border-blue-400 p-2 font-bold"
            >
                More Details
            </button>
        </li>
    );
};

export default Card; 