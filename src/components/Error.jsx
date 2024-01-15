const Error = ({children}) => {
    return (
        <div className='bg-red-800 text-white p-6 uppercase font-bold text-center mb-3 rounded-md'>
            {children}
        </div>
    )
}

export default Error