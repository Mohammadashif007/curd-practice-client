import "./App.css";

function App() {
  
  const handleForm = e => {
    e.preventDefault();

  }

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
    );
}

export default App;
