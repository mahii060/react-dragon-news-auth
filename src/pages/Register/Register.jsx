import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../../utils/useAuth";

const Register = () => {
    const { createUser } = useAuth()

    const handleRegister = (e) => {
        e.preventDefault();


        const form = new FormData(e.currentTarget)
        // const name = form.get('name')
        // const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        // Creating new user using email and password
        createUser(email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user)
                // ...
            })
            .catch((error) => {
                console.log(error)
                // ..
            });
    }
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-3xl text-center">Register Here</h2>
                <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="btn btn-link" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;