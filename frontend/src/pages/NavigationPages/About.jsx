
export default function About() {
  return (
    <div className="min-h-screen bg-white py-8">
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-2">OUR JOURNEY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From a small startup to a trusted global brand, discover the journey that brought us here.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-16">
          {/* 2019 - The Beginning */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2019
                </div>
                <h2 className="text-2xl font-bold text-purple-600">The Beginning</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                It all started in a small garage in Silicon Valley. Our founder, Sarah Johnson, was frustrated with the
                lack of quality tech products at affordable prices. She had a vision: to create a platform that would
                democratize access to cutting-edge technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With just $5,000 in savings and an unwavering belief in her mission, Sarah launched our first website
                with 50 carefully curated products. The response was overwhelming – we sold out within the first month.
              </p>
            </div>
            <div>
              <img
                src="../../public/images/kevin-schmid-42MP7b-AJ-Q-unsplash.jpg"
                alt="Garage startup"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* 2020 - Growing Pains */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="../../public/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
                alt="Team working"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2020
                </div>
                <h2 className="text-2xl font-bold text-purple-600">Growing Pains</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The pandemic brought unexpected challenges, but also opportunities. As people worked from home, demand
                for tech products skyrocketed. We quickly expanded our team from 3 to 15 people and moved into our first
                real office.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This year taught us the importance of adaptability and customer service. We implemented 24/7 support and
                launched our first mobile app, making shopping even more convenient for our customers.
              </p>
            </div>
          </div>

          {/* 2021 - International Expansion */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2021
                </div>
                <h2 className="text-2xl font-bold text-purple-600">Going Global</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a solid foundation in the US market, we set our sights on international expansion. We launched in
                Canada, the UK, and Australia, adapting our platform to meet local needs and regulations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This expansion brought new challenges in logistics and customer service, but also incredible growth. We
                reached our first 10,000 customers and expanded our product catalog to over 500 items.
              </p>
            </div>
            <div>
              <img
                src="../../public/images/docusign-BbSBf5uv50A-unsplash.jpg"
                alt="Global expansion"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* 2022 - Innovation Focus */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="../../public/images/kvalifik-5Q07sS54D0Q-unsplash.jpg"
                alt="Innovation lab"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2022
                </div>
                <h2 className="text-2xl font-bold text-purple-600">Innovation Focus</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We established our Innovation Lab, partnering directly with manufacturers to bring exclusive products to
                market. Our team grew to 50+ employees across multiple countries, and we opened our first physical
                showroom in New York.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This year marked a turning point as we shifted from being just a retailer to becoming a technology
                curator, working closely with brands to develop products that truly meet customer needs.
              </p>
            </div>
          </div>

          {/* 2023 - Sustainability Initiative */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2023
                </div>
                <h2 className="text-2xl font-bold text-purple-600">Sustainable Future</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Recognizing our responsibility to the planet, we launched our sustainability initiative. We partnered
                with eco-friendly manufacturers, implemented carbon-neutral shipping, and started our electronics
                recycling program.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also reached 50,000 happy customers and expanded to 25 countries. Our commitment to sustainability
                resonated with customers, leading to our highest customer satisfaction scores yet.
              </p>
            </div>
            <div>
              <img
                src="../../public/images/docusign-BbSBf5uv50A-unsplash.jpg"
                alt="Sustainability"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* 2024 - Present */}
          <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  2024
                </div>
                <h2 className="text-2xl font-bold text-purple-600">Today & Beyond</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
                Today, we are proud to serve customers in over 25 countries with a catalog of 1,000+ carefully curated
                products. Our team of 75+ passionate individuals works tirelessly to bring you the latest in technology
                while maintaining our core values of quality, affordability, and exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                But this is just the beginning. We are working on exciting new initiatives including AI-powered product
                recommendations, augmented reality try-before-you-buy experiences, and expanding our sustainability
                efforts to achieve carbon neutrality by 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
                  Join Our Journey
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-md transition-colors duration-200">
                  Shop Our Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Recap */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-8">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white border-2 border-purple-200 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="font-bold text-purple-600 mb-2">Customer Obsession</h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make starts with asking: How does this benefit our customers?
                </p>
              </div>
            </div>

            <div className="text-center bg-white border-2 border-purple-200 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="font-bold text-purple-600 mb-2">Quality First</h3>
                <p className="text-gray-600 text-sm">
                  We never compromise on quality, carefully testing every product before it reaches you.
                </p>
              </div>
            </div>

            <div className="text-center bg-white border-2 border-purple-200 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="font-bold text-purple-600 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We are always looking for new ways to improve your shopping experience and bring you the latest tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
