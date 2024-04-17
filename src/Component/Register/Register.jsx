import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provaider/AuthProvider";
import { Result } from "postcss";
import toast from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {

    const {createUser} = useContext(AuthContext);


    const navigate = useNavigate();



    const [registerError, setegisterError] = useState('');


    const [showPassword, setShowPassword] = useState(false);

    
    

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, name, accepted);


        setegisterError('');

        if(password.length < 6){
            setegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)){
            setegisterError('your password mast be uper characters')
            return;
        }
        if(password.length < 6){
            setegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/.test(password)){
            setegisterError('Password should be a Uniq Character')
            return;
        }

        else if(!accepted){
            setegisterError('Please accept our terms and condition');
            return;
        }


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
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="email" name="email" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                          <div className="relative">
                          <div>
                            <input 
                            type={ showPassword ? "text" : "password" } name="password" 
                            placeholder="Password"
                            className="input input-bordered" 
                            required />  
                            </div>
                            <div className="">
                            <span className="absolute mx-56 -mt-9" onClick={ () => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEyeOff className="text-2xl"></IoMdEyeOff> : <IoMdEye className="text-2xl "></IoMdEye>
                                }
                                

                            </span>
                            </div>
                          </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <div className="gap-2 flex my-6">
                            <input type="checkbox" name="" id="terms" />
                            <div>
                            <label className="text-sm" htmlFor="terms">Accept Our Terms and Condition</label>
                            </div>
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



