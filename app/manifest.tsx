import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "ALAMSYAH.ID | Netflix Premium Murah dan Terpercaya",
        short_name: "ALAMSYAH.ID",
        description:
            "ALAMSYAH.ID your trusted Netflix Premium Accounts Seller. high-quality, secured, and exclusively for Netflix enthusiasts.",
        start_url: "/",
        display: "standalone",
        background_color: "#181818",
        theme_color: "#fff",
        // icons: [
        //     {
        //         src: "/icons/AHeaderLight.webp",
        //         sizes: "any",
        //         type: "image/x-icon",
        //     },
        // ],
    }
}
