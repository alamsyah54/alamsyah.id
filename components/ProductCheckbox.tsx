interface ProductCheckboxProps {
    id: number
    name: string
    onSelect: (id: number) => void
}

const ProductCheckbox: React.FC<ProductCheckboxProps> = ({
    id,
    name,
    onSelect,
}) => {
    return (
        <label className='flex items-center'>
            <input
                type='checkbox'
                onChange={() => onSelect(id)}
                className='mr-2'
            />
            {name}
        </label>
    )
}

export default ProductCheckbox
