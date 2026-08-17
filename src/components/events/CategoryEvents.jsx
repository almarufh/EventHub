import { filterEvents } from "../../utils/events.js";
import { CiCalendar, CiBookmark } from "react-icons/ci";
import { PiMapPinLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import * as imgEvent from "../../assets/events/index.js";

function CategoryEvents({ category, limit }) {
    const events = filterEvents(category, limit);

    return (
        <>
            {events.map((res, index) => {
                const attendeesCount = res.attendees || 0;
                const capacityCount = res.capacity || 100;
                const percentage = Math.min(Math.round((attendeesCount / capacityCount) * 100), 100);

                return (
                    <article 
                        key={res.id || index} 
                        className='flex flex-col border border-border-header rounded-xl overflow-hidden justify-between bg-white shadow-sm'
                    >
                      <div className="w-full h-176 overflow-hidden relative">
                        <img 
                          className='w-full h-full object-cover' 
                          src={imgEvent[res.image]} 
                          alt={res.title || res.name} 
                        />
                        {res.tags && res.tags.length > 0 && (
                            <div className="absolute bottom-12 left-12 flex gap-4">
                                {res.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-white/80 backdrop-blur-sm text-xs px-8 py-2 rounded-full font-medium text-dark">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-12 p-16 grow justify-between">
                        <div>
                          <span className="font-bold text-lg text-dark line-clamp-2">{res.title || res.name}</span>
                      
                          <div className="pt-8 flex flex-col gap-6">
                            {res.date && (
                              <div className="flex items-center gap-6">
                                <CiCalendar className="text-font-forthy text-base"/>
                                <span className='text-xs text-font-forthy'>{res.date}</span>
                              </div>
                            )}
                      
                            {res.location && (
                              <div className="flex items-center gap-6">
                                <PiMapPinLight className="text-font-forthy text-base" />
                                <span className='text-xs text-font-forthy'>{res.location}</span>
                              </div>
                            )}
                      
                            {res.attendees && (
                              <div className="flex items-center gap-6">
                                <GoPeople className="text-font-forthy text-base" />
                                <span className='text-xs text-font-forthy'>{res.attendees} / {res.capacity} attendees</span>
                              </div>
                            )}
                          </div>
                        </div>
                    
                        <div className="pt-4">
                          <div className='flex justify-between [&_span]:text-xs [&_span]:text-font-forthy mb-6'>
                            <span>{attendeesCount} attendees</span>
                            <span>{capacityCount} capacity</span>
                          </div>
                          <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                            <div 
                              className='bg-green-500 h-full rounded-full' 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                    
                        <div className="flex gap-8 pt-8 items-center">
                          <button className='bg-primary hover:bg-primary-dark transition py-10 px-12 f-14 text-white w-full text-center font-medium rounded-lg cursor-pointer'>
                            {res.action || "Join Event"}
                          </button>
                          <button className='p-10 border-border-header border rounded-lg cursor-pointer hover:bg-gray-50 transition'>
                            <CiBookmark className='text-font-secondary text-lg'/>
                          </button>
                        </div>
                    
                      </div>
                    </article>
                );
            })}
        </>
    );
}

export default CategoryEvents;