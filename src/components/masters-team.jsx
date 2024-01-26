import data from '../data/team.json';

export default function TeamMasters(){
    return(
        <div id='home-team-section' className='w-full '>
            <div className='w-full h-full flex flex-col p-10 lg:p-20'>
            <div>
            <div className='w-[70px] h-[2px] bg-white'></div>
            <h2 className='text-white font-alumni text-3xl md:text-5xl mt-2'>Our Masters</h2>
            </div>
            <div className='w-full  mt-10 flex flex-col items-center md:flex-row gap-5 md:gap-7 lg:gap-14 lg:px-20'>
                {data.masters.map((master, index) => (
                    <div key={index} className={`text-white flex flex-col items-center text-center w-11/12 h-[26rem] md:h-[32rem] lg:h-auto md:w-96`}>
                        <img src={master.url} alt="smdks" className={`md:w-full  object-cover  brightness-50 grayscale transition-all duration-300 ease-in hover:grayscale-0   h-2/3 ${index % 2 === 0 ? 'lg:h-[410px]' : 'lg:h-[450px]'}`}/>
                        <p className='uppercase font-antonio text-xl lg:text-3xl mt-2 md:mt-5'>{master.name}</p>
                        <p className='font-rivage text-zinc-600 text-base lg:text-2xl'>{master.title}</p>
                        <div className='border-t-[1px] border-slate-600 mt-2 mb-2 md:px-2 md:py-5 md:mt-5'>
                        <p className={`text-xs lg:text-base mt-2 ${index % 2 === 0 ? 'text-gray-400' : 'text-white'}`}>"{master.quote}"</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}
