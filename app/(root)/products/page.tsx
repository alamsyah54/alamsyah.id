"use client"

import { Roboto } from "next/font/google"
import React, { useState, useEffect } from "react"
import { Products } from "@/constant"
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"
import { ImCheckboxUnchecked } from "react-icons/im" //uncheck
import { ImCheckboxChecked } from "react-icons/im" //check
import { FaMinus } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"
import { PiPaperPlaneTiltFill } from "react-icons/pi"
import { GoAlert } from "react-icons/go"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const products = Products

const roboto = Roboto({
    weight: ["900"],
    style: ["normal"],
    subsets: ["latin"],
})
const Page = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    //////////////////////

    // State hooks for managing form data
    const [selectedProducts, setSelectedProducts] = useState<number[]>([])
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({})
    const [customerName, setCustomerName] = useState("")
    const [orderNotes, setOrderNotes] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")
    const [durations, setDurations] = useState<{ [key: number]: string }>({})
    // State hook for storing the selected payment method
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

    // Function to handle payment method selection
    const handlePaymentMethodSelection = (value: string) => {
        setPaymentMethod(value)
        setSelectedPaymentMethod(value)
    }
    // State hooks for managing WhatsApp message and link
    const [generatedLink, setGeneratedLink] = useState<string | null>(null)

    // Effect hook to handle redirection when the generatedLink is set
    useEffect(() => {
        if (generatedLink) {
            window.open(generatedLink, "_blank")
        }
    }, [generatedLink])

    // Handler for product selection
    const handleProductSelection = (id: number) => {
        setSelectedProducts((prevSelected) => {
            if (prevSelected.includes(id)) {
                // Remove the product if already selected
                const updatedSelected = prevSelected.filter(
                    (productId) => productId !== id,
                )
                setQuantities((prevQuantities) => {
                    const { [id]: _, ...updatedQuantities } = prevQuantities
                    return updatedQuantities
                })
                setDurations((prevDurations) => {
                    const { [id]: _, ...updatedDurations } = prevDurations
                    return updatedDurations
                })
                return updatedSelected
            } else {
                // Add the product if not selected
                return [...prevSelected, id]
            }
        })
    }

    // Handler for duration selection
    const handleDurationSelection = (productId: number, duration: string) => {
        setDurations((prevDurations) => {
            const updatedDurations = { ...prevDurations }

            // Toggle the selection status of the duration
            if (updatedDurations[productId] === duration) {
                // Unselect the duration if it's already selected
                delete updatedDurations[productId]
            } else {
                // Select the duration if it's not selected
                updatedDurations[productId] = duration
            }

            return updatedDurations
        })

        // Preserve the existing selected products
        setSelectedProducts((prevSelected) => {
            if (!prevSelected.includes(productId)) {
                // Add the product if not selected
                return [...prevSelected, productId]
            }
            return prevSelected
        })
    }

    // Handler for quantity change
    const handleQuantityChange = (id: number, quantityChange: number) => {
        setQuantities((prevQuantities) => {
            const updatedQuantity = (prevQuantities[id] || 1) + quantityChange
            return {
                ...prevQuantities,
                [id]: Math.max(0, updatedQuantity), // Ensure quantity doesn't go below zero
            }
        })
    }

    // Function to calculate the total amount of the order
    const calculateTotal = () => {
        return formatPrice(
            selectedProducts.reduce((total, productId) => {
                const quantity = quantities[productId] || 1
                const product = products.find((p) => p._id === productId)
                if (product) {
                    const selectedDuration = durations[productId]
                    const selectedDurationData = product.durations.find(
                        (d) => d.title === selectedDuration,
                    )
                    if (selectedDurationData) {
                        return total + quantity * selectedDurationData.price
                    }
                }
                return total
            }, 0),
        )
    }

    // Handler for form submission
    const handleSubmit = () => {
        // Calculate total amount
        const totalAmount = calculateTotal()

        // Function to generate WhatsApp link and message
        const generateWhatsAppLink = () => {
            const phoneNumber = "6285172010009"

            const orderSummaryMessage = selectedProducts.map(
                (productId, index) => {
                    const product = products.find((p) => p._id === productId)
                    if (product) {
                        const quantity = quantities[productId] || 1
                        const selectedDuration = durations[productId]
                        const selectedDurationData = product.durations.find(
                            (d) => d.title === selectedDuration,
                        )
                        const harga =
                            quantity * (selectedDurationData?.price || 0)

                        return `
${index + 1}. *${product.package}*
Durasi : *${selectedDuration || ""}*
Harga : Rp ${formatPrice(selectedDurationData?.price || 0)}
Kuantitas : *${quantity}*

Total Harga : *${quantity}* x Rp ${formatPrice(
                            selectedDurationData?.price || 0,
                        )} = *Rp ${formatPrice(harga)}*
`
                    }
                    return ""
                },
            )

            const totalItems = selectedProducts.length
            const totalHargaPesanan = calculateTotal()

            const message = `
Halo bang, saya mau pesan :

${orderSummaryMessage.join("\n")}
_____________________________________________________

Total yang harus dibayar (*${totalItems}* Pesanan) = *Rp ${totalHargaPesanan}*
_____________________________________________________

Informasi Pemesan :

Nama : *${customerName}*
Catatan Pesanan :
*${orderNotes}*

*Metode Pembayaran* : 
${
    (paymentMethod === "085172010009 | Dede Aldi Alamsyah" &&
        "(Transfer DANA) 085172010009 | Dede Aldi Alamsyah") ||
    (paymentMethod === "901223638253 | Dede Aldi Alamsyah" &&
        "(Transfer SeaBank) 901223638253 | Dede Aldi Alamsyah") ||
    (paymentMethod === "19517753800 | Dede Aldi Alamsyah" &&
        "(Transfer Line Bank) 19517753800 | Dede Aldi Alamsyah") ||
    (paymentMethod === "QRIS" && "Scan QRIS")
}


*DIBACA!*
setelah berhasil transfer *WAJIB* kirim bukti transfer ke group : https://chat.whatsapp.com/Fo93LGwQxZjHvOf38msWTD
otomatis admin akan mengirimkan NETFLIX yang di beli ke nomor whatsapp yang mengirimkan bukti transfer

*[TRANSAKSI TIDAK AKAN DI PROSES JIKA TIDAK MENGIRIMKAN BUKTI TRANSFER DI GROUP]*

_TERIMAKASIH Telah Mempercayai ALAMSYAH.ID <3_

ordered from https://store-alamsyah.id
`

            // Encode the message and construct the WhatsApp link
            const encodedMessage = encodeURIComponent(message)
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

            setGeneratedLink(whatsappLink)
        }

        // Display the order details in the console
        // console.log("Order Details:", {
        //     selectedProducts,
        //     quantities,
        //     customerName,
        //     orderNotes,
        //     paymentMethod,
        //     totalAmount,
        // })

        // Generate WhatsApp link
        generateWhatsAppLink()
    }

    // Function to check if the form is completely filled
    const isFormFilled = () => {
        return (
            customerName.trim() !== "" &&
            paymentMethod !== "" &&
            selectedProducts.length > 0
        )
    }

    return (
        <main className='w-full justify-center items-center flex flex-col px-5'>
            <div className='w-full justify-center md:w-[650px] lg:w-[85%] lg:flex-row lg:items-start items-center lg:px-10 lg:gap-14 flex flex-col'>
                <div className='flex flex-col items-center w-full h-full'>
                    <div className='w-full h-full overflow-x-auto flex mb-5'>
                        {Products[currentIndex].picture.map((pic, i) => (
                            <Image
                                key={i}
                                src={pic}
                                alt='Package Pictures'
                                width={700}
                                height={700}
                                className='w-full h-full'
                            />
                        ))}
                    </div>
                    <div className='lg:flex justify-center w-full hidden'>
                        {Products.map((product, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`px-1 rounded-md m-1 cursor-pointer duration-700 border-2 border-white dark:border-dark-600 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%
                                ${
                                    Products[currentIndex].package ==
                                        product.package && "shadow-md"
                                }
                                ${
                                    product.package === "SHARED" &&
                                    " shadow-fuchsia-500"
                                }
                                ${
                                    product.package === "PRIVATE" &&
                                    " shadow-purple-500"
                                }
                                ${
                                    product.package === "RESELLER" &&
                                    " shadow-cyan-500"
                                }
                                `}
                            >
                                <h2 className={`p-1 ${roboto.className}`}>
                                    {product.package}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    key={Products[currentIndex]._id}
                    className='flex flex-col w-full items-center '
                >
                    <div className='flex flex-col items-center justify-between h-full w-full'>
                        <div className='flex justify-between items-start pt-5 lg:pt-20 w-full border-t-[1px] lg:border-none dark:border-white/30 border-black/30'>
                            <h1
                                className={`text-3xl py-3 duration-700 w-full text-left text-transparent bg-gradient-to-r dark:from-white from-black bg-clip-text ${roboto.className}`}
                            >
                                {Products[currentIndex].package}
                            </h1>
                            <div className='flex flex-col items-end  w-full'>
                                <div className='flex flex-col items-end py-3 '>
                                    <div className=' flex'>
                                        <span className='flex justify-start w-full gap-1'>
                                            <p className='flex items-start text-sm md:text-md font-bold'>
                                                IDR
                                            </p>
                                            <h2
                                                className={`flex items-center text-2xl ${roboto.className}`}
                                            >
                                                {formatPrice(
                                                    Products[currentIndex]
                                                        .durations[0].price,
                                                )}
                                            </h2>
                                        </span>
                                        {Products[currentIndex].package !==
                                            "RESELLER" && (
                                            <>
                                                <p
                                                    className={`flex items-center text-sm px-3 ${roboto.className}`}
                                                >
                                                    ~
                                                </p>
                                                <span className='flex justify-start w-full gap-1'>
                                                    <p className='flex items-start text-sm md:text-md font-bold'>
                                                        IDR
                                                    </p>
                                                    <h2
                                                        className={`flex items-center text-2xl ${roboto.className}`}
                                                    >
                                                        {formatPrice(
                                                            Products[
                                                                currentIndex
                                                            ]?.durations?.at(-1)
                                                                ?.price ?? 0,
                                                        )}
                                                    </h2>
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <Dialog>
                                    <DialogTrigger
                                        asChild
                                        className='duration-700'
                                    >
                                        <div className='relative group w-fit h-fit duration-700 group mb-10 cursor-pointer'>
                                            <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-5 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                                            <div
                                                className={`relative duration-500 text-lg border-white rounded-lg flex items-center justify-center py-2 px-6 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-600 w-fit hover:bg-dark-700 dark:hover:bg-gray-300 active:bg-black dark:active:bg-gray-400 ${roboto.className}`}
                                            >
                                                List Harga
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className='p-5 h-[90%] my-auto !rounded-2xl min-w-[90%] md:min-w-[800px] dark:bg-dark-700 bg-gray-100 border-white dark:border-dark-400 shadow-black/30'>
                                        <DialogHeader>
                                            <DialogTitle className='font-black text-xl'>
                                                Order Informasi
                                            </DialogTitle>
                                            <DialogDescription className='opacity-80'>
                                                Isi Informasi pesanan dengan
                                                benar. proses pemesanan akan
                                                dialihkan ke whatsapp, harap
                                                transfer sesuai nominal pesanan
                                                sebelum klik &quot;Proses
                                                Pesanan&quot;
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className='w-full overflow-y-auto overflow-scroll max-h-screen _custom-scrollbar'>
                                            <div className='flex flex-col gap-3 justify-between w-full h-fit'>
                                                {/* Render product selection */}
                                                {products.map((product) => (
                                                    <div
                                                        key={product._id}
                                                        className='flex flex-col w-fit gap-5'
                                                    >
                                                        {/* Product checkbox */}
                                                        <label className='flex w-fit items-center'>
                                                            <input
                                                                type='checkbox'
                                                                onChange={() =>
                                                                    handleProductSelection(
                                                                        product._id,
                                                                    )
                                                                }
                                                                className='hidden'
                                                                checked={selectedProducts.includes(
                                                                    product._id,
                                                                )}
                                                            />
                                                            <span
                                                                className={`flex gap-3 items-center duration-700 px-3 w-fit justify-center py-1 rounded-md m-1 cursor-pointer border-[1px] border-white/10 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90% ${
                                                                    selectedProducts.includes(
                                                                        product._id,
                                                                    )
                                                                        ? "shadow-lg"
                                                                        : ""
                                                                } ${
                                                                    roboto.className
                                                                } 
                                            ${
                                                product.package === "SHARED" &&
                                                selectedProducts.includes(
                                                    product._id,
                                                ) &&
                                                "!border-fuchsia-500 shadow-fuchsia-500/50"
                                            }
                                            ${
                                                product.package === "PRIVATE" &&
                                                selectedProducts.includes(
                                                    product._id,
                                                ) &&
                                                "!border-purple-500 shadow-purple-500/50"
                                            }
                                            ${
                                                product.package ===
                                                    "RESELLER" &&
                                                selectedProducts.includes(
                                                    product._id,
                                                ) &&
                                                "!border-cyan-500 shadow-cyan-500/50"
                                            }
                                            `}
                                                            >
                                                                <ImCheckboxUnchecked
                                                                    className={`text-xl  ${
                                                                        selectedProducts.includes(
                                                                            product._id,
                                                                        )
                                                                            ? "hidden"
                                                                            : " block"
                                                                    } ${
                                                                        roboto.className
                                                                    }
                                                ${
                                                    product.package ===
                                                        "SHARED" &&
                                                    "text-fuchsia-500"
                                                }
                                                ${
                                                    product.package ===
                                                        "PRIVATE" &&
                                                    "text-purple-500"
                                                }
                                                ${
                                                    product.package ===
                                                        "RESELLER" &&
                                                    "text-cyan-500"
                                                }
                                                `}
                                                                />
                                                                <ImCheckboxChecked
                                                                    className={`text-xl  ${
                                                                        selectedProducts.includes(
                                                                            product._id,
                                                                        )
                                                                            ? "block"
                                                                            : "hidden"
                                                                    } ${
                                                                        roboto.className
                                                                    }
                                                ${
                                                    product.package ===
                                                        "SHARED" &&
                                                    "text-fuchsia-500"
                                                }
                                                ${
                                                    product.package ===
                                                        "PRIVATE" &&
                                                    "text-purple-500"
                                                }
                                                ${
                                                    product.package ===
                                                        "RESELLER" &&
                                                    "text-cyan-500"
                                                }
                                                `}
                                                                />
                                                                {
                                                                    product.package
                                                                }
                                                            </span>
                                                            <p className='text-[12px] ml-5 opacity-70 capitalize font-extralight'>
                                                                {
                                                                    product.whatYouGet
                                                                }
                                                            </p>
                                                        </label>
                                                        {/* Display durations and quantity input when selected */}
                                                        <div className='flex flex-col h-full gap-5 pl-5'>
                                                            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 '>
                                                                {product.durations.map(
                                                                    (
                                                                        duration,
                                                                        i,
                                                                    ) => (
                                                                        <label
                                                                            key={
                                                                                i
                                                                            }
                                                                            className={`flex duration-700 ${
                                                                                selectedProducts.includes(
                                                                                    product._id,
                                                                                ) &&
                                                                                " "
                                                                            }`}
                                                                        >
                                                                            <input
                                                                                type='radio'
                                                                                name={`duration_${product._id}`}
                                                                                value={
                                                                                    duration.title
                                                                                }
                                                                                checked={
                                                                                    durations[
                                                                                        product
                                                                                            ._id
                                                                                    ] ===
                                                                                    duration.title
                                                                                }
                                                                                onChange={() =>
                                                                                    handleDurationSelection(
                                                                                        product._id,
                                                                                        duration.title,
                                                                                    )
                                                                                }
                                                                                className='hidden'
                                                                            />
                                                                            <div className='flex gap-2 w-full'>
                                                                                <ImCheckboxUnchecked
                                                                                    className={`flex text-xl items-start duration-700 cursor-pointer ${
                                                                                        durations[
                                                                                            product
                                                                                                ._id
                                                                                        ] ===
                                                                                        duration.title
                                                                                            ? "hidden"
                                                                                            : " block"
                                                                                    }`}
                                                                                />
                                                                                <ImCheckboxChecked
                                                                                    className={`flex text-xl items-start duration-700 cursor-pointer ${
                                                                                        durations[
                                                                                            product
                                                                                                ._id
                                                                                        ] ===
                                                                                        duration.title
                                                                                            ? "block"
                                                                                            : "hidden"
                                                                                    }
                                                                ${
                                                                    product.package ===
                                                                        "SHARED" &&
                                                                    "text-fuchsia-500"
                                                                }
                                                                ${
                                                                    product.package ===
                                                                        "PRIVATE" &&
                                                                    "text-purple-500"
                                                                }
                                                                ${
                                                                    product.package ===
                                                                        "RESELLER" &&
                                                                    "text-cyan-500"
                                                                }
                                                                `}
                                                                                />
                                                                                <div
                                                                                    className={` 
                                                                ${
                                                                    product.package ===
                                                                        "SHARED" &&
                                                                    durations[
                                                                        product
                                                                            ._id
                                                                    ] ===
                                                                        duration.title &&
                                                                    "!border-fuchsia-500 shadow-lg shadow-fuchsia-500/70"
                                                                }
                                                                ${
                                                                    product.package ===
                                                                        "PRIVATE" &&
                                                                    durations[
                                                                        product
                                                                            ._id
                                                                    ] ===
                                                                        duration.title &&
                                                                    "!border-purple-500 shadow-lg shadow-purple-500/70"
                                                                }
                                                                ${
                                                                    product.package ===
                                                                        "RESELLER" &&
                                                                    durations[
                                                                        product
                                                                            ._id
                                                                    ] ===
                                                                        duration.title &&
                                                                    "!border-cyan-500 shadow-lg shadow-cyan-500/70"
                                                                } duration-700 flex flex-col w-full px-2 py-1 shadow-md rounded-md m-1 cursor-pointer !border-[1px] border-white/10 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%`}
                                                                                >
                                                                                    <h2 className='font-black pb-1 mb-1 border-b-[1px] border-gray-800/50 dark:border-white/50'>
                                                                                        {
                                                                                            duration.title
                                                                                        }
                                                                                    </h2>
                                                                                    <span className='flex justify-start h-full gap-1'>
                                                                                        <p className='flex items-start text-xs font-bold'>
                                                                                            IDR
                                                                                        </p>
                                                                                        <h2
                                                                                            className={`flex items-center text-xl ${roboto.className}`}
                                                                                        >
                                                                                            {formatPrice(
                                                                                                duration.price,
                                                                                            )}
                                                                                        </h2>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    ),
                                                                )}
                                                            </div>
                                                            <div
                                                                className={`flex items-center mt-2 mb-4 opacity-0 ${
                                                                    durations[
                                                                        product
                                                                            ._id
                                                                    ] &&
                                                                    "!opacity-100"
                                                                }`}
                                                            >
                                                                <button
                                                                    onClick={() =>
                                                                        handleQuantityChange(
                                                                            product._id,
                                                                            -1,
                                                                        )
                                                                    }
                                                                    className={`hidden ${
                                                                        durations[
                                                                            product
                                                                                ._id
                                                                        ] &&
                                                                        "!flex dark:bg-dark-500 bg-gray-200 text-dark-800 dark:text-gray-300 duration-200 p-2 rounded-md active:dark:bg-dark-800 active:bg-gray-400"
                                                                    }`}
                                                                >
                                                                    <FaMinus />
                                                                </button>
                                                                <span className='mx-4 cursor-default'>
                                                                    {quantities[
                                                                        product
                                                                            ._id
                                                                    ] || 1}
                                                                </span>
                                                                <button
                                                                    onClick={() =>
                                                                        handleQuantityChange(
                                                                            product._id,
                                                                            1,
                                                                        )
                                                                    }
                                                                    className={`hidden ${
                                                                        durations[
                                                                            product
                                                                                ._id
                                                                        ] &&
                                                                        "!flex dark:bg-dark-500 bg-gray-200 text-dark-800 dark:text-gray-300 duration-200 p-2 rounded-md active:dark:bg-dark-800 active:bg-gray-400"
                                                                    }`}
                                                                >
                                                                    <FaPlus />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='flex flex-col justify-start w-full px-3'>
                                                {/* Render customer information section */}
                                                <h2 className='text-xl font-bold mb-4'>
                                                    Informasi Pemesan
                                                </h2>
                                                <input
                                                    type='text'
                                                    placeholder='Nama Pemesan'
                                                    value={customerName}
                                                    onChange={(e) =>
                                                        setCustomerName(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className='border p-3 border-white/30 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 w-[80%] mb-4 dark:bg-dark-600 bg-white rounded-lg drop-shadow-md'
                                                />
                                                <textarea
                                                    placeholder='Catatan Pesanan (Optional)'
                                                    value={orderNotes}
                                                    onChange={(e) =>
                                                        setOrderNotes(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className='border p-3 border-white/30 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 w-[80%] mb-4 dark:bg-dark-600 bg-white rounded-lg drop-shadow-md'
                                                />

                                                <h2 className='text-xl font-bold mt-4'>
                                                    Pilih Metode Pembayaran
                                                </h2>
                                                {/* Render payment method selection as radio buttons */}
                                                <div className='gap-3 my-5 flex flex-col justify-start items-start'>
                                                    <label
                                                        className={`flex gap-3 items-center duration-700 px-3 w-fit justify-center py-1 rounded-md m-1 cursor-pointer border-[1px] border-white/10 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%  ${
                                                            paymentMethod ===
                                                            "085172010009 | Dede Aldi Alamsyah"
                                                                ? "shadow-lg shadow-blue-500/70"
                                                                : ""
                                                        }`}
                                                    >
                                                        <input
                                                            type='radio'
                                                            value='085172010009 | Dede Aldi Alamsyah'
                                                            checked={
                                                                paymentMethod ===
                                                                "085172010009 | Dede Aldi Alamsyah"
                                                            }
                                                            onChange={(e) =>
                                                                handlePaymentMethodSelection(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className='hidden'
                                                        />
                                                        <ImCheckboxUnchecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "085172010009 | Dede Aldi Alamsyah"
                                                                    ? "hidden"
                                                                    : "block"
                                                            }`}
                                                        />
                                                        <ImCheckboxChecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "085172010009 | Dede Aldi Alamsyah"
                                                                    ? "block"
                                                                    : "hidden"
                                                            }`}
                                                        />
                                                        Dana
                                                    </label>

                                                    <label
                                                        className={`flex gap-3 items-center duration-700 px-3 w-fit justify-center py-1 rounded-md m-1 cursor-pointer border-[1px] border-white/10 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%  ${
                                                            paymentMethod ===
                                                            "901223638253 | Dede Aldi Alamsyah"
                                                                ? "shadow-lg shadow-orange-500/70"
                                                                : ""
                                                        }`}
                                                    >
                                                        <input
                                                            type='radio'
                                                            value='901223638253 | Dede Aldi Alamsyah'
                                                            checked={
                                                                paymentMethod ===
                                                                "901223638253 | Dede Aldi Alamsyah"
                                                            }
                                                            onChange={(e) =>
                                                                handlePaymentMethodSelection(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className='hidden'
                                                        />
                                                        <ImCheckboxUnchecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "901223638253 | Dede Aldi Alamsyah"
                                                                    ? "hidden"
                                                                    : "block"
                                                            }`}
                                                        />
                                                        <ImCheckboxChecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "901223638253 | Dede Aldi Alamsyah"
                                                                    ? "block"
                                                                    : "hidden"
                                                            }`}
                                                        />
                                                        SeaBank
                                                    </label>

                                                    <label
                                                        className={`flex gap-3 items-center duration-700 px-3 w-fit justify-center py-1 rounded-md m-1 cursor-pointer border-[1px] border-white/10 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%  ${
                                                            paymentMethod ===
                                                            "19517753800 | Dede Aldi Alamsyah"
                                                                ? "shadow-lg shadow-emerald-500/70"
                                                                : ""
                                                        }`}
                                                    >
                                                        <input
                                                            type='radio'
                                                            value='19517753800 | Dede Aldi Alamsyah'
                                                            checked={
                                                                paymentMethod ===
                                                                "19517753800 | Dede Aldi Alamsyah"
                                                            }
                                                            onChange={(e) =>
                                                                handlePaymentMethodSelection(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className='hidden'
                                                        />
                                                        <ImCheckboxUnchecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "19517753800 | Dede Aldi Alamsyah"
                                                                    ? "hidden"
                                                                    : "block"
                                                            }`}
                                                        />
                                                        <ImCheckboxChecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "19517753800 | Dede Aldi Alamsyah"
                                                                    ? "block"
                                                                    : "hidden"
                                                            }`}
                                                        />
                                                        Line Bank
                                                    </label>

                                                    <label
                                                        className={`flex gap-3 items-center duration-700 px-3 w-fit justify-center py-1 rounded-md m-1 cursor-pointer border-[1px] border-white/10 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%  ${
                                                            paymentMethod ===
                                                            "QRIS"
                                                                ? "shadow-lg dark:shadow-white/70 shadow-black/50"
                                                                : ""
                                                        }`}
                                                    >
                                                        <input
                                                            type='radio'
                                                            value='QRIS'
                                                            checked={
                                                                paymentMethod ===
                                                                "QRIS"
                                                            }
                                                            onChange={(e) =>
                                                                handlePaymentMethodSelection(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className='hidden'
                                                        />
                                                        <ImCheckboxUnchecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "QRIS"
                                                                    ? "hidden"
                                                                    : "block"
                                                            }`}
                                                        />
                                                        <ImCheckboxChecked
                                                            className={`${
                                                                paymentMethod ===
                                                                "QRIS"
                                                                    ? "block"
                                                                    : "hidden"
                                                            }`}
                                                        />
                                                        QRIS
                                                    </label>
                                                </div>

                                                {/* Display the selected payment method */}
                                                {selectedPaymentMethod && (
                                                    <span className='mb-4 flex flex-col gap-1'>
                                                        <h2>
                                                            Metode Pembayaran :{" "}
                                                            <span className='font-extrabold'>
                                                                {paymentMethod ===
                                                                    "085172010009 | Dede Aldi Alamsyah" &&
                                                                    "Transfer DANA"}
                                                                {paymentMethod ===
                                                                    "901223638253 | Dede Aldi Alamsyah" &&
                                                                    "Transfer Seabank"}
                                                                {paymentMethod ===
                                                                    "19517753800 | Dede Aldi Alamsyah" &&
                                                                    "Transfer Line Bank"}
                                                                {paymentMethod ===
                                                                    "QRIS" &&
                                                                    "Scan QRIS"}
                                                            </span>
                                                        </h2>
                                                        {selectedPaymentMethod ===
                                                        "QRIS"
                                                            ? ""
                                                            : selectedPaymentMethod}
                                                        {paymentMethod ===
                                                            "QRIS" && (
                                                            <Image
                                                                src='/images/QRIS.png'
                                                                alt='QRIS'
                                                                width={500}
                                                                height={500}
                                                                className='rounded-md drop-shadow-lg'
                                                            />
                                                        )}
                                                    </span>
                                                )}

                                                {/* Render order summary section */}
                                                <div>
                                                    <div className='flex gap-5'>
                                                        <h2 className='text-xl font-bold mb-4'>
                                                            Total Yang Harus
                                                            Dibayar
                                                        </h2>
                                                        <span className='flex justify-start h-full gap-1'>
                                                            <p className='flex items-start text-xs font-bold'>
                                                                IDR
                                                            </p>
                                                            <h2
                                                                className={`flex items-center text-xl ${roboto.className}`}
                                                            >
                                                                {calculateTotal()}
                                                            </h2>
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Render the order button */}
                                                <button
                                                    onClick={handleSubmit}
                                                    className={`relative group mx-auto h-fit duration-700 group my-8 w-fit ${
                                                        isFormFilled()
                                                            ? ""
                                                            : "opacity-50"
                                                    }`}
                                                    disabled={!isFormFilled()}
                                                >
                                                    <div className='absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur-lg py-4 px-6 transition group-hover:opacity-100 group-hover:blur-lg '></div>
                                                    <div
                                                        className={`relative duration-500 gap-3 md:text-lg lg:text-2xl border-white rounded-lg flex items-center justify-center py-2 px-8 text-gray-200 dark:text-dark-700 dark:bg-gray-100 bg-dark-700 ${roboto.className}`}
                                                    >
                                                        Proses Pesanan
                                                        <PiPaperPlaneTiltFill />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <div className='text-xs capitalize'>
                                                Wajib Mengirimkan Bukti Transfer
                                            </div>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className='flex justify-center w-full lg:hidden'>
                            {Products.map((product, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`px-1 duration-700 rounded-md m-1 cursor-pointer border-2 border-white dark:border-dark-600 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-500 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-700 to-90%
                                ${
                                    Products[currentIndex].package ==
                                        product.package && "shadow-md"
                                }
                                ${
                                    product.package === "SHARED" &&
                                    " shadow-fuchsia-500"
                                }
                                ${
                                    product.package === "PRIVATE" &&
                                    " shadow-purple-500"
                                }
                                ${
                                    product.package === "RESELLER" &&
                                    " shadow-cyan-500"
                                }
                                `}
                                >
                                    <h2 className={`p-1 ${roboto.className}`}>
                                        {product.package}
                                    </h2>
                                </div>
                            ))}
                        </div>
                        <p className='py-5 '>
                            {Products[currentIndex].description}
                        </p>
                        <div className='flex flex-col justify-start w-full items-start pt-5'>
                            {Products[currentIndex].features.map(
                                (feature, i) => (
                                    <div
                                        key={i}
                                        className='flex gap-2 py-2 justify-start items-start w-full capitalize'
                                    >
                                        <FaCheckCircle
                                            className={`  
                                        ${
                                            Products[currentIndex].package ==
                                                "SHARED" && "text-fuchsia-500"
                                        }
                                        ${
                                            Products[currentIndex].package ==
                                                "PRIVATE" && "text-purple-500"
                                        }
                                        ${
                                            Products[currentIndex].package ==
                                                "RESELLER" && "text-cyan-500"
                                        }
                                        `}
                                        />
                                        <p className='w-full'>{feature}</p>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                    <div className='my-10 p-5 rounded-2xl bg-red-500/20 border border-red-500'>
                        <div className='w-full flex justify-center border-b border-red-500 mb-3 pb-3'>
                            <GoAlert className='text-4xl text-red-600' />
                        </div>
                        <p className='text-center lg:text-start text-red-500 font-extrabold capitalize'>
                            {Products[currentIndex].rules}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page
