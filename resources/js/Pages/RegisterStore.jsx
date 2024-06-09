import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function RegisterStore({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        address: "",
        user_id: auth.user.id,
    });

    useEffect(() => {
        return () => {
            reset("name", "description", "address");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("store.store"));
    };

    return (
        <div className="py-16 min-h-screen">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl h-full">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">
                        MadangYuk!
                    </h2>
                    <p className="text-xl text-gray-600 text-center">Register your store</p>
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Store Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                autoComplete="name"
                                onChange={(e) => setData("name", e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={data.description}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                autoComplete="description"
                                onChange={(e) => setData("description", e.target.value)}
                                required
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                value={data.address}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                autoComplete="address"
                                onChange={(e) => setData("address", e.target.value)}
                                required
                            />
                            <InputError message={errors.address} className="mt-2" />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                disabled={processing}
                            >
                                Register
                            </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link
                                href={route("login")}
                                className="text-xs text-gray-500 uppercase"
                            >
                                Already registered?
                            </Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
