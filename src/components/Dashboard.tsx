import { useState } from 'react'

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import EventsExplorer from './EventsExplorer'

export default function Dashboard() {
    const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null)
    const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'events'>('dashboard')

    const tabs: Array<{ icon: string; label: string }> = [
        { icon: '🏠', label: 'Home' },
        { icon: '🔍', label: 'Search' },
        { icon: '❤️', label: 'Favorites' },
        { icon: '⚙️', label: 'Settings' },
    ]

    const locations = [
        {
            id: 1,
            name: 'Colombo',
            description: 'Commercial capital and largest city',
            category: 'City',
            image: img1,
        },
        {
            id: 2,
            name: 'Kandy',
            description: 'Cultural capital and UNESCO site',
            category: 'Cultural',
            image: img2,
        },
        {
            id: 3,
            name: 'Anuradhapura',
            description: 'Ancient capital and sacred city',
            category: 'Historical',
            image: img3,
        },
        {
            id: 4,
            name: 'Polonnaruwa',
            description: 'Medieval capital and ancient ruins',
            category: 'Historical',
            image: img4,
        },
        {
            id: 5,
            name: 'Galle',
            description: 'Historic fort city and coastal gem',
            category: 'Coastal',
            image: img5,
        },
        {
            id: 6,
            name: 'Sigiriya',
            description: 'Ancient rock fortress and palace',
            category: 'Historical',
            image: img6,
        }
    ]


    return (
        <>
            {currentScreen === 'events' ? (
                <EventsExplorer onBack={() => {
                    setCurrentScreen('dashboard')
                    setSelectedLocation(null)
                }} />
            ) : (
                <div className="fixed inset-0 flex flex-col bg-blue-100">
            {/* Header */}
            <header className="bg-white px-6 py-3 border-b border-gray-200 flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">
                    Context Explorer - Global & Local
                </h1>
                <p className="text-xs text-gray-500">
                    Discover history and relationships lost in time and space
                </p>
            </header>

            {/* Search Bar */}
            <div className="bg-white border-b border-gray-100 px-6 py-2 flex-shrink-0">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search cities..."
                        className="flex-1 px-3 py-1.5 text-sm bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <button className="text-xl">⋯</button>
                </div>
            </div>

            {/* Main Content - Grid of Cards */}
            <main className="flex-1 overflow-hidden px-6 py-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            onClick={() => {
                                setSelectedLocation(location)
                                setCurrentScreen('events')
                            }}
                            className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="h-32 overflow-hidden flex-shrink-0">
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-3 flex-1 flex flex-col">
                                <h3 className="text-sm font-bold text-gray-900">
                                    {location.name}
                                </h3>
                                <p className="text-xs text-gray-500 mb-1">
                                    {location.category}
                                </p>
                                <p className="text-xs text-gray-600 mb-2 flex-1">
                                    {location.description}
                                </p>

                                {/* Explore Link */}
                                <button className="text-blue-500 text-xs font-medium hover:text-blue-700 transition-colors text-left">
                                    Explore History →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="bg-white border-t border-gray-200 flex-shrink-0">
                <div className="flex justify-around">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className="flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors border-t-2 border-transparent hover:border-green-600"
                        >
                            <span className="text-lg">{tab.icon}</span>
                            <span className="text-xs">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Modal for selected location */}
            {selectedLocation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl max-w-sm w-full p-5 shadow-2xl">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">
                            {selectedLocation.name}
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">{selectedLocation.description}</p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedLocation(null)}
                                className="flex-1 bg-gray-200 text-gray-900 py-1.5 px-3 rounded font-medium text-sm hover:bg-gray-300 transition-colors"
                            >
                                Close
                            </button>
                            <button className="flex-1 bg-green-600 text-white py-1.5 px-3 rounded font-medium text-sm hover:bg-green-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            )}
                </div>
            )}
        </>
    )
}
