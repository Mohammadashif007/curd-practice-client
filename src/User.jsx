import { Link } from "react-router-dom";

const User = ({ x }) => {
    const { id, name, email, age, _id } = x;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{id}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{age}</td>
                            <td>
                                <div className="join">
                                    <Link to={`/edit/${_id}`}>
                                        {" "}
                                        <button className="btn join-item">
                                            Edit
                                        </button>
                                    </Link>
                                    <button className="btn join-item">
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleDelete(_id)}
                                        className="btn join-item"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
