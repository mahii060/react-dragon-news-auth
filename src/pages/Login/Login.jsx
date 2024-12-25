import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../../utils/useAuth";

const Login = () => {
    const { userLogin } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
            .then(result => {
                console.log('User logged in successfully', result.user);
            }).catch(error => {
                console.error(error)
            })

        console.log(email, password);
    }
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-3xl text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don`t have an account? <Link className="btn btn-link" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;