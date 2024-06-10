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
        email: "",
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
        <div className="py-16 min-h-screen bg-green-500 place-content-center">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl h-full">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-700  text-center">
                        MadangYuk
                    </h2>
                    <p className="text-l text-gray-600 text-center">Welcome back!</p>
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <label className="flex items-center justify-center border rounded-lg cursor-pointer w-11 ps-0 pe-1 rounded-s-none border-s-0">
                                    <Checkbox
                                        name="showPassword"
                                        checked={isShow}
                                        onChange={(e) =>
                                            setIsShow(e.target.checked)
                                        }
                                        className="hidden"
                                    />
                                    <span className="text-sm text-gray-600 ms-2">
                                        <FontAwesomeIcon
                                            icon={isShow ? faEye : faEyeSlash}
                                        />
                                    </span>
                                </label>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type={!isShow ? "password" : "text"}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
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
                                className="bg-green-yellow-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                disabled={processing}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="/register" className="text-xs text-gray-500 uppercase">
                            or sign up
                        </a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
