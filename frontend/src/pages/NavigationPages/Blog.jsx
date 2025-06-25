
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Wireless Audio: What to Expect in 2024",
      excerpt:
        "Explore the latest trends in wireless audio technology and discover what innovations are coming to headphones and speakers this year.",
      category: "Technology",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      id: 2,
      title: "Smart Home Security: Essential Gadgets for Modern Living",
      excerpt: "Learn about the must-have security gadgets that can protect your home and give you peace of mind.",
      category: "Smart Home",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Tech: Eco-Friendly Gadgets That Make a Difference",
      excerpt: "Discover how choosing the right tech products can help reduce your environmental footprint.",
      category: "Sustainability",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 4,
      title: "Gaming Accessories That Will Elevate Your Setup",
      excerpt: "From mechanical keyboards to high-refresh monitors, here are the accessories every gamer needs.",
      category: "Gaming",
      author: "Alex Thompson",
      date: "March 8, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 5,
      title: "Productivity Hacks: Tech Tools for Remote Workers",
      excerpt: "Maximize your work-from-home productivity with these essential tech tools and gadgets.",
      category: "Productivity",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 6,
      title: "Camera Gear for Content Creators: A Complete Guide",
      excerpt:
        "Whether you're just starting or looking to upgrade, here's everything you need to know about camera equipment.",
      category: "Photography",
      author: "David Kim",
      date: "March 3, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ]

  const categories = ["All", "Technology", "Smart Home", "Gaming", "Productivity", "Photography", "Sustainability"]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">INSIGHTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest tech trends, product reviews, and expert insights from our team.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Featured Article</h2>
          <div className="bg-white border-2 border-purple-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author}
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-white border-2 border-purple-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative h-48">
                  <img src={post.image || "/placeholder.svg"} alt={post.title}  className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                      <Clock className="w-3 h-3 ml-3 mr-1" />
                      {post.readTime}
                    </div>
                    <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-1 px-3 rounded-md text-sm transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-purple-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest tech insights, product reviews, and exclusive content
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
