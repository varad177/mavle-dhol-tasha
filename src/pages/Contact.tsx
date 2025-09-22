import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "बुकिंग विनंती प्राप्त झाली!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      location: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-marathi text-primary mb-4">
            संपर्क आणि बुकिंग
          </h1>
          <p className="text-xl md:text-2xl font-english text-muted-foreground mb-8">
            Contact & Booking Information
          </p>
          <div className="w-24 h-1 gradient-saffron mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-cultural">
            <CardHeader>
              <CardTitle className="text-2xl font-marathi text-primary">
                बुकिंग फॉर्म
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out this form to book our pathak for your event
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ganpati">Ganpati Festival</SelectItem>
                        <SelectItem value="diwali">Diwali Pahat</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="procession">Procession</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="community">Community Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Event Location *</Label>
                  <Input
                    id="location"
                    placeholder="Event venue address"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your event requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-saffron hover:scale-105 transition-bounce shadow-cultural"
                >
                  बुकिंग विनंती पाठवा (Send Booking Request)
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-cultural">
              <CardHeader>
                <CardTitle className="text-2xl font-marathi text-primary">
                  संपर्क माहिती
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Dombivli West, Mothagaon<br />
                      Dombivli, Thane, Maharashtra<br />
                      India - 421202
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-primary hover:underline">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-muted-foreground">Call for immediate booking</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919876543210" className="text-primary hover:underline">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-muted-foreground">Quick booking via WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@mavleamhi.com" className="text-primary hover:underline">
                      info@mavleamhi.com
                    </a>
                    <p className="text-sm text-muted-foreground">For detailed inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <a href="#" className="text-primary hover:underline">
                      @mavleamhi_dholtasha
                    </a>
                    <p className="text-sm text-muted-foreground">Follow for latest updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-cultural">
              <CardHeader>
                <CardTitle className="text-xl font-marathi text-primary">
                  उपलब्धता
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">Available 24/7</p>
                    <p className="text-sm text-muted-foreground">For emergency bookings</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Peak Season:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ganpati Festival (August-September)</li>
                    <li>• Diwali Season (October-November)</li>
                    <li>• Wedding Season (November-February)</li>
                  </ul>
                  <p className="text-sm text-accent font-medium">
                    Book early during peak seasons!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-cultural">
              <CardHeader>
                <CardTitle className="text-xl font-marathi text-primary">
                  स्थान
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Dombivli West, Maharashtra</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="text-center mt-16">
          <div className="gradient-cultural rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold font-marathi mb-4">
              त्वरित बुकिंगसाठी
            </h2>
            <p className="text-lg mb-6 opacity-90">
              For immediate booking, call us directly or send a WhatsApp message
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-accent hover:scale-105 transition-bounce shadow-gold"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-bounce shadow-gold"
                asChild
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;