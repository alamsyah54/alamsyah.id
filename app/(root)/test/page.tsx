"use client"

import { useState } from "react"

const Home: React.FC = () => {
    const [message, setMessage] = useState("")
    const [generatedLink, setGeneratedLink] = useState<string | null>(null)

    const generateWhatsAppLink = () => {
        const phoneNumber = "6285172010009" // Replace with the desired phone number
        const encodedMessage = encodeURIComponent(message)
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        setGeneratedLink(whatsappLink)
    }

    return (
        <div>
            <h1>WhatsApp Link Generator</h1>
            <textarea
                rows={5}
                cols={30}
                placeholder='Enter your message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button onClick={generateWhatsAppLink}>
                Generate WhatsApp Link
            </button>

            {generatedLink && (
                <div>
                    <h2>Generated WhatsApp Link:</h2>
                    <a
                        href={generatedLink}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {generatedLink}
                    </a>
                </div>
            )}
        </div>
    )
}

export default Home
