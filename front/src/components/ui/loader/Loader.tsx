import React, {FC} from 'react';
import {BeatLoader, PacmanLoader} from "react-spinners";

const Loader: FC = () => {
    return  <div className='w-full h-full fixed m-auto bg-opacity-30 bg-aqua flex content-center'>
        <BeatLoader  color="#3498db" size={40}  className='items-center m-auto'/></div>
};

export default Loader;