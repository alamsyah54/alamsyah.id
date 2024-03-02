interface QuantityInputProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

const QuantityInput: React.FC<QuantityInputProps> = ({
    quantity,
    onIncrease,
    onDecrease,
}) => {
    return (
        <div className='flex items-center mt-2 mb-4'>
            <button
                onClick={onDecrease}
                className='dark:bg-dark-500 bg-gray-200 text-dark-800 dark:text-gray-300 duration-200 px-3 py-1 rounded-md active:dark:bg-dark-800 active:bg-gray-400'
            >
                -
            </button>
            <span className='mx-4'>{quantity}</span>
            <button
                onClick={onIncrease}
                className='dark:bg-dark-500 bg-gray-200 text-dark-800 dark:text-gray-300 duration-200 px-3 py-1 rounded-md active:dark:bg-dark-800 active:bg-gray-400'
            >
                +
            </button>
        </div>
    )
}

export default QuantityInput
