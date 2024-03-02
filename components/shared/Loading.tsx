import Image from "next/image"

const Loading = () => {
    return (
        <div className='absolute z-[999] top-0 left-0'>
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-1 bg-gradient-to-bl from-gray-50 from-15% via-gray-100 to-gray-200 dark:from-dark-600 dark:from-15% dark:via-dark-600 via-40% dark:to-dark-800 to-90%'>
                <Image
                    width={100}
                    height={100}
                    src='/icons/AOutlineWhite.webp'
                    alt='Loading...'
                    className='hidden dark:block duration-700'
                />
                <Image
                    width={100}
                    height={100}
                    src='/icons/AOutlineBlack.webp'
                    alt='Loading...'
                    className='dark:hidden duration-700'
                />
                <p className='font-conthrax text-lg text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loading
