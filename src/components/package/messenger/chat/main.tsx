type IMainChatProps = {
    openInfoSection: (state: boolean) => void | undefined;
};

const MainChat: React.FC<IMainChatProps> = ({ openInfoSection }) => {
    return (
        <section>
            <header className='p-1 border border-b flex items-center justify-between'>
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
                        onClick={() => openInfoSection(true)}>
                        <i className='fa-solid fa-ellipsis text-lg text-primary'></i>
                    </div>
                </div>
            </header>
        </section>
    );
};

MainChat.displayName = 'MainChat';
export default MainChat;
