import { useForm } from 'react-hook-form';
import registerImg from '../../src/assets/sign.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUser,userProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
          console.log(result.user)
          userProfile(data.name, data.photo)
          .then(result =>{
            console.log(result.user);
          })
          .catch(error=>{
            console.log(error);
          })
        })
        .catch(error =>{
          console.log(error);
        })
      }
    return (
        <div>
            <h1 className="text-5xl text-center mt-4 font-bold">Sign Up now!</h1>
            <div className="hero min-h-screen">
            
  <div className="hero-content flex-col gap-10 lg:flex-row">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="url" {...register("photo")} placeholder="Your photo url" className="input input-bordered" required />
        </div>

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
          <button className="btn btn-outline text-white bg-orange-700">Sign Up</button>
        </div>
         <p>Already have an account? please <Link className='text-orange-700 font-bold underline' to='/login'>Sign In</Link>. </p>

      </form>
    </div>
    
    <div className="text-center lg:text-left">
      <img className='w-96 h-96' src={registerImg} alt="" />
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;