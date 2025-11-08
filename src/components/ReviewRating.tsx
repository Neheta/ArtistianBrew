import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Star, ThumbsUp, MessageCircle, Smile, Meh, Frown, PlusCircle
} from 'lucide-react';

interface ReviewRatingProps {
  onNavigate: (page: string) => void;
  user?: any;
  onLogout?: () => void;
}

export function ReviewRating({ onNavigate, user, onLogout }: ReviewRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const reviews = [
    {
      user: 'Emma Wilson',
      avatar: '👩',
      rating: 5,
      date: '2 days ago',
      package: 'Bali Paradise Escape',
      sentiment: 'positive',
      text: 'Absolutely amazing experience! The hotel was stunning, and the guides were incredibly knowledgeable. Every detail was perfectly planned.',
      likes: 24,
      helpful: true,
    },
    {
      user: 'James Chen',
      avatar: '👨',
      rating: 4,
      date: '1 week ago',
      package: 'European Grand Tour',
      sentiment: 'positive',
      text: 'Great trip overall. The destinations were beautiful and well-organized. Only minor issue was some transport delays, but the team handled it well.',
      likes: 18,
      helpful: false,
    },
    {
      user: 'Sofia Rodriguez',
      avatar: '👩‍🦰',
      rating: 5,
      date: '2 weeks ago',
      package: 'Tokyo Cultural Experience',
      sentiment: 'positive',
      text: 'Best vacation ever! The AI recommendations were spot-on. Discovered hidden gems I would have never found on my own.',
      likes: 42,
      helpful: true,
    },
    {
      user: 'Michael Brown',
      avatar: '👨‍💼',
      rating: 3,
      date: '3 weeks ago',
      package: 'Dubai Adventure',
      sentiment: 'neutral',
      text: 'Good experience but felt rushed at times. More time at each location would have been better. Staff was very helpful though.',
      likes: 12,
      helpful: false,
    },
  ];

  const topRatedPackages = [
    {
      name: 'Bali Paradise Escape',
      image: 'https://images.unsplash.com/photo-1702743599501-a821d0b38b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzU5OTUwNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 856,
    },
    {
      name: 'Santorini Luxury',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzU5OTQ3MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 642,
    },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 75, count: 642 },
    { stars: 4, percentage: 15, count: 128 },
    { stars: 3, percentage: 6, count: 51 },
    { stars: 2, percentage: 2, count: 17 },
    { stars: 1, percentage: 2, count: 18 },
  ];

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <Smile className="w-5 h-5 text-green-500" />;
      case 'neutral':
        return <Meh className="w-5 h-5 text-yellow-500" />;
      case 'negative':
        return <Frown className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      <Navigation currentPage="explore" onNavigate={onNavigate} user={user} onLogout={onLogout} />

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl mb-2">Reviews & Ratings</h1>
          <p className="text-xl text-gray-600">See what travelers are saying</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add Review */}
            {user && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 border-teal-100">
                  <h3 className="mb-4">Write a Review</h3>
                  <div className="mb-4">
                    <Label className="mb-2 block">Your Rating</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoveredRating || rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="review">Your Review</Label>
                    <Textarea
                      id="review"
                      placeholder="Share your experience..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="min-h-[120px] mt-2"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Submit Review
                  </Button>
                </Card>
              </motion.div>
            )}

            {/* Reviews */}
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 border-teal-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-2xl flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="mb-1">{review.user}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            {getSentimentIcon(review.sentiment)}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">{review.date}</div>
                      </div>

                      <Badge variant="secondary" className="bg-teal-50 text-teal-700 mb-3">
                        {review.package}
                      </Badge>

                      <p className="text-gray-700 mb-4">{review.text}</p>

                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors">
                          <ThumbsUp className={`w-4 h-4 ${review.helpful ? 'fill-teal-600 text-teal-600' : ''}`} />
                          Helpful ({review.likes})
                        </button>
                        <button className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Overall Rating */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 border-teal-100">
                <h3 className="mb-4">Overall Rating</h3>
                <div className="text-center mb-6">
                  <div className="text-5xl text-teal-600 mb-2">4.8</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Based on 856 reviews</div>
                </div>

                <div className="space-y-2">
                  {ratingDistribution.map((dist) => (
                    <div key={dist.stars} className="flex items-center gap-3">
                      <div className="text-sm w-6">{dist.stars}★</div>
                      <Progress value={dist.percentage} className="flex-1 h-2" />
                      <div className="text-sm text-gray-600 w-12 text-right">{dist.count}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Top Rated Packages */}
            <Card className="p-6 border-teal-100">
              <h3 className="mb-4">Top Rated Packages</h3>
              <div className="space-y-4">
                {topRatedPackages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => onNavigate('destination')}
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-1">{pkg.name}</div>
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{pkg.rating}</span>
                      </div>
                      <div className="text-xs text-gray-600">{pkg.reviews} reviews</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
