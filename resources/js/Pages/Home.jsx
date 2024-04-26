import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";

const isAuth = (auth, children) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            {children}
        </AuthenticatedLayout>
    );
};

const isGuest = (children) => {
    return (
        <GuestLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Home
                </h2>
            }
        >
            {children}
        </GuestLayout>
    );
};
export default function Home({ auth }) {
    const children = (
        <>
            <Head title="Home" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Hello World!</div>
                    </div>
                </div>
            </div>
        </>
    );
    return auth.user ? isAuth(auth, children) : isGuest(children);
}
