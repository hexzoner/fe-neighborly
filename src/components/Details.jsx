export default function Post() {
  const handleDelete = () => {
    // navigate(`/posts/${id}/delete`);
    console.log("handleDelete");
  };
  const handleUpdate = () => {
    // navigate(`/posts/${id}/update`);
    console.log("handleUpdate");
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <figure>
          <img
            src={src}
            alt={alt}
            onError={(e) => {
              e.target.src =
                "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1";
            }}
            className="object-cover w-full h-48"
          />
          {title && (
            <figcaption className="m-auto mt-2 text-center">{title}</figcaption>
          )}
        </figure>
        <div>
          <h1 className="mb-6 text-5xl font-bold">{post.title}</h1>
          <div className="flex justify-between">
            <p>{post.author}</p>
            <p>{post.create_at.split("T")[0]}</p>
          </div>
          <p className="py-6">{post.content}</p>
          <div className="flex justify-end w-full gap-6">
            <button className="btn" onClick={handleUpdate}>
              update
            </button>
            <button className="btn" onClick={handleDelete}>
              delete
            </button>
            <button className="btn" onClick={() => navigate("/")}>
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
