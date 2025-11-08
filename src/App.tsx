import { motion } from 'motion/react';
import { 
  Coffee, 
  Award, 
  Leaf, 
  TruckIcon, 
  Star,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';

export default function App() {
  const menuItems = [
    {
      name: 'Signature Espresso',
      description: 'Rich, bold, and perfectly balanced',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1634709170162-23a76022e9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZXNwcmVzc28lMjBjb2ZmZWV8ZW58MXx8fHwxNzYyNTg3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Velvet Cappuccino',
      description: 'Smooth microfoam with artistic latte art',
      price: '$5.25',
      image: 'https://images.unsplash.com/photo-1638202448050-bddae16dd9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY29mZmVlJTIwY3VwfGVufDF8fHx8MTc2MjU1NTMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Caramel Macchiato',
      description: 'Sweet, layered perfection',
      price: '$5.75',
      image: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGhlYXJ0fGVufDF8fHx8MTc2MjU4NzEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Cold Brew Reserve',
      description: 'Smooth, refreshing, never bitter',
      price: '$4.95',
      image: 'https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmt8ZW58MXx8fHwxNzYyNDgzNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Mocha Delight',
      description: 'Rich chocolate meets premium espresso',
      price: '$5.50',
      image: 'https://images.unsplash.com/photo-1630439922869-50635c8b2335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG91cmluZyUyMGxhdHRlJTIwYXJ0fGVufDF8fHx8MTc2MjUyNTE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Vanilla Latte',
      description: 'Classic comfort in every sip',
      price: '$5.00',
      image: 'https://images.unsplash.com/photo-1627741162666-c588fc1689da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MjU2OTkxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const features = [
    {
      icon: Coffee,
      title: 'Freshly Roasted',
      description: 'Daily roasted beans for optimal flavor',
    },
    {
      icon: Leaf,
      title: 'Organic Beans',
      description: '100% certified organic and sustainable',
    },
    {
      icon: Award,
      title: 'Award-Winning Baristas',
      description: 'Expertly trained coffee artisans',
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Hot coffee at your doorstep in 30 mins',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1684006997322-6a5128f44816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNDg2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYyNTEyMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1630439922869-50635c8b2335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG91cmluZyUyMGxhdHRlJTIwYXJ0fGVufDF8fHx8MTc2MjUyNTE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1627741162666-c588fc1689da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MjU2OTkxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Best coffee in town! The ambiance is cozy and the baristas are incredibly skilled.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Their signature espresso is absolutely divine. Worth every penny!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
    {
      name: 'Emma Davis',
      rating: 5,
      comment: 'Love the sustainable approach and the coffee tastes amazing. Highly recommend!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F3EF]/95 backdrop-blur-sm border-b border-[#3B2F2F]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-[#3B2F2F]" />
              <span className="text-2xl text-[#3B2F2F] font-serif">Artisan Brew</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-[#3B2F2F] hover:text-[#C19A6B] transition-colors">Menu</a>
              <a href="#about" className="text-[#3B2F2F] hover:text-[#C19A6B] transition-colors">About</a>
              <a href="#gallery" className="text-[#3B2F2F] hover:text-[#C19A6B] transition-colors">Gallery</a>
              <a href="#reviews" className="text-[#3B2F2F] hover:text-[#C19A6B] transition-colors">Reviews</a>
              <Button className="bg-[#3B2F2F] hover:bg-[#181818] text-white rounded-full px-6">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1630439922869-50635c8b2335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG91cmluZyUyMGxhdHRlJTIwYXJ0fGVufDF8fHx8MTc2MjUyNTE2OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barista pouring latte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818]/70 to-[#3B2F2F]/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl text-white mb-6 font-serif">
              Brewed to Perfection
            </h1>
            <p className="text-xl md:text-2xl text-[#F7F3EF] mb-8 max-w-2xl mx-auto">
              Artisan coffee crafted by Neheta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#C19A6B] hover:bg-[#C19A6B]/90 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                Order Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#3B2F2F] text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              >
                Explore Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-[#3B2F2F] mb-4 font-serif">Signature Menu</h2>
          <p className="text-lg text-[#3B2F2F]/70 max-w-2xl mx-auto">
            Each cup is a masterpiece, crafted with the finest beans and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white rounded-3xl">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#C19A6B] text-white border-0 px-4 py-2 text-lg rounded-full">
                      {item.price}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-[#3B2F2F] mb-2 font-serif">{item.name}</h3>
                  <p className="text-[#3B2F2F]/70">{item.description}</p>
                  <Button className="w-full mt-4 bg-[#3B2F2F] hover:bg-[#181818] text-white rounded-full">
                    Add to Order
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzYyNTEyMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Coffee beans"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-5xl text-[#3B2F2F] font-serif">Our Story</h2>
              <p className="text-lg text-[#3B2F2F]/80 leading-relaxed">
                Since 2015, we've been on a mission to bring you the finest coffee experience. 
                Every bean is carefully sourced from sustainable farms across the world, roasted 
                to perfection in small batches, and brewed with passion by our award-winning baristas.
              </p>
              <p className="text-lg text-[#3B2F2F]/80 leading-relaxed">
                Our commitment to quality, sustainability, and community has made us more than 
                just a coffee shop—we're a gathering place for coffee lovers who appreciate 
                craftsmanship and authenticity in every cup.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-4xl text-[#C19A6B] mb-2 font-serif">8+</div>
                  <div className="text-[#3B2F2F]/70">Years Experience</div>
                </div>
                <div className="w-px bg-[#3B2F2F]/20"></div>
                <div className="text-center">
                  <div className="text-4xl text-[#C19A6B] mb-2 font-serif">50k+</div>
                  <div className="text-[#3B2F2F]/70">Happy Customers</div>
                </div>
                <div className="w-px bg-[#3B2F2F]/20"></div>
                <div className="text-center">
                  <div className="text-4xl text-[#C19A6B] mb-2 font-serif">15+</div>
                  <div className="text-[#3B2F2F]/70">Awards Won</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#3B2F2F] mb-4 font-serif">Why Choose Us</h2>
            <p className="text-lg text-[#3B2F2F]/70 max-w-2xl mx-auto">
              We go the extra mile to ensure every cup exceeds your expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-3xl group hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#C19A6B]/10 rounded-full flex items-center justify-center group-hover:bg-[#C19A6B] transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-[#C19A6B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl text-[#3B2F2F] mb-3 font-serif">{feature.title}</h3>
                  <p className="text-[#3B2F2F]/70">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#3B2F2F] mb-4 font-serif">Gallery</h2>
            <p className="text-lg text-[#3B2F2F]/70 max-w-2xl mx-auto">
              A glimpse into our world of coffee craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#3B2F2F] mb-4 font-serif">What Our Customers Say</h2>
            <p className="text-lg text-[#3B2F2F]/70 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-3xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C19A6B] text-[#C19A6B]" />
                    ))}
                  </div>
                  <p className="text-[#3B2F2F]/80 mb-6 italic leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center gap-3">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="text-[#3B2F2F]">{review.name}</div>
                      <div className="text-sm text-[#3B2F2F]/60">Verified Customer</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1627741162666-c588fc1689da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MjU2OTkxMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Coffee shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3B2F2F]/85"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6 font-serif">
            Order Your Perfect Cup Today
          </h2>
          <p className="text-xl text-[#F7F3EF]/90 mb-8">
            Experience the art of exceptional coffee, delivered to your doorstep
          </p>
          <Button className="bg-[#C19A6B] hover:bg-[#C19A6B]/90 text-white text-lg px-10 py-6 rounded-full shadow-xl">
            Get Started
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181818] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8 text-[#C19A6B]" />
                <span className="text-2xl font-serif">Artisan Brew</span>
              </div>
              <p className="text-white/70 mb-4">
                Crafting exceptional coffee experiences since 2015.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C19A6B] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C19A6B] rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#C19A6B] rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-serif">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-white/70 hover:text-[#C19A6B] transition-colors">Menu</a></li>
                <li><a href="#about" className="text-white/70 hover:text-[#C19A6B] transition-colors">About Us</a></li>
                <li><a href="#gallery" className="text-white/70 hover:text-[#C19A6B] transition-colors">Gallery</a></li>
                <li><a href="#reviews" className="text-white/70 hover:text-[#C19A6B] transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-serif">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-[#C19A6B] transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#C19A6B] transition-colors">FAQs</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#C19A6B] transition-colors">Shipping</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#C19A6B] transition-colors">Returns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-serif">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C19A6B]" />
                  <span>123 Coffee Street, Brew City, BC 12345</span>
                </li>
                <li className="flex items-center gap-2 text-white/70">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#C19A6B]" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-white/70">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#C19A6B]" />
                  <span>hello@artisanbrew.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2025 Artisan Brew. All rights reserved. Crafted with passion.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
