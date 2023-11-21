import ProductsCarousel from "@/components/shared/ProductsCarousel"
import React from "react"

const page = () => {
    return (
        <section className='flex flex-col lg:p-20 pb-10 h-fit'>
            {/* <div className='lg:bg-red-500 md:bg-orange-500 sm:bg-yellow-500 bg-green-500 w-full h-2' /> */}
            <ProductsCarousel />
        </section>
    )
}

export default page
