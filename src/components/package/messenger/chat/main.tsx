type IMainChatProps = {
    infoSection: boolean;
    openInfoSection: (state: boolean) => void | undefined;
};

const MainChat: React.FC<IMainChatProps> = ({
    infoSection,
    openInfoSection,
}) => {
    console.log('render MainChat', infoSection);

    return (
        <section className='relative w-full h-full'>
            <header className='p-1 border border-b flex items-center justify-between absolute top-0 right-0 left-0'>
                <div className='flex items-center gap-2 p-2 rounded-lg hover:bg-slate-200 hover:cursor-pointer'>
                    <figure className='w-10 h-10 bg-messenger rounded-full'></figure>
                    <div>
                        <p className='text-sm font-medium'>Nguyen Van A</p>
                        <p className='text-xs text-gray-500'>Active now</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='w-9 h-9 hover:bg-slate-200 rounded-full flex justify-center items-center hover:cursor-pointer'>
                        <i className='fa-solid fa-phone text-lg text-primary'></i>
                    </div>
                    <div className='w-9 h-9 hover:bg-slate-200 rounded-full flex justify-center items-center hover:cursor-pointer'>
                        <i className='fa-solid fa-video text-lg text-primary'></i>
                    </div>
                    <div
                        className='w-9 h-9 hover:bg-slate-200 rounded-full flex justify-center items-center hover:cursor-pointer'
                        style={{
                            backgroundColor: infoSection ? '#f3f4f6' : '',
                        }}
                        onClick={() => openInfoSection(true)}>
                        <i className='fa-solid fa-ellipsis text-lg text-primary'></i>
                    </div>
                </div>
            </header>

            <footer className=' absolute bottom-0 left-0 right-0 py-2 px-2 flex items-center gap-1'>
                <div className='flex items-center'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                        <i className='fa-solid fa-circle-plus text-lg text-primary'></i>
                    </div>

                    <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                        <i className='fa-regular fa-image text-lg text-primary'></i>
                    </div>

                    <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                        <i className='fa-solid fa-note-sticky text-lg text-primary'></i>
                    </div>

                    <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                        <i className='fa-solid fa-gif text-lg text-primary'></i>
                    </div>
                </div>

                <input
                    type='text'
                    className=' rounded-full bg-gray-100 text-sm py-2 px-3 outline-none flex-1'
                    placeholder='Aa'
                />

                <div className='w-9 h-9 rounded-full flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer'>
                    <i className='fa-solid fa-heart text-xl text-red-500'></i>
                </div>
            </footer>
        </section>
    );
};

MainChat.displayName = 'MainChat';
export default MainChat;
