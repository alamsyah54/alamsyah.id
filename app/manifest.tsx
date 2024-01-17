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
        //         src: "/favicon.ico",
        //         sizes: "64x64 32x32 24x24 16x16",
        //         type: "image/x-icon",
        //     },
        //     {
        //         src: "/logo192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //     },
        //     {
        //         src: "/logo512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //     },
        // ],
    }
}
