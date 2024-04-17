import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provaider/AuthProvider";
import { Result } from "postcss";
import toast from "react-hot-toast";

const Register = () => {

    const {createUser} = useContext(AuthContext);


    const navigate = useNavigate();



    const [registerError, setegisterError] = useState('');
    

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name);


        setegisterError('');


        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            toast.success('Registration Successfully')
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.error(error);
            setegisterError(error.message);
        } )
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-600">{registerError}</p>
                    }
                    <p className="mt-4 text-center">Already Have An Account? <Link to="/login" className="btn btn-link">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;



