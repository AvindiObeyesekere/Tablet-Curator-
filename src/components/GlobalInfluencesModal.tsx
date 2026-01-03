import '@fortawesome/fontawesome-free/css/all.css'

interface GlobalInfluence {
    id: number
    title: string
    date: string
    location: string
    description: string
    causalStrength: number
    reliabilityScore: number
    finalScore: number
    mechanism: string
    directness: number
    sourceConsistency: number
    temporalProximity: number
    evidenceStrength: number
    paths: Array<{ score: number; path: string }>
}

interface GlobalInfluencesModalProps {
    isOpen: boolean
    onClose: () => void
    eventTitle: string
}

export default function GlobalInfluencesModal({ isOpen, onClose, eventTitle }: GlobalInfluencesModalProps) {
    if (!isOpen) return null

    const globalInfluences: GlobalInfluence[] = [
        {
            id: 1,
            title: 'American Civil War',
            date: '1861-04-12',
            location: 'United States',
            description: 'War disrupting global cotton supply chains causing economic shifts worldwide',
            causalStrength: 0.85,
            reliabilityScore: 60.1,
            finalScore: 0.79,
            mechanism: 'trade_shock',
            directness: 0.90,
            sourceConsistency: 0.80,
            temporalProximity: 0.00,
            evidenceStrength: 0.65,
            paths: [
                { score: 0.73, path: 'American Civil War directly influenced Establishment of Tea Plantations in Ceylon' },
                { score: 0.56, path: 'American Civil War affected Tea (commodity) → Tea → Establishment of Tea Plantations in Ceylon' }
            ]
        },
        {
            id: 2,
            title: 'Industrial Revolution',
            date: '1760-01-01',
            location: 'Europe',
            description: 'Technological and economic transformation creating global demand for commodities',
            causalStrength: 0.85,
            reliabilityScore: 54.0,
            finalScore: 0.74,
            mechanism: 'technology',
            directness: 0.90,
            sourceConsistency: 0.60,
            temporalProximity: 0.00,
            evidenceStrength: 0.65,
            paths: [
                { score: 0.71, path: 'Industrial Revolution directly influenced Establishment of Tea Plantations in Ceylon' },
                { score: 0.54, path: 'Industrial Revolution affected Tea (commodity) → Tea → Establishment of Tea Plantations in Ceylon' }
            ]
        },
        {
            id: 3,
            title: 'Coffee Leaf Rust Epidemic',
            date: '1869-01-01',
            location: 'Global',
            description: 'Global coffee leaf rust disease devastated coffee plantations worldwide',
            causalStrength: 0.75,
            reliabilityScore: 60.2,
            finalScore: 0.73,
            mechanism: 'trade_shock',
            directness: 0.90,
            sourceConsistency: 0.67,
            temporalProximity: 0.14,
            evidenceStrength: 0.65,
            paths: [
                { score: 0.67, path: 'Coffee Leaf Rust Epidemic directly influenced Establishment of Tea Plantations in Ceylon' },
                { score: 0.54, path: 'Coffee Leaf Rust Epidemic affected Tea (commodity) → Tea → Establishment of Tea Plantations in Ceylon' }
            ]
        }
    ]

    const totalCandidates = 3
    const highConfidence = 3

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 rounded-t-xl flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-white">Global-Local Historical Influence Discovery</h2>
                            <p className="text-sm text-blue-100 mt-1">Local Event: {eventTitle}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white hover:opacity-80 text-2xl bg-transparent border-none cursor-pointer"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                {/* Statistics */}
                <div className="bg-blue-50 px-6 py-3 border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center gap-6 text-sm">
                        <div>
                            <span className="font-semibold text-gray-700">Total Candidates:</span>
                            <span className="ml-2 text-blue-600 font-bold">{totalCandidates}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">High Confidence (&gt;0.7):</span>
                            <span className="ml-2 text-green-600 font-bold">{highConfidence}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Medium Confidence (0.5-0.7):</span>
                            <span className="ml-2 text-yellow-600 font-bold">0</span>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Low Confidence (&lt;0.5):</span>
                            <span className="ml-2 text-red-600 font-bold">0</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Top Global Influences</h3>
                    
                    <div className="space-y-4">
                        {globalInfluences.map((influence, index) => (
                            <div key={influence.id} className="bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-t-lg">
                                    <h4 className="text-white font-bold text-base">Influence #{index + 1}</h4>
                                </div>

                                <div className="p-4 space-y-4">
                                    {/* Global Cause */}
                                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                                        <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <i className="fas fa-globe text-blue-600"></i>
                                            Global Cause: {influence.title}
                                        </h5>
                                        <div className="text-sm text-gray-700 space-y-1">
                                            <p><span className="font-semibold">Date:</span> {influence.date}</p>
                                            <p><span className="font-semibold">Location:</span> {influence.location}</p>
                                            <p><span className="font-semibold">Description:</span> {influence.description}</p>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <h6 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-1">
                                                <i className="fas fa-chart-line text-orange-500"></i>
                                                Influence Metrics
                                            </h6>
                                            <div className="text-xs space-y-1">
                                                <p><span className="font-medium">Causal Strength:</span> <span className="text-blue-600 font-bold">{influence.causalStrength}</span></p>
                                                <p><span className="font-medium">Reliability Score:</span> <span className="text-blue-600 font-bold">{influence.reliabilityScore}/100</span></p>
                                                <p><span className="font-medium">Final Score:</span> <span className="text-green-600 font-bold">{influence.finalScore}</span></p>
                                                <p><span className="font-medium">Mechanism:</span> <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">{influence.mechanism}</span></p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <h6 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-1">
                                                <i className="fas fa-check-double text-green-500"></i>
                                                Reliability Components
                                            </h6>
                                            <div className="text-xs space-y-1">
                                                <p><span className="font-medium">Directness (D):</span> <span className="text-blue-600 font-bold">{influence.directness}</span></p>
                                                <p><span className="font-medium">Source Consistency (S):</span> <span className="text-blue-600 font-bold">{influence.sourceConsistency}</span></p>
                                                <p><span className="font-medium">Temporal Proximity (T):</span> <span className="text-blue-600 font-bold">{influence.temporalProximity}</span></p>
                                                <p><span className="font-medium">Evidence Strength:</span> <span className="text-blue-600 font-bold">{influence.evidenceStrength}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Constraint Checks */}
                                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                                        <h6 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-1">
                                            <i className="fas fa-clipboard-check text-green-600"></i>
                                            Constraint Checks
                                        </h6>
                                        <div className="flex gap-4 text-xs">
                                            <span className="text-green-700 flex items-center gap-1">
                                                <i className="fas fa-check-circle"></i> Temporal Order: <span className="font-bold">PASS</span>
                                            </span>
                                            <span className="text-green-700 flex items-center gap-1">
                                                <i className="fas fa-check-circle"></i> Geographic Plausibility: <span className="font-bold">PASS</span>
                                            </span>
                                            <span className="text-green-700 flex items-center gap-1">
                                                <i className="fas fa-check-circle"></i> Source Consistency: <span className="font-bold">PASS</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Explanation Paths */}
                                    <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                                        <h6 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-1">
                                            <i className="fas fa-route text-yellow-600"></i>
                                            Explanation Paths
                                        </h6>
                                        <div className="space-y-2">
                                            {influence.paths.map((path, idx) => (
                                                <div key={idx} className="text-xs text-gray-700">
                                                    <span className="font-medium">Path {idx + 1}</span> 
                                                    <span className="ml-1 text-blue-600 font-bold">(Score: {path.score}):</span>
                                                    <p className="ml-4 mt-1">{path.path}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 pt-2">
                                        <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                            <i className="fas fa-check"></i>
                                            Accept Influence
                                        </button>
                                        <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                                            <i className="fas fa-times"></i>
                                            Reject Influence
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 rounded-b-xl border-t border-gray-200 flex justify-end gap-3 flex-shrink-0">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                    >
                        Close
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <i className="fas fa-download"></i>
                        Export Results
                    </button>
                </div>
            </div>
        </div>
    )
}
