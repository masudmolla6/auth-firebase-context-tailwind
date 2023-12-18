import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-center text-3xl mt-3 text-indigo-600'>Welcome To My Website .{user && <span>{ user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;