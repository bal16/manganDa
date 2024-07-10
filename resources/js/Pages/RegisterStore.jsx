import { useEffect } from "react";
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
        map_link:"",
        user_id: auth.user.id,
    });

    useEffect(() => {
        return () => {
            reset("name", "description", "address","map_link");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("store.store"),{
            onSuccess: () =>{
                alert('Store registered successfully.');
                window.location.href = route('dashboard');
            },
            onError: ()=>{
                if (errors.user_id) {
                    alert('You have already registered a store.');
                }
            }
        });

    };

    return (
        <div className="min-h-screen py-16 bg-green-500 place-content-center">
            <div className="flex h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
                <div
                    className="hidden bg-center bg-cover lg:block lg:w-1/2"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="flex flex-col justify-center w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-center text-gray-700">
                        manganda
                    </h2>
                    <p className="text-xl text-center text-gray-600">Register your store</p>
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                                Store Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                                autoComplete="name"
                                onChange={(e) => setData("name", e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={data.description}
                                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                                autoComplete="description"
                                onChange={(e) => setData("description", e.target.value)}
                                required
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                value={data.address}
                                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                                autoComplete="address"
                                onChange={(e) => setData("address", e.target.value)}
                                required
                            />
                            <InputError message={errors.address} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
                                Google Maps Link
                            </label>
                            <input
                                id="map_link"
                                name="map_link"
                                value={data.map_link}
                                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                                autoComplete="map_link"
                                onChange={(e) => setData("map_link", e.target.value)}
                                required
                            />
                            <InputError message={errors.map_link} className="mt-2" />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-bold text-white rounded bg-green-yellow-600 hover:bg-gray-600"
                                disabled={processing}
                            >
                                Register
                            </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b md:w-1/4"></span>
                            <Link
                                href={route("home")}
                                className="text-xs text-gray-500 uppercase"
                            >
                                back to home
                            </Link>
                            <span className="w-1/5 border-b md:w-1/4"></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
