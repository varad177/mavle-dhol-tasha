import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, Star, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-dhol-tasha.jpg';
import ganpatiImage from '@/assets/ganpati-performance.jpg';
import diwaliImage from '@/assets/diwali-pahat.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 pattern-mandala animate-rotate-slow opacity-20"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          {/* Traditional Overlay Pattern */}
          <div className="absolute inset-0 pattern-paisley opacity-10"></div>
        </div>
        
        {/* Floating Cultural Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-traditional rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 border-traditional rounded-full animate-float delay-500 opacity-30"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 gradient-gold rounded-full animate-bounce-gentle delay-1000 opacity-40"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Traditional Border Decoration */}
            <div className="inline-block relative">
              <div className="absolute -inset-6 border-ornate rounded-lg animate-pulse-glow"></div>
              <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-bold font-marathi leading-tight animate-fade-in-up shadow-text">
                मावळे आम्ही ढोल ताशांचे
              </h1>
            </div>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl lg:text-4xl font-marathi text-accent animate-slide-in-left delay-300 font-bold">
                पथक नव्हे परंपरा
              </p>
              {/* Decorative Elements */}
              <div className="absolute -left-8 top-1/2 w-6 h-0.5 gradient-gold animate-slide-in-left delay-500"></div>
              <div className="absolute -right-8 top-1/2 w-6 h-0.5 gradient-gold animate-slide-in-right delay-500"></div>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl font-english max-w-3xl mx-auto opacity-95 animate-fade-in-up delay-700 leading-relaxed">
              Traditional Dhol-Tasha pathak from Dombivli West, Maharashtra.<br/>
              <span className="text-accent font-semibold">Bringing cultural heritage to life through energetic performances since 2017.</span>
            </p>
            
            {/* Traditional Divider */}
            <div className="flex items-center justify-center my-8 animate-scale-in delay-1000">
              <div className="w-16 h-0.5 gradient-cultural"></div>
              <div className="mx-4 w-3 h-3 gradient-gold rounded-full"></div>
              <div className="w-16 h-0.5 gradient-cultural"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="gradient-saffron hover:scale-110 transition-bounce shadow-cultural text-lg px-10 py-7 font-semibold animate-scale-in delay-1000 hover-glow border-ornate relative overflow-hidden"
                asChild
              >
                <Link to="/contact" className="relative z-10">
                  <Calendar className="w-6 h-6 mr-3 animate-bounce-gentle" />
                  Book Performance
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-cultural text-lg px-10 py-7 font-semibold animate-scale-in delay-1000 hover-lift backdrop-blur-sm bg-white/10"
                asChild
              >
                <Link to="/gallery" className="relative">
                  <span className="relative z-10">View Gallery</span>
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-cultural opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Traditional Header */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 gradient-saffron"></div>
                <div className="w-4 h-4 gradient-gold rounded-full animate-pulse-glow"></div>
                <div className="w-12 h-0.5 gradient-saffron"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-marathi text-primary animate-scale-in">
                आमच्याबद्दल
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-1 gradient-cultural rounded-full animate-shimmer bg-size-200"></div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-english font-semibold animate-slide-in-left delay-300">
              More than just a performance group - we are custodians of tradition
            </p>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-cultural border border-border/50 animate-slide-in-right delay-500 hover-lift">
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                Established in <span className="text-primary font-bold">2017</span> in Dombivli West, we have proudly carried forward the 
                rich tradition of Dhol-Tasha performances. Our pathak brings the authentic 
                spirit of Maharashtra's cultural heritage to <span className="text-accent font-semibold">Ganpati processions</span>, <span className="text-accent font-semibold">Diwali 
                Pahat celebrations</span>, and various cultural events.
              </p>
            </div>
            
            <div className="animate-scale-in delay-700">
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-cultural border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold relative overflow-hidden"
                asChild
              >
                <Link to="/about">
                  <span className="relative z-10">Learn More About Us</span>
                  <div className="absolute inset-0 bg-primary scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-cultural relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 border-2 border-white/20 rounded-full animate-float delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce-gentle delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-marathi text-white mb-4">
              आमची वैशिष्ट्ये
            </h2>
            <p className="text-xl text-white/90 font-english">Our Excellence & Expertise</p>
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/15 backdrop-blur-lg border-white/30 text-white hover-lift transition-all duration-500 animate-scale-in delay-100 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 relative">
                  <Star className="w-16 h-16 mx-auto text-accent animate-pulse-glow" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold font-english mb-3">5.0 Rating</h3>
                <p className="text-white/90 leading-relaxed">Highly rated on JustDial for authentic performances</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/15 backdrop-blur-lg border-white/30 text-white hover-lift transition-all duration-500 animate-scale-in delay-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 relative">
                  <Users className="w-16 h-16 mx-auto text-accent animate-bounce-gentle" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
                </div>
                <h3 className="text-2xl font-bold font-english mb-3">Expert Team</h3>
                <p className="text-white/90 leading-relaxed">Skilled musicians preserving traditional art</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/15 backdrop-blur-lg border-white/30 text-white hover-lift transition-all duration-500 animate-scale-in delay-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 relative">
                  <Award className="w-16 h-16 mx-auto text-accent animate-float" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
                <h3 className="text-2xl font-bold font-english mb-3">Since 2017</h3>
                <p className="text-white/90 leading-relaxed">7+ years of cultural excellence</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/15 backdrop-blur-lg border-white/30 text-white hover-lift transition-all duration-500 animate-scale-in delay-400 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 relative">
                  <Calendar className="w-16 h-16 mx-auto text-accent animate-pulse-glow delay-300" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse delay-700"></div>
                </div>
                <h3 className="text-2xl font-bold font-english mb-3">All Events</h3>
                <p className="text-white/90 leading-relaxed">Ganpati, Diwali, Processions & More</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20 bg-background relative">
        {/* Traditional Pattern Background */}
        <div className="absolute inset-0 pattern-paisley opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Traditional Header Design */}
            <div className="inline-flex items-center gap-6 mb-6">
              <div className="w-8 h-8 gradient-saffron rounded-full animate-spin-slow"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-marathi text-primary">
                अलीकडील कार्यक्रम
              </h2>
              <div className="w-8 h-8 gradient-maroon rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-english font-semibold">
              Recent Performances & Events
            </p>
            {/* Decorative Border */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-16 h-0.5 gradient-saffron"></div>
                <div className="w-3 h-3 gradient-gold rounded-full animate-pulse"></div>
                <div className="w-24 h-0.5 gradient-cultural"></div>
                <div className="w-3 h-3 gradient-gold rounded-full animate-pulse delay-300"></div>
                <div className="w-16 h-0.5 gradient-maroon"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="overflow-hidden hover-lift shadow-cultural transition-all duration-500 animate-slide-in-left border-ornate group">
              <div className="relative h-80">
                <img 
                  src={ganpatiImage} 
                  alt="Ganpati Festival Performance - Traditional Dhol Tasha performance during Ganpati procession"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                {/* Traditional Corner Decoration */}
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-accent rounded-full animate-pulse-glow"></div>
                <div className="absolute top-4 right-4 w-6 h-6 gradient-gold rounded-full animate-bounce-gentle"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold font-marathi mb-2 animate-fade-in-up">
                      गणपती उत्सव 2024
                    </h3>
                    <div className="w-12 h-0.5 gradient-accent mb-3"></div>
                  </div>
                  <p className="text-base opacity-95 leading-relaxed">
                    Spectacular performance at Dombivli Ganpati procession bringing traditional energy to the streets
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover-lift shadow-cultural transition-all duration-500 animate-slide-in-right delay-300 border-ornate group">
              <div className="relative h-80">
                <img 
                  src={diwaliImage} 
                  alt="Diwali Pahat Celebration - Traditional early morning Diwali celebration with Dhol Tasha"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                {/* Traditional Corner Decoration */}
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-accent rounded-full animate-pulse-glow delay-500"></div>
                <div className="absolute top-4 right-4 w-6 h-6 gradient-gold rounded-full animate-bounce-gentle delay-700"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold font-marathi mb-2 animate-fade-in-up delay-300">
                      दिवाळी पहाट 2024
                    </h3>
                    <div className="w-12 h-0.5 gradient-accent mb-3"></div>
                  </div>
                  <p className="text-base opacity-95 leading-relaxed">
                    Traditional early morning Diwali celebration awakening the community with rhythmic beats
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12 animate-scale-in delay-500">
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-glow border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-semibold relative overflow-hidden group"
              asChild
            >
              <Link to="/events">
                <span className="relative z-10 flex items-center gap-3">
                  View All Events
                  <div className="w-2 h-2 gradient-gold rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-maroon text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pattern-mandala opacity-10 animate-rotate-slow"></div>
        <div className="absolute top-0 left-0 w-full h-2 gradient-gold"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 gradient-gold"></div>
        
        {/* Floating Traditional Elements */}
        <div className="absolute top-16 left-16 w-20 h-20 border-2 border-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-bounce-gentle delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-accent rounded-full animate-bounce-gentle delay-1000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Traditional Header */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-white/60"></div>
                <div className="w-6 h-6 border-2 border-white rounded-full animate-pulse-glow"></div>
                <div className="w-12 h-0.5 bg-white/60"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-marathi leading-tight animate-scale-in">
                तुमच्या कार्यक्रमासाठी आम्हाला बुक करा
              </h2>
              
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-1 bg-white/40 rounded-full animate-shimmer bg-size-200" 
                     style={{background: 'linear-gradient(90deg, transparent, white, transparent)', backgroundSize: '200% 100%'}}></div>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-english font-semibold animate-slide-in-left delay-300 text-accent">
              Book us for your cultural events and celebrations
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 animate-slide-in-right delay-500 hover-lift">
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                Experience the authentic energy of traditional Dhol-Tasha performances.<br/>
                <span className="text-accent font-semibold">Perfect for Ganpati festivals, Diwali celebrations, weddings, and cultural events.</span>
              </p>
            </div>
            
            {/* Traditional Divider */}
            <div className="flex items-center justify-center my-10 animate-scale-in delay-700">
              <div className="w-20 h-0.5 bg-white/60"></div>
              <div className="mx-6 w-4 h-4 bg-accent rounded-full animate-pulse-glow"></div>
              <div className="w-20 h-0.5 bg-white/60"></div>
            </div>
            
            <div className="animate-scale-in delay-1000">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-accent hover:scale-110 transition-bounce shadow-gold text-xl px-12 py-8 font-bold relative overflow-hidden group border-ornate"
                asChild
              >
                <Link to="/contact" className="relative z-10">
                  <Calendar className="w-7 h-7 mr-4 animate-bounce-gentle" />
                  <span>Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="text-white/80 text-lg animate-fade-in-up delay-1000">
              <p className="font-marathi">तातडीने संपर्क करा | Call for immediate booking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;