import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import eventImg from '../assets/event.png'
import GlobalInfluencesModal from './GlobalInfluencesModal'

interface EventDetailProps {
    event: {
        id: number
        title: string
        description: string
        dateRange: string
        period: string
        icon?: string
        hasUpdate: boolean
        isVerified: boolean
        reference?: string
    }
    onBack: () => void
}

export default function Event({ event, onBack }: EventDetailProps) {
    const [isSaved, setIsSaved] = useState(false)
    const [showInfluencesModal, setShowInfluencesModal] = useState(false)

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white px-6 py-3 flex-shrink-0 shadow-md border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onBack}
                            className="text-blue-600 text-lg hover:opacity-80 cursor-pointer"
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <span className="text-sm font-semibold text-blue-600">Historical Event Explorer</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="text-gray-400 text-lg hover:text-gray-600">
                            <i className="fas fa-bookmark"></i>
                        </button>
                        <button className="text-gray-400 text-lg hover:text-gray-600">
                            <i className="fas fa-share"></i>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto px-8 py-6">
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Title Section */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-600 mb-2">Global Explorer</h2>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
                        <p className="text-sm text-gray-500">{event.period} - Anuradhapura</p>
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Left Side - Image */}
                        <div className="flex items-start">
                            <img 
                                src={eventImg}
                                alt={event.title}
                                className="w-full rounded-lg h-56 object-cover shadow-lg"
                            />
                        </div>

                        {/* Right Side - Event Description */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Event Description</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                {event.description}
                            </p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                                <i className="fas fa-wand-magic-sparkles"></i>
                                Generate AI Explanation
                            </button>
                        </div>
                    </div>

                    {/* Global Context Influence */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Global Context Influence</h3>
                        
                        {event.reference && (
                            <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Reference:</span> {event.reference}
                                </p>
                            </div>
                        )}
                        
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            The arrival of Arlat Mahinda from India played a crucial role in introducing Buddhism to Sri Lanka, reflecting broader religious and cultural exchanges across South Asia during the Mauryan period. This event was part of Emperor Ashoka's systematic effort to spread Buddhism beyond India's borders, demonstrating the interconnected nature of ancient civilizations and their shared spiritual heritage.
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            <button 
                                onClick={() => setShowInfluencesModal(true)}
                                className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1"
                            >
                                <i className="fas fa-globe"></i>
                                Find with Global Context Explorer
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-1">
                                <i className="fas fa-bookmark"></i>
                                Save Global Context
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-1">
                                <i className="fas fa-search"></i>
                                Re-submit Query
                            </button>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                                isSaved
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-orange-500 text-white hover:bg-orange-600'
                            }`}
                        >
                            <i className="fas fa-bookmark"></i>
                            {isSaved ? 'Saved Event & Global Context' : 'Save Event & Global Context'}
                        </button>
                    </div>

                    {/* References Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">References</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <i className="fas fa-book text-orange-500 text-sm mt-0.5"></i>
                                <p className="text-sm text-gray-700">Mahavamsa Chronicle - Ancient Pali text recording Sri Lankan history</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="fas fa-book text-orange-500 text-sm mt-0.5"></i>
                                <p className="text-sm text-gray-700">Ashokan Rock Edicts - Imperial inscriptions of Emperor Ashoka</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="fas fa-book text-orange-500 text-sm mt-0.5"></i>
                                <p className="text-sm text-gray-700">UNESCO - Sacred City of Anuradhapura World Heritage Documentation</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="fas fa-book text-orange-500 text-sm mt-0.5"></i>
                                <p className="text-sm text-gray-700">Rahula, W. (1966) - History of Buddhism in Ceylon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200 px-6 py-3 flex-shrink-0 text-center">
                <p className="text-xs text-gray-500">
                    © 2025 Historical Event Explorer. All rights reserved. | 
                    <button className="text-blue-600 hover:text-blue-700 ml-1">Privacy Policy</button> | 
                    <button className="text-blue-600 hover:text-blue-700 ml-1">Terms of Service</button> | 
                    <button className="text-blue-600 hover:text-blue-700 ml-1">Support</button>
                </p>
            </footer>

            {/* Global Influences Modal */}
            <GlobalInfluencesModal
                isOpen={showInfluencesModal}
                onClose={() => setShowInfluencesModal(false)}
                eventTitle={event.title}
            />
        </div>
    )
}
