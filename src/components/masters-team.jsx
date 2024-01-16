
import data from '../data/team.json';

export default function TeamMasters(){
    return(
        <div id='home-team-section' className='w-full h-[120vh]'>
            <div className='w-full h-full flex flex-col px-20 py-20'>
            <div>
            <h4 className='text-primaryOrange font-allison text-4xl'>team</h4>
            <h2 className='text-white font-alumni text-5xl'>Our Masters</h2>
            </div>
            <div className='w-full h-[650px]  mt-10 flex gap-14'>
                {data.masters.map((master, index) => (
                    <div key={index} className='text-white flex flex-col items-center text-center'>
                        <img src={master.url} alt="smdks" className={`w-full  object-cover opacity-40 ${index % 2 === 0 ? 'h-[370px]' : 'h-[420px]'}`}/>
                        <p className='uppercase font-antonio text-3xl mt-5'>{master.name}</p>
                        <p className='font-allison text-primaryOrange text-3xl'>{master.title}</p>
                        <div className='border-t-[1px] border-slate-600 px-2 py-5 mt-5'>
                        <p className={`${index % 2 === 0 ? 'text-gray-400' : 'text-white'}`}>"{master.quote}"</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}
