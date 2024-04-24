import { useLoaderData } from "react-router-dom";
import "./App.css";
import User from "./User";

function App() {

  const users = useLoaderData();

  console.log(users);

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const id = form.id.value;

        let newUser = { name, email, age, id };
        console.log(newUser);

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div>
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
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary mt-2">Add User</button>
                </form>
            </div>
            <div className="w-4/5 mx-auto mt-10">
                <div>
                {
                  users.map(x => <User key={x._id} x={x}></User>)
                }
                </div>
            </div>
        </div>
    );
}

export default App;
