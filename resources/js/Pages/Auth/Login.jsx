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
        <GuestLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Login
                </h2>
            }
        >
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="flex justify-center">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={submit}>
                        <div>
                            <InputError
                                message={errors.email}
                                className="mb-4 "
                            />
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex">
                            <div className="mt-4 flex-initial w-full">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type={!isShow ? "password" : "text"}
                                    name="password"
                                    value={data.password}
                                    className="block w-full mt-1  rounded-e-none"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                {/* <InputError
                                message={errors.password}
                                className="mt-2"
                            /> */}
                            </div>
                            <label className="flex mt-10 w-11 ps-0 pe-1  items-center justify-center border rounded-lg rounded-s-none border-s-0 cursor-pointer">
                                <Checkbox
                                    name="showPassword"
                                    checked={isShow}
                                    onChange={(e) =>
                                        setIsShow(e.target.checked)
                                    }
                                    className="hidden"
                                />
                                <span className="text-sm text-gray-600  ms-2">
                                    <FontAwesomeIcon
                                        icon={isShow ? faEye : faEyeSlash}
                                    />
                                </span>
                            </label>
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

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
