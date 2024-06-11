import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        password: "",
        remember: false,
    });
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="min-h-screen py-16 bg-green-500 place-content-center">
            <Head title="Login"/>
            <div className="flex h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
                <div
                    className="hidden bg-center bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="flex flex-col justify-center w-full p-8 lg:w-1/2">
                    <h2 className="text-4xl font-bold text-center text-gray-700">
                        manganDa
                    </h2>
                    <p className="text-center text-gray-600 text-l">Welcome back!</p>
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">
                                Username or Email Address
                            </label>
                            <input
                                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                                type="text"
                                value={data.login}
                                onChange={(e) => setData("login", e.target.value)}
                            />
                            <InputError message={errors.login} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Password
                                </label>

                            </div>
                            <div className="flex">
                                <input
                                    className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                                    type={!isShow ? "password" : "text"}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                        }
                                />
                                <label className="flex items-center justify-center border rounded-lg cursor-pointer w-11 ps-0 pe-1 ">
                                    <Checkbox
                                        name="showPassword"
                                        checked={isShow}
                                        onChange={(e) =>
                                            setIsShow(e.target.checked)
                                        }
                                        className="hidden"
                                    />
                                    <div className="text-sm text-gray-600 ms-2">
                                        <FontAwesomeIcon
                                            icon={isShow ? faEye : faEyeSlash}
                                        />
                                    </div>
                                </label>

                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="text-sm text-gray-600 ms-2">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-bold text-white rounded bg-green-yellow-600 hover:bg-gray-600"
                                disabled={processing}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b md:w-1/4"></span>
                        <a href="/register" className="text-xs text-gray-500 uppercase">
                            or sign up
                        </a>
                        <span className="w-1/5 border-b md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
