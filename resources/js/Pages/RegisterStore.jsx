import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function RegisterStore({auth}) {

    console.log(auth)

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: '',
        address: '',
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
        <GuestLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Store Register
                </h2>
            }
        >
            <Head title="Register" />
            <div className="flex justify-center">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Store Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full mt-1"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="description" value="Description" />

                            <textarea
                                id="description"
                                name="description"
                                value={data.description}
                                className="block w-full mt-1"
                                autoComplete="description"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="address" value="Address" />

                            <TextInput
                                id="address"
                                name="address"
                                value={data.address}
                                className="block w-full mt-1"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.address}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
