import { Link } from 'react-router-dom';
import banner from '../../src/assets/3236908_456341-PFGP9Q-332.jpg'

const Banner = () => {
    return (
        <div className="w-full h-96">
            <div className='flex mx-2 justify-center items-center'>
            <div className='mx-4'>
                <h1 className='text-xl text-orange-700 font-bold'> Navigate Your Goals with Precision Task Management</h1>
                <p>Unleash the power of efficient task management, turning your ideas into action and transforming your to-dos into accomplishments. Elevate your daily routine, reduce stress, and make every task count with our simplified and smart approach to task management. Your journey to productivity begins here!</p>
                <div className='w-[max-content] mx-auto'><Link to='/register'><button className='btn btn-outline bg-orange-700 text-white'>Let' Explore</button></Link></div>
            </div>
           <img className='w-96 h-96' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;