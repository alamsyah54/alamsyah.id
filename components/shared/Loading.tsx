import Image from "next/image"

const Loading = () => {
    return (
        <div className='flex flex-col w-screen h-screen justify-center -mt-24 items-center gap-2'>
            <Image
                width={100}
                height={100}
                src='/images/AFooterDark.png'
                alt='Loading...'
                className='hidden dark:block duration-700'
            />
            <Image
                width={100}
                height={100}
                src='/images/AFooterLight.png'
                alt='Loading...'
                className='dark:hidden duration-700'
            />
            <p className='text-lg text-transparent bg-gradient-to-bl dark:from-white from-black bg-clip-text cursor-default select-none'>
                Loading...
            </p>
        </div>
    )
}

export default Loading