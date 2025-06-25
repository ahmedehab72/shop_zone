
export default function CustomerSupport() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">SUPPORT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Support</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are here to help you with any questions or concerns. Get in touch with our support team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">support@yourstore.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM EST</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <span>
            <span>
              <span className="text-purple-600">Send us a Message</span>
              <span>Fill out the form below and we will get back to you as soon as possible.</span>
            </span>
            <span className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span htmlFor="firstName">First Name</span>
                  <input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <span htmlFor="lastName">Last Name</span>
                  <input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <span htmlFor="email">Email</span>
                <input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <span htmlFor="subject">Subject</span>
                <input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <span htmlFor="message">Message</span>
                <textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} />
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
