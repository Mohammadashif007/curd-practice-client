import { useLoaderData } from "react-router-dom";

const Edit = () => {
    const data = useLoaderData();

    const { name, email, age, id, _id } = data;

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const id = form.id.value;

        let updatedUser = { name, email, age, id };
        console.log(updatedUser);

        fetch(`http://localhost:3000/users/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div className="w-4/5 mx-auto">
            <form onSubmit={handleForm}>
                <div>
                    <div>
                        <label>Name</label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        defaultValue={name}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div>
                    <div>
                        <label>Age</label>
                    </div>
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        defaultValue={age}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            defaultValue={email}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                </div>
                <div>
                    <label>Id</label>
                    <div>
                        <input
                            type="text"
                            name="id"
                            placeholder="Id"
                            defaultValue={id}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                </div>
                <button className="btn btn-primary mt-2">Add User</button>
            </form>
        </div>
    );
};

export default Edit;
