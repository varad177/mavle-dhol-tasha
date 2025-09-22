import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ganpatiImage from '@/assets/ganpati-performance.jpg';
import diwaliImage from '@/assets/diwali-pahat.jpg';
import heroImage from '@/assets/hero-dhol-tasha.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', marathi: 'सर्व' },
    { id: 'ganpati', name: 'Ganpati', marathi: 'गणपती' },
    { id: 'diwali', name: 'Diwali Pahat', marathi: 'दिवाळी पहाट' },
    { id: 'processions', name: 'Processions', marathi: 'मिरवणुका' },
    { id: 'events', name: 'Events', marathi: 'कार्यक्रम' },
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: ganpatiImage,
      title: 'Ganpati Festival Performance',
      marathi: 'गणपती उत्सव',
      category: 'ganpati',
      description: 'Energetic performance during Ganpati procession in Dombivli',
    },
    {
      id: 2,
      type: 'image',
      src: diwaliImage,
      title: 'Diwali Pahat Celebration',
      marathi: 'दिवाळी पहाट',
      category: 'diwali',
      description: 'Traditional early morning Diwali celebration with community',
    },
    {
      id: 3,
      type: 'image',
      src: heroImage,
      title: 'Team Performance',
      marathi: 'संघ प्रदर्शन',
      category: 'events',
      description: 'Our complete pathak showcasing traditional Dhol-Tasha artistry',
    },
    {
      id: 4,
      type: 'image',
      src: ganpatiImage,
      title: 'Cultural Procession',
      marathi: 'सांस्कृतिक मिरवणूक',
      category: 'processions',
      description: 'Leading a vibrant cultural procession through the streets',
    },
    {
      id: 5,
      type: 'image',
      src: diwaliImage,
      title: 'Festival Celebration',
      marathi: 'उत्सव साजरा',
      category: 'events',
      description: 'Bringing joy and energy to festival celebrations',
    },
    {
      id: 6,
      type: 'image',
      src: heroImage,
      title: 'Traditional Performance',
      marathi: 'पारंपारिक कार्यक्रम',
      category: 'ganpati',
      description: 'Authentic traditional performance showcasing our heritage',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-marathi text-primary mb-4">
            गॅलरी
          </h1>
          <p className="text-xl md:text-2xl font-english text-muted-foreground mb-8">
            Photos & Videos of Our Performances
          </p>
          <div className="w-24 h-1 gradient-saffron mx-auto rounded"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-cultural ${
                activeCategory === category.id 
                  ? 'gradient-saffron text-white shadow-cultural' 
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              <span className="font-english">{category.name}</span>
              <span className="font-marathi ml-2 text-sm">({category.marathi})</span>
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-cultural hover-cultural group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="bg-primary mb-2">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold font-english mb-2">
                  {item.title}
                </h3>
                <p className="text-primary font-marathi font-medium mb-3">
                  {item.marathi}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold font-marathi text-primary text-center mb-8">
            व्हिडिओ गॅलरी
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-cultural">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">Performance Video</p>
                    <p className="text-sm text-muted-foreground">Click to play</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Ganpati Festival 2024</h3>
                <p className="text-muted-foreground text-sm">
                  Complete performance video from our recent Ganpati celebration
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-cultural">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">Performance Video</p>
                    <p className="text-sm text-muted-foreground">Click to play</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Diwali Pahat 2024</h3>
                <p className="text-muted-foreground text-sm">
                  Traditional Diwali morning celebration with community participation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 gradient-cultural rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold font-marathi mb-4">
            तुमच्या कार्यक्रमाचा भाग व्हा
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Want to see your event featured in our gallery? Book us for your next celebration!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-secondary hover:bg-accent hover:scale-105 transition-bounce shadow-gold"
          >
            Book Performance
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;