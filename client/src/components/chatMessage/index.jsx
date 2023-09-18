import React from 'react'

const ChatMessage = ({ message, username }) => {
    const isGuest = message?.username !== username;
    return (
        isGuest ?
            <>
                <div className='w-1/2 h-12 text-white text-sm m-2 rounded-xl rounded-bl-none p-2 border border-2' style={{ backgroundColor: '#F6F4EB' }}>
                    <div className='text-black'>
                        {message?.message}
                    </div>
                </div>
                <div className='text-black text-[10px] flex justify-star ml-2'>
                   {message?.date} 
                </div>
            </>
            :
            <>
                <div className='flex justify-end'>
                    <div className='w-1/2 h-12 text-white text-sm m-2 rounded-xl rounded-br-none p-2' style={{ backgroundColor: '#749BC2' }}>
                        <div>
                        {message?.message}
                        </div>
                    </div>
                </div>
                <div className='flex justify-end text-[10px] mr-2'>
                   {message?.date} 
                </div>
            </>
    )
}

export default ChatMessage