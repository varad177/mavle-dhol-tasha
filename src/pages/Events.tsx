import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Gudi Padwa Celebration',
      marathi: 'गुढी पाडवा उत्सव',
      date: '2024-04-09',
      time: '10:00 AM',
      location: 'Dombivli East',
      type: 'Festival',
      status: 'upcoming',
      description: 'Traditional Maharashtrian New Year celebration with cultural programs',
    },
    {
      id: 2,
      title: 'Wedding Celebration',
      marathi: 'लग्न समारंभ',
      date: '2024-04-15',
      time: '7:00 PM',
      location: 'Kalyan',
      type: 'Wedding',
      status: 'upcoming',
      description: 'Traditional wedding procession and celebration',
    },
    {
      id: 3,
      title: 'Community Festival',
      marathi: 'सामुदायिक उत्सव',
      date: '2024-04-22',
      time: '6:00 PM',
      location: 'Thane',
      type: 'Community',
      status: 'upcoming',
      description: 'Local community cultural celebration',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Ganpati Visarjan 2024',
      marathi: 'गणपती विसर्जन २०२४',
      date: '2024-09-17',
      location: 'Dombivli West',
      type: 'Festival',
      status: 'completed',
      highlight: 'Over 5000 people attended',
      rating: 5.0,
    },
    {
      id: 2,
      title: 'Diwali Pahat 2024',
      marathi: 'दिवाळी पहाट २०२४',
      date: '2024-11-01',
      location: 'Mothagaon',
      type: 'Festival',
      status: 'completed',
      highlight: 'Traditional early morning celebration',
      rating: 5.0,
    },
    {
      id: 3,
      title: 'Navratri Celebration',
      marathi: 'नवरात्री उत्सव',
      date: '2024-10-15',
      location: 'Kalyan',
      type: 'Festival',
      status: 'completed',
      highlight: '9 days of continuous performances',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Corporate Event',
      marathi: 'कॉर्पोरेट कार्यक्रम',
      date: '2024-08-15',
      location: 'Mumbai',
      type: 'Corporate',
      status: 'completed',
      highlight: 'Independence Day celebration',
      rating: 5.0,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'festival': return 'bg-primary text-primary-foreground';
      case 'wedding': return 'bg-secondary text-secondary-foreground';
      case 'community': return 'bg-accent text-accent-foreground';
      case 'corporate': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-marathi text-primary mb-4">
            कार्यक्रम
          </h1>
          <p className="text-xl md:text-2xl font-english text-muted-foreground mb-8">
            Events & Schedule
          </p>
          <div className="w-24 h-1 gradient-saffron mx-auto rounded"></div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-marathi text-primary mb-8">
            आगामी कार्यक्रम
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-cultural hover-cultural">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-english mb-1">
                        {event.title}
                      </CardTitle>
                      <p className="text-primary font-marathi font-medium">
                        {event.marathi}
                      </p>
                    </div>
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="hover-cultural" asChild>
              <Link to="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Event
              </Link>
            </Button>
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold font-marathi text-primary mb-8">
            मागील कार्यक्रम
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="shadow-cultural hover-cultural">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-english mb-1">
                        {event.title}
                      </h3>
                      <p className="text-primary font-marathi font-medium">
                        {event.marathi}
                      </p>
                    </div>
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">
                          {event.highlight}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold">{event.rating}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(event.rating) 
                                  ? 'text-accent' 
                                  : 'text-muted'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 gradient-maroon rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold font-marathi mb-4">
            आमच्यासोबत तुमचा कार्यक्रम साजरा करा
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Book Mavle Amhi Dhol-Tashache for your upcoming cultural celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-accent hover:scale-105 transition-bounce shadow-gold"
              asChild
            >
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Performance
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-secondary transition-cultural"
              asChild
            >
              <Link to="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;