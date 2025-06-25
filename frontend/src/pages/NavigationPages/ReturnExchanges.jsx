import { CheckCircle, Clock, Package, RefreshCw } from "lucide-react"
import { useState } from "react"

export default function ReturnsExchanges() {
  const [isReturnProcessOpen, setIsReturnProcessOpen] = useState(false)
  const [isTrackReturnOpen, setIsTrackReturnOpen] = useState(false)

  const toggleReturnProcess = () => {
    setIsReturnProcessOpen(!isReturnProcessOpen)
  }

  const toggleTrackReturn = () => {
    setIsTrackReturnOpen(!isTrackReturnOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">POLICY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We want you to be completely satisfied with your purchase. Learn about our return and exchange policy.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border-2 border-purple-200 rounded-lg shadow-sm">
            <div className="p-6 text-center border-b border-purple-200">
              <RefreshCw className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Start a Return</h3>
              <p className="text-sm text-gray-600">Begin the return process for your recent purchase</p>
            </div>
            <div className="p-6">
              <button
                onClick={toggleReturnProcess}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Start Return Process
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg shadow-sm">
            <div className="p-6 text-center border-b border-purple-200">
              <Package className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Track Return Status</h3>
              <p className="text-sm text-gray-600">Check the status of your return or exchange</p>
            </div>
            <div className="p-6">
              <button
                onClick={toggleTrackReturn}
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Track Return
              </button>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Return Policy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <Clock className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Day Window</h3>
                  <p className="text-gray-600">
                    Returns must be initiated within 30 days of delivery for a full refund.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Original Condition</h3>
                  <p className="text-gray-600">Items must be unused, in original packaging with all tags attached.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-6">
                  <Package className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Returns</h3>
                  <p className="text-gray-600">We provide prepaid return labels for all eligible returns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">How to Return an Item</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <span>Log into your account and go to Order History</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <span>Select the item you want to return</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    3
                  </span>
                  <span>Choose your return reason and print the prepaid label</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    4
                  </span>
                  <span>Package the item securely and attach the return label</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    5
                  </span>
                  <span>Drop off at any authorized shipping location</span>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Exchange Policy</h3>
              <div className="space-y-4 text-gray-600">
                <p>We offer exchanges for different sizes or colors of the same item, subject to availability.</p>
                <p>
                  Exchanges follow the same 30-day window as returns. If the new item costs more, you will pay the
                  difference. If it costs less, we will refund the difference.
                </p>
                <p>For international orders, exchanges may take 2-3 weeks to process due to shipping times.</p>
              </div>

              <h4 className="text-lg font-semibold text-purple-600 mt-6 mb-3">Non-Returnable Items</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Personalized or customized items</li>
                <li>• Intimate apparel and swimwear</li>
                <li>• Items damaged by normal wear</li>
                <li>• Gift cards and digital products</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Return Process Page */}
        {isReturnProcessOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Start Return Process</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Follow these steps to initiate a return:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Log into your account and navigate to Order History.</li>
                  <li>Select the item you wish to return and click 'Return'.</li>
                  <li>Choose a return reason (e.g., wrong size, defective).</li>
                  <li>Print the prepaid return label provided.</li>
                  <li>Pack the item securely with the label attached.</li>
                  <li>Drop off at a local authorized shipping location.</li>
                </ol>
                <p className="text-gray-600">Once processed, your refund will be issued within 3-5 business days.</p>
              </div>
              <button
                onClick={toggleReturnProcess}
                className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Track Return Status Page */}
        {isTrackReturnOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Track Return Status</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Enter your return details to check the status:</p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter your order number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
                  Track Status
                </button>
                <p className="text-gray-600 text-sm">Status updates are typically available within 24 hours of drop-off. If you don’t see your return, contact support.</p>
              </div>
              <button
                onClick={toggleTrackReturn}
                className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}