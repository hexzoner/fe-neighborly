const Card = ({ index, post }) => {
    return (
        <li className="card flex-initial min-w-[600px] border flex rounded-lg border-gray-300 p-4">
            <div className="py-10">
                <p className="name text-center">ID:{post.id}</p>
                <p className="name text-center">ID:{post.id}</p>

            </div>
            <div className="py-10 pl-10">
                <h2>{post.title}</h2>
            </div>
            <div className="py-10 pl-10">
                <p>{post.body}</p>
            </div>
        </li>
    );
};

export default Card; 