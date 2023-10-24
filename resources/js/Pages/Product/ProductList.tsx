import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import DangerButton from "@/Components/DangerButton";
import { FormEventHandler } from "react";

export default function Dashboard({ auth }: PageProps) {
    const flash = usePage().props.flash;

    const props = usePage().props;
    const products = props.product;

    const { delete: destroy, processing } = useForm({});

    const deleteProduct: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("product.destroy"), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div className="px-10">
                {flash.message && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline">{flash.message}</span>
                    </div>
                )}
            </div>

            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Product List</div>
                    </div>
                </div>
                <div className="m-16">
                    {products.map((product) => (
                        <div className="pt-8 text-gray-900">
                            <div>Deskripsi Produk : {product.description}</div>
                            <div>Kelemahan Produk : {product.description}</div>
                            <div>Jumlah Produk : {product.description}</div>
                            <Link
                                href={route("product.destroy", product.id)}
                                className="text-sm text-gray-700 underline"
                            >
                                Delete Product
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
