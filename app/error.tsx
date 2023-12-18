"use client"

import EmptyState from "@/components/EmptyState"

interface ErrorStateProps {
    error: Error
}

const Error: React.FC<ErrorStateProps> = ({ error }) => {
    return (
        <>
            <EmptyState
                title='Uh No!! There was a problem.'
                subtitle={error.message || "Something went wrong."}
                label='Try again'
            />
        </>
    )
}

export default Error
