import { NextApiRequest, NextApiResponse } from "next"
import fetch from "node-fetch"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        const { itemName, totalAmount, orderId } = req.body
        const itemQuantity = 1
        const secret = process.env.SERVER_KEY
        const encodedSecret = Buffer.from(`${secret}:`).toString("base64")
        console.log("secret", secret)
        console.log("encodedSecret", encodedSecret)
        try {
            const response = await fetch(
                "https://api.sandbox.midtrans.com/v1/payment-links",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Basic ${encodedSecret}`,
                    },
                    body: JSON.stringify({
                        transaction_details: {
                            order_id: orderId,
                            gross_amount: totalAmount * itemQuantity,
                        },
                        item_details: [
                            {
                                id: orderId,
                                price: totalAmount,
                                quantity: itemQuantity,
                                name: itemName,
                            },
                        ],
                    }),
                },
            )

            if (!response.ok) {
                throw new Error("Failed to create payment link")
            }

            const responseData = await response.json()
            const { redirect_url }: any = responseData
            res.status(200).json({ paymentLink: redirect_url })
        } catch (error) {
            console.error("Error creating payment link:", error)
            res.status(500).json({ error: "Internal Server Error" })
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" })
    }
}
