// Meta.tsx
import { FC } from "react"
import { NextSeo, DefaultSeoProps } from "next-seo"

interface MetaProps {
    title?: string
    description?: string
    url?: string
    image?: string
}

const Meta: FC<MetaProps> = ({ title, description, url, image }) => {
    const defaultSEO: DefaultSeoProps = {
        title: "ALAMSYAH.ID | Netflix Premium Terpercaya", // Set your default title here
        description:
            "Your trusted destination for premium Netflix accounts. Elevate your streaming experience with our high-quality, affordable Netflix solutions. We specialize in providing a seamless and secure platform for your entertainment needs. Choose ALAMSYAH.ID for premium quality at an affordable price, exclusively tailored for Netflix enthusiasts.", // Set your default description here
        openGraph: {
            type: "website",
            locale: "en_US",
            url: url || "https://store-alamsyah.id", // Set your default URL here
            title: title || "ALAMSYAH.ID | Netflix Premium Terpercaya",
            description:
                description ||
                "Your trusted destination for premium Netflix accounts. Elevate your streaming experience with our high-quality, affordable Netflix solutions. We specialize in providing a seamless and secure platform for your entertainment needs. Choose ALAMSYAH.ID for premium quality at an affordable price, exclusively tailored for Netflix enthusiasts.",
            images: [
                {
                    url: image || "/icons/AHeaderLight.webp", // Set your default image URL here
                    alt: "ALAMSYAH.ID",
                },
            ],
        },
    }

    return (
        <NextSeo
            title={title || undefined}
            description={description || undefined}
            canonical={url || undefined}
            openGraph={url ? undefined : defaultSEO.openGraph}
        />
    )
}

export default Meta
