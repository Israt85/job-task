import { useForm } from "react-hook-form";
import img from '../../src/assets/17465954_2007.i039.019_cyber_security_spyware_data_protection_isometric_set-16.jpg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {signInUser,googleLogin} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
        console.log(data)
        signInUser(data.email, data.password)
        .then(result =>{
            console.log(result.user)
            .catch(error =>{
                console.log(error);
            })
        })
      }
      const handleGoogle=()=>{
        googleLogin()
        .then(result=>{
          console.log(result.user);
          

        })
      }
    return (
        <div>
            <h1 className="text-5xl text-center mt-4 font-bold">Sign In !!!</h1>
            <div className="hero min-h-screen">
            
  <div className="hero-content flex-col gap-10 lg:flex-row">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white btn-outline bg-orange-700">Sign In</button>
          <button onClick={handleGoogle} className="btn my-2 btn-outline btn-error">
            <FcGoogle/>
  Google Login
</button>
        </div>
         <p>New to this website? please <Link className="text-orange-700 font-bold underline" to='/register'>Sing Up</Link>. </p>

      </form>
    </div>
    
    <div className="text-center lg:text-left">
      <img className='w-96 h-96' src={img} alt="" />
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;