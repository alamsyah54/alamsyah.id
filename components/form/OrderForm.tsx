"use client"
// Import necessary modules and components
import { useState, useEffect } from "react"
import ProductCheckbox from "@/components/ProductCheckbox"
import QuantityInput from "@/components/QuantityInput"
import { formatPrice } from "@/lib/utils"
import { Products } from "@/constant"
// Define the Product interface

const products = Products
// const products = [
//     {
//         _id: 1,
//         package: "SHARED",
//         durations: [
//             { title: "1 Minggu", price: 7000 },
//             { title: "2 Minggu", price: 13000 },
//             { title: "1 Bulan", price: 25000 },
//             { title: "3 Bulan", price: 70000 },
//         ],
//     },
//     {
//         _id: 2,
//         package: "PRIVATE",
//         durations: [
//             { title: "1 Minggu", price: 28000 },
//             { title: "2 Minggu", price: 55000 },
//             { title: "1 Bulan", price: 109000 },
//             { title: "3 Bulan", price: 320000 },
//         ],
//     },
//     {
//         _id: 3,
//         package: "RESELLER",
//         durations: [
//             { title: "1 Bulan", price: 299000 },
//             { title: "3 Bulan", price: 895000 },
//         ],
//     },
// ]

// Define the OrderForm component
const OrderForm: React.FC = () => {
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
            window.location.href = generatedLink
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
        setDurations((prevDurations) => ({
            ...prevDurations,
            [productId]: duration,
        }))
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
Harga Satuan : Rp ${formatPrice(selectedDurationData?.price || 0)}
Kuantitas : *${quantity}*

Harga : *${quantity} x Rp ${formatPrice(
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

Metode Pembayaran : 
${paymentMethod}
`

            // Encode the message and construct the WhatsApp link
            const encodedMessage = encodeURIComponent(message)
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

            setGeneratedLink(whatsappLink)
        }

        // Display the order details in the console
        console.log("Order Details:", {
            selectedProducts,
            quantities,
            customerName,
            orderNotes,
            paymentMethod,
            totalAmount,
        })

        // Generate WhatsApp link
        generateWhatsAppLink()
    }

    // Function to check if the form is completely filled
    const isFormFilled = () => {
        return (
            customerName.trim() !== "" &&
            orderNotes.trim() !== "" &&
            paymentMethod !== "" &&
            selectedProducts.length > 0
        )
    }

    // Define the PackageDetails component
    const PackageDetails: React.FC<{
        product: {
            _id: number
            package: string
            durations: { title: string; price: number }[]
        }
        selected: boolean
        onSelect: () => void
        durations: { [key: number]: string }
        handleDurationSelection: (productId: number, duration: string) => void
        quantities: { [key: number]: number }
        handleQuantityChange: (id: number, quantityChange: number) => void
    }> = ({
        product,
        selected,
        onSelect,
        durations,
        handleDurationSelection,
        quantities,
        handleQuantityChange,
    }) => {
        return (
            <div
                key={product._id}
                className={`mb-4 ${selected ? "border p-4" : ""}`}
            >
                {/* Product checkbox */}
                <ProductCheckbox
                    id={product._id}
                    name={product.package}
                    onSelect={onSelect}
                />

                {/* Display package details when selected */}
                {selected && (
                    <>
                        {products.map((product) => (
                            <PackageDetails
                                key={product._id}
                                product={product}
                                selected={selectedProducts.includes(
                                    product._id,
                                )}
                                onSelect={() =>
                                    handleProductSelection(product._id)
                                }
                                durations={durations}
                                handleDurationSelection={
                                    handleDurationSelection
                                }
                                quantities={quantities}
                                handleQuantityChange={handleQuantityChange}
                            />
                        ))}
                        <QuantityInput
                            quantity={quantities[product._id] || 1}
                            onIncrease={() =>
                                handleQuantityChange(product._id, 1)
                            }
                            onDecrease={() =>
                                handleQuantityChange(product._id, -1)
                            }
                        />
                    </>
                )}
            </div>
        )
    }
    return (
        <div className='max-w-lg mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>WhatsApp Order Form</h1>

            {/* Render product selection */}
            {products.map((product) => (
                <div key={product._id} className='mb-4'>
                    <ProductCheckbox
                        id={product._id}
                        name={product.package}
                        onSelect={() => handleProductSelection(product._id)}
                    />
                    {selectedProducts.includes(product._id) && (
                        <>
                            {product.durations.map((duration, index) => (
                                <label key={index} className='mr-4'>
                                    <input
                                        type='radio'
                                        name={`duration_${product._id}`}
                                        value={duration.title}
                                        checked={
                                            durations[product._id] ===
                                            duration.title
                                        }
                                        onChange={() =>
                                            handleDurationSelection(
                                                product._id,
                                                duration.title,
                                            )
                                        }
                                        className='w-5 h-5'
                                    />
                                    {duration.title}
                                    {" - "}
                                    Rp {formatPrice(duration.price)}
                                </label>
                            ))}
                            <QuantityInput
                                quantity={quantities[product._id] || 1}
                                onIncrease={() =>
                                    handleQuantityChange(product._id, 1)
                                }
                                onDecrease={() =>
                                    handleQuantityChange(product._id, -1)
                                }
                            />
                        </>
                    )}
                </div>
            ))}

            {/* Render customer information section */}
            <div className='mt-8'>
                <h2 className='text-xl font-bold mb-4'>Informasi Pemesan</h2>
                <input
                    type='text'
                    placeholder='Nama Pemesan'
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <textarea
                    placeholder='Catatan Pesanan'
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className='border p-2 w-full mb-4'
                />

                {/* Render payment method selection as radio buttons */}
                <div className='mb-4'>
                    <label className='mr-4'>
                        <input
                            type='radio'
                            value='085172010009 | DEDE ALDI ALAMSYAH'
                            checked={
                                paymentMethod ===
                                "085172010009 | DEDE ALDI ALAMSYAH"
                            }
                            onChange={(e) =>
                                handlePaymentMethodSelection(e.target.value)
                            }
                        />
                        DANA
                    </label>

                    <label className='mr-4'>
                        <input
                            type='radio'
                            value='901223638253 | DEDE ALDI ALAMSYAH'
                            checked={
                                paymentMethod ===
                                "901223638253 | DEDE ALDI ALAMSYAH"
                            }
                            onChange={(e) =>
                                handlePaymentMethodSelection(e.target.value)
                            }
                        />
                        SEABANK
                    </label>

                    <label className='mr-4'>
                        <input
                            type='radio'
                            value='19517753800 | DEDE ALDI ALAMSYAH'
                            checked={
                                paymentMethod ===
                                "19517753800 | DEDE ALDI ALAMSYAH"
                            }
                            onChange={(e) =>
                                handlePaymentMethodSelection(e.target.value)
                            }
                        />
                        LINE BANK
                    </label>

                    <label>
                        <input
                            type='radio'
                            value='425209412 | Alamsyah54'
                            checked={paymentMethod === "425209412 | Alamsyah54"}
                            onChange={(e) =>
                                handlePaymentMethodSelection(e.target.value)
                            }
                        />
                        BINANCE Pay ID (USDT/BTC Only)
                    </label>
                </div>

                {/* Display the selected payment method */}
                {selectedPaymentMethod && (
                    <p className='mb-4'>
                        Selected Payment Method: {selectedPaymentMethod}
                    </p>
                )}
            </div>

            {/* Render order summary section */}
            <div className='mt-8'>
                <h2 className='text-xl font-bold mb-4'>Ringkasan Pesanan</h2>
                <p>Total yang harus dibayar = Rp {calculateTotal()}</p>
            </div>

            {/* Render the order button */}
            <button
                onClick={handleSubmit}
                className={`bg-blue-500 text-white p-2 mt-8 block ${
                    isFormFilled() ? "" : "opacity-50"
                }`}
                disabled={!isFormFilled()}
            >
                Order
            </button>
        </div>
    )
}

// Export the Home component
export default OrderForm
