import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";
import Select from "react-select";

export default function Dashboard({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        product_type_id: "",
        product_condition_id: "",
        description: "",
        defect: "",
        amount: "",
        picture: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("product.submit"));
    };

    const props = usePage().props;
    const product_type = props.type;
    const product_condition = props.condition;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Form Product
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Product Form</div>
                    </div>

                    <div className="mx-10 mt-5">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel
                                    htmlFor="product_type_id"
                                    value="Tipe Produk"
                                />

                                <select
                                    id="product_type_id"
                                    name="product_type_id"
                                    value={data.product_type_id}
                                    className="mt-1 block w-full"
                                    autoComplete="product_type_id"
                                    // isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "product_type_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Pilih Tipe Produk</option>
                                    {product_type.map((type) => (
                                        <option key={type.id} value={type.id}>
                                            {type.type}
                                        </option>
                                    ))}
                                </select>

                                <InputError
                                    message={errors.product_type_id}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="product_condition_id"
                                    value="Kondisi Produk"
                                />

                                <select
                                    id="product_condition_id"
                                    name="product_condition_id"
                                    value={data.product_condition_id}
                                    className="mt-1 block w-full"
                                    autoComplete="product_condition_id"
                                    // isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "product_condition_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Pilih Tipe Produk</option>
                                    {product_condition.map((condition) => (
                                        <option
                                            key={condition.id}
                                            value={condition.id}
                                        >
                                            {condition.condition}
                                        </option>
                                    ))}
                                </select>

                                <InputError
                                    message={errors.product_condition_id}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="description"
                                    value="Deskripsi Produk"
                                />

                                <TextInput
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    isFocused={true}
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

                            <div>
                                <InputLabel
                                    htmlFor="defect"
                                    value="Kelemahan Produk"
                                />

                                <TextInput
                                    id="defect"
                                    name="defect"
                                    value={data.defect}
                                    className="mt-1 block w-full"
                                    autoComplete="defect"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("defect", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.defect}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="amount"
                                    value="Jumlah Produk"
                                />

                                <TextInput
                                    id="amount"
                                    name="amount"
                                    value={data.amount}
                                    className="mt-1 block w-full"
                                    autoComplete="amount"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.amount}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="picture"
                                    value="Foto Produk"
                                />

                                <TextInput
                                    id="picture"
                                    name="picture"
                                    value={data.picture}
                                    className="mt-1 block w-full"
                                    autoComplete="picture"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("picture", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.picture}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Submit
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
