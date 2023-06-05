import SectionTitle from "../../components/SectionTitle/SectionTitle";
import imageSignUp from '../../assets/images/signup.jpg'
import { useForm } from "react-hook-form";
import Container from "../../components/Container/Container";
import { Link } from 'react-router-dom'

import { FaEye, FaEyeSlash, FaExclamationTriangle, FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [seePass, setSeePass] = useState(false)

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <section className="min-h-screen">
            <SectionTitle title={'Sign up'} titleShort={'Welcome, Sign up to get an account'}></SectionTitle>
            {/*  */}
            <Container>
                <div className="flex flex-row justify-center items-center md:grid md:grid-cols-2 ">
                    {/* form section */}
                    <div className="p-4 max-h-[600px] flex flex-col max-w-lg rounded-lg bg-gray-100 text-gray-900">
                        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.name ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />
                                {errors.name && (
                                    <span className="text-red-600 flex justify-start items-center mt-1">
                                        <FaExclamation /> Name is required
                                    </span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.email ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`} />
                                {errors.email && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationCircle /> Email is required
                                </span>}
                            </div>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div> */}
                            {/* password */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type={`${seePass ? 'text' : 'password'}`}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,

                                    })} placeholder="password" className={`input input-bordered w-full px-3 py-2 border rounded-md border-gray-300 ${errors.password ? 'focus:outline-rose-600 bg-rose-100' : 'focus:outline-lime-600'} bg-gray-200 text-gray-900`}
                                />

                                {seePass ? (
                                    <FaEye
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(false)}
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="absolute right-3 top-[60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                        onClick={() => setSeePass(true)}
                                    />
                                )}

                                {errors.password?.type === 'required' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600 flex justify-start items-center mt-1">
                                    <FaExclamationTriangle /> Password must have one Uppercase one lower case, one number and one special character.</span>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Already have an account?{' '}
                                <Link
                                    to='/login'
                                    className='hover:underline text-blue-500'
                                >
                                    Login
                                </Link>
                                .
                            </p>
                        </form>
                    </div>
                    {/* img */}
                    <div className="my-auto hidden md:block">
                        <img className="md:w-11/12 max-w-xl pb-5" src={imageSignUp} alt="" />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default SignUp;