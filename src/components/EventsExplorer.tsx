import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import profileImg from '../assets/profile.png'
import Event from './Event'

export default function EventsExplorer() {
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)
    const [viewingEvent, setViewingEvent] = useState<typeof events[0] | null>(null)
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)

    const timelinePeriods = ['3rd CE', '1st CE', '5th CE', '10th CE', 'Kandyan', 'Colonial', '18th CE']

    const events = [
        {
            id: 1,
            title: 'Construction of Jetavanaramaya',
            description: 'King Mahasena ordered the construction of the massive Jetavanaramaya stupa, which became one of the tallest structures in the ancient world and a marvel of Buddhist architecture.',
            dateRange: '270-303 CE',
            period: '3rd CE',
            icon: '🏛️',
            hasUpdate: false,
            isVerified: false
        },
        {
            id: 2,
            title: 'Abhayagiri Monastery Expansion',
            description: 'Major expansion of the Abhayagiri monastery complex under royal patronage, establishing it as a center of Mahayana Buddhist learning and attracting monks from across Asia.',
            dateRange: '400-450 CE',
            period: '5th CE',
            reference: 'Due to the visit of Mahanya bhuddhist this led to estb. According to the Mahvamda page [90] line 89 .',
            hasUpdate: true,
            isVerified: true
        },
        {
            id: 3,
            title: 'Advanced Irrigation Systems',
            description: 'Development of sophisticated hydraulic engineering with construction of massive tanks and canal networks that supported agriculture and urban development throughout the region.',
            dateRange: '450-600 CE',
            period: '5th CE',
            hasUpdate: false,
            isVerified: false
        },
        {
            id: 4,
            title: 'Royal Palace Renovations',
            description: 'Extensive renovations to the royal palace complex including new audience halls, residential quarters, and administrative buildings showcasing advanced architectural techniques.',
            dateRange: '480-520 CE',
            period: '5th CE',
            hasUpdate: false,
            isVerified: false
        },
        {
            id: 5,
            title: 'International Trade Flourishing',
            description: 'Anuradhapura became a major hub for international trade with merchants from India, China, and the Roman Empire establishing permanent trading posts and cultural exchanges.',
            dateRange: '450-600 CE',
            period: '5th CE',
            hasUpdate: false,
            isVerified: false
        }
    ]

    const bottomNav = [
        { icon: '🏠', label: 'Home' },
        { icon: '📅', label: 'Events' },
        { icon: '📊', label: 'Timeline' },
        { icon: '💾', label: 'Saved' },
        { icon: '🕐', label: 'Recents' }
    ]

    return (
        <>
            {viewingEvent ? (
                <Event event={viewingEvent} onBack={() => setViewingEvent(null)} />
            ) : (
                <>
                {dropdownOpen !== null && (
                    <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setDropdownOpen(null)}
                    />
                )}
                <div className="flex flex-col w-screen bg-gray-100" style={{ height: '100vh' }}>
            {/* Blue Header Band */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 flex-shrink-0 shadow-md">
                <div className="flex items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-center gap-2">
                        <i className="fas fa-arrow-left text-white text-lg hover:opacity-80 cursor-pointer"></i>
                        <span className="text-sm font-semibold text-white">History Contextual Explorer</span>
                    </div>
                    
                    {/* Center Section */}
                    <div className="text-center flex-1">
                        <h1 className="text-base font-bold text-white">Anuradhapura</h1>
                        <p className="text-xs text-blue-100">Historical events through time</p>
                    </div>
                    
                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        <i className="fas fa-bookmark text-white text-lg hover:opacity-80 cursor-pointer"></i>
                        <img 
                            src={profileImg} 
                            alt="Profile" 
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    </div>
                </div>
            </header>

            {/* Timeline */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0 overflow-x-auto">
                <div className="flex items-center justify-between gap-2 min-w-max">
                    <button className="flex-shrink-0 bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">«</button>
                    {timelinePeriods.map((period, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                                idx === 0 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-700'
                            }`}>
                                ⊙
                            </div>
                            <p className="text-xs mt-1 text-gray-700 font-medium">{period}</p>
                        </div>
                    ))}
                    <button className="flex-shrink-0 bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">»</button>
                </div>
            </div>

            {/* Title and Search */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex-shrink-0">
                <div className="mb-2">
                    <h2 className="text-sm font-bold text-gray-900">Historical Events - 1st Century CE</h2>
                    <p className="text-xs text-gray-500">Discover significant moments in Anuradhapura's history</p>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search by time or event..."
                        className="flex-1 px-3 py-1.5 text-xs bg-white rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                </div>
            </div>

            {/* Events List */}
            <main className="flex-1 overflow-y-auto min-h-0 px-6 py-4">
                <div className="space-y-3">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 relative"
                        >
                            <div className="flex gap-3 p-4">
                                {/* Icon */}
                                <div className="text-3xl flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                                    {event.icon || '📜'}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="text-sm font-bold text-gray-900">
                                            {event.title}
                                        </h3>
                                        {event.isVerified && (
                                            <div className="flex-shrink-0 text-green-600 text-sm font-medium flex items-center gap-1">
                                                <span>✓</span>
                                                <span>Verified</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                        {event.description}
                                    </p>
                                    {event.reference && (
                                        <p className="text-xs text-gray-700 mb-2 p-2 bg-yellow-50 rounded border-l-2 border-yellow-400">
                                            <span className="font-semibold">Reference:</span> {event.reference}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                            {event.dateRange}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-2 flex-shrink-0">
                                    {!event.hasUpdate && (
                                        <button 
                                            onClick={() => setViewingEvent(event)}
                                            className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium hover:bg-orange-600 transition-colors whitespace-nowrap"
                                        >
                                            Use Global Context Explorer
                                        </button>
                                    )}
                                    {event.hasUpdate && (
                                        <button 
                                            onClick={() => setViewingEvent(event)}
                                            className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                                        >
                                            Update Global Context
                                        </button>
                                    )}
                                </div>

                                {/* Menu Icon */}
                                <div className="text-gray-400 flex-shrink-0 flex items-center relative z-20">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setDropdownOpen(dropdownOpen === event.id ? null : event.id)
                                        }}
                                        className="text-lg hover:text-gray-600"
                                    >
                                        ⋮
                                    </button>
                                    
                                    {/* Dropdown Menu */}
                                    {dropdownOpen === event.id && (
                                        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 min-w-[150px]">
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    console.log('Add links:', event.id)
                                                    setDropdownOpen(null)
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-gray-100 flex items-center gap-2 border-b border-gray-200"
                                            >
                                                <i className="fas fa-link"></i>
                                                Add Links
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    console.log('Verify event:', event.id)
                                                    setDropdownOpen(null)
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                            >
                                                <i className="fas fa-check-circle text-green-600"></i>
                                                Verify Event
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    console.log('Delete event:', event.id)
                                                    setDropdownOpen(null)
                                                }}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                                            >
                                                <i className="fas fa-trash"></i>
                                                Delete Event
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="bg-white border-t border-gray-200 flex-shrink-0 w-full">
                <div className="flex justify-around">
                    {bottomNav.map((item, index) => (
                        <button
                            key={index}
                            className="flex-1 flex flex-col items-center justify-center py-2.5 text-xs font-medium text-gray-600 hover:text-green-600 transition-colors border-t-2 border-transparent hover:border-green-600"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-xs mt-0.5">{item.label}</span>
                        </button>
                    ))}
                </div>
            </nav>
                </div>
                </>
            )}
        </>
    )
}
