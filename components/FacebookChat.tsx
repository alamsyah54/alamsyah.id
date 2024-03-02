"use client"
import React from "react"
import { FacebookProvider, CustomChat } from "react-facebook"

const FacebookChat = () => {
    return (
        <FacebookProvider appId='328156866736468' chatSupport>
            <CustomChat pageId='106035745352024' minimized={true} />
        </FacebookProvider>
    )
}

export default FacebookChat
