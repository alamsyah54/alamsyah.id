import Image from "next/image"

const loading = () => {
    return (
        <div className='flex w-screen h-screen justify-center items-center'>
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
        </div>
    )
}

export default loading
