import { MessageCircle, Search, HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"
import PropTypes from "prop-types"

export default function FAQ() {
  const [openItems, setOpenItems] = useState([])
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")

  const toggleItem = (itemId) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen)
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "user" }])
      setInputMessage("")
      setTimeout(() => {
        const response = getBotResponse(inputMessage.toLowerCase())
        setMessages((prev) => [...prev, { text: response, sender: "bot" }])
      }, 500)
    }
  }

  const getBotResponse = (message) => {
    const productCategories = {
      electronics: "We offer a wide range of electronics: Phones (e.g., iPhone 15 with advanced cameras, Samsung Galaxy S24 with long battery life), Laptops (e.g., MacBook Air for portability, Dell XPS for performance), Cameras (e.g., Canon EOS R5 for 8K video, Sony A7 IV for versatility), and Accessories (e.g., Anker chargers for fast charging, Spigen cases for protection). Check our Electronics section for deals!",
      fashion: "Explore our Fashion & Apparel: Men’s and Women’s Clothing (e.g., Levi’s jeans for durability, Zara dresses for style), Shoes (e.g., Adidas sneakers for comfort, Puma boots for outdoor use), and Accessories (e.g., Tommy Hilfiger watches for elegance, Fossil bags for functionality). New seasonal collections are available!",
      home: "Our Home & Kitchen includes: Furniture (e.g., IKEA sofas for modern design, Ashley tables for durability), Appliances (e.g., Bosch microwaves for efficiency, LG blenders for smoothies), Cookware (e.g., Le Creuset pans for even cooking, All-Clad sets for longevity), and Decorations (e.g., Pottery Barn wall art for aesthetics, HomeGoods rugs for warmth). Perfect for upgrading your space!",
      health: "Check out Health & Beauty: Skincare (e.g., L’Oreal moisturizers for hydration, Neutrogena serums for anti-aging), Haircare (e.g., Pantene shampoos for strength, Moroccanoil styling tools for shine), Wellness (e.g., NOW Foods supplements for immunity), and Personal Care Tools (e.g., Philips electric toothbrushes for oral health). Free shipping on orders over $50!",
      groceries: "Our Groceries & Food offers: Packaged Foods (e.g., Nestle snacks for convenience, Kraft pasta for meals), Beverages (e.g., Coca-Cola for refreshment, Starbucks coffee for energy), and Organic Products (e.g., Amy’s Kitchen quinoa for health, Horizon Organic milk for purity). Stock up with same-day delivery options!",
      books: "Visit Books & Stationery: Educational books (e.g., Pearson textbooks for learning), Novels (e.g., Penguin Random House bestsellers for entertainment), Notebooks (e.g., Moleskine for journaling), and School Supplies (e.g., Crayola pens for creativity). Great for students and readers alike!",
      toys: "Our Toys & Baby Products include: Toys (e.g., LEGO sets for building skills, Mattel dolls for imaginative play), Baby Food (e.g., Gerber for nutrition, Beech-Nut for variety), Baby Clothes (e.g., Carter’s for comfort), and Gear (e.g., Graco strollers for mobility, Chicco car seats for safety). Safe and high-quality options for all ages!"
    }

    const customerServiceReplies = {
      support: "Our customer service is available 24/7 via live chat, email (support@yourstore.com), and phone (+1-800-555-1234). Expect a response within 1 hour for chat, 24 hours for email. We also offer a help center with FAQs and video tutorials!",
      help: "Need assistance? Contact us through live chat for instant support, email for detailed queries, or phone for urgent issues. Our team is trained to assist with orders, returns, and product advice, with average wait times under 5 minutes!",
      contact: "Reach our support team via live chat (available now), email (support@SHOPZONE.com with 24-hour response), or call (01004727467, 9 AM - 9 PM EEST). We’re here to help with any concerns!"
    }

    const paymentReplies = {
      payment: "We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions use 256-bit SSL encryption for security, and we offer installment plans via PayPal and Shop Pay for eligible purchases.",
      secure: "Your payments are secure with 256-bit SSL encryption. We accept multiple methods including credit/debit cards, digital wallets (PayPal, Apple Pay), and installment options. No sensitive data is stored on our servers!",
      methods: "Choose from Visa, Mastercard, Amex, Discover, PayPal, Apple Pay, Google Pay, or Shop Pay. Enjoy secure checkout with SSL encryption and flexible options like installments or guest checkout without an account."
    }

    if (message.includes("phone") || message.includes("laptop") || message.includes("camera") || message.includes("accessory")) return productCategories.electronics
    if (message.includes("clothing") || message.includes("shoes") || message.includes("fashion")) return productCategories.fashion
    if (message.includes("furniture") || message.includes("appliance") || message.includes("cookware") || message.includes("decoration")) return productCategories.home
    if (message.includes("skincare") || message.includes("haircare") || message.includes("wellness") || message.includes("personal care")) return productCategories.health
    if (message.includes("food") || message.includes("grocery") || message.includes("beverage") || message.includes("organic")) return productCategories.groceries
    if (message.includes("book") || message.includes("novel") || message.includes("stationery") || message.includes("school")) return productCategories.books
    if (message.includes("toy") || message.includes("baby") || message.includes("gear")) return productCategories.toys
    if (message.includes("support") || message.includes("help") || message.includes("contact")) return customerServiceReplies[Object.keys(customerServiceReplies).find(key => message.includes(key)) || "contact"]
    if (message.includes("payment") || message.includes("secure") || message.includes("methods")) return paymentReplies[Object.keys(paymentReplies).find(key => message.includes(key)) || "methods"]

    return "Hi! I’m here to help. Please tell me what you're looking for (e.g., electronics, fashion, etc.), or ask about shipping, returns, payment, or customer support. What can I assist you with today?"
  }

  const AccordionItem = ({
    id,
    question,
    answer,
  }) => {
    const isOpen = openItems.includes(id)

    return (
      <div className="border border-gray-200 rounded-lg">
        <button
          onClick={() => toggleItem(id)}
          className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="font-medium text-gray-900">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && <div className="px-4 pb-4 text-gray-600">{answer}</div>}
      </div>
    )
  }

  AccordionItem.propTypes = {
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">HELP CENTER</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </div>

        {/* Quick Help */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-white border-2 border-purple-200 rounded-lg shadow-sm">
            <div className="p-6">
              <Search className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Search Help</h3>
              <p className="text-gray-600 text-sm mb-4">Can not find what you are looking for?</p>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded-md transition-colors duration-200">
                Search Articles
              </button>
            </div>
          </div>

          <div className="text-center bg-white border-2 border-purple-200 rounded-lg shadow-sm">
            <div className="p-6">
              <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Chat with our support team</p>
              <button
                onClick={toggleChat}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Start Chat
              </button>
            </div>
          </div>

          <div className="text-center bg-white border-2 border-purple-200 rounded-lg shadow-sm">
            <div className="p-6">
              <HelpCircle className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">Get personalized help</p>
              <button
                onClick={toggleContact}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Ordering & Payment</h2>
            <div className="space-y-2">
              <AccordionItem
                id="item-1"
                question="How do I place an order?"
                answer="Browse our Electronics, Fashion, or other categories, add items to your cart, and checkout. Use an account or guest mode. We accept credit cards, PayPal, and Apple Pay."
              />
              <AccordionItem
                id="item-2"
                question="What payment methods do you accept?"
                answer="Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption."
              />
              <AccordionItem
                id="item-3"
                question="Can I modify or cancel my order?"
                answer="Yes, within 1 hour of placement. After that, contact support as orders enter fulfillment."
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Shipping & Delivery</h2>
            <div className="space-y-2">
              <AccordionItem
                id="shipping-1"
                question="How long does shipping take?"
                answer="3-5 days for standard, 2-3 for expedited, and next day for overnight. International shipping takes 7-14 days."
              />
              <AccordionItem
                id="shipping-2"
                question="Do you offer free shipping?"
                answer="Yes, on orders over $50 in the US. Express options have additional fees."
              />
              <AccordionItem
                id="shipping-3"
                question="How can I track my order?"
                answer="Track via email link or your account’s order history after shipping."
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Returns & Exchanges</h2>
            <div className="space-y-2">
              <AccordionItem
                id="returns-1"
                question="What is your return policy?"
                answer="30-day return for unused items in original packaging. Prepaid labels provided."
              />
              <AccordionItem
                id="returns-2"
                question="How do I start a return?"
                answer="Log in, go to order history, select 'Return Item,' and follow the prompts."
              />
              <AccordionItem
                id="returns-3"
                question="When will I receive my refund?"
                answer="3-5 days after receipt, appearing on your payment method in 5-10 days."
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Account & Technical</h2>
            <div className="space-y-2">
              <AccordionItem
                id="account-1"
                question="How do I create an account?"
                answer="Click 'Sign Up' or create one at checkout with your email and password."
              />
              <AccordionItem
                id="account-2"
                question="I forgot my password. How do I reset it?"
                answer="Use 'Forgot Password' on the login page; check spam if no email arrives."
              />
              <AccordionItem
                id="account-3"
                question="Is my personal information secure?"
                answer="Yes, with SSL encryption and compliance with data protection laws."
              />
            </div>
          </div>
        </div>

        {/* Contact Us Page */}
        {isContactOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Contact Us</h2>
              <p className="mb-4">Our support team is here to assist you:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> <a href="mailto:support@yourstore.com" className="text-purple-600 hover:underline">support@yourstore.com</a> (Response within 24 hours)</li>
                <li><strong>Phone (US):</strong> +1-800-555-1234 (9 AM - 9 PM EEST)</li>
                <li><strong>Phone (International):</strong> +44-20-1234-5678 (9 AM - 6 PM GMT)</li>
                <li><strong>Live Chat:</strong> Available 24/7 on this page</li>
              </ul>
              <button
                onClick={toggleContact}
                className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Chat Interface */}
        {isChatOpen && (
          <div className="fixed bottom-4 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-4 border-b bg-purple-600 text-white font-semibold">
              Chat with Support
              <button
                onClick={toggleChat}
                className="ml-2 text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
            <div className="h-64 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}