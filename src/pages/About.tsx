import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-marathi text-primary mb-4">
            आमच्याबद्दल
          </h1>
          <p className="text-xl md:text-2xl font-english text-muted-foreground">
            About Mavle Amhi Dhol-Tashache
          </p>
          <div className="w-24 h-1 gradient-saffron mx-auto mt-6 rounded"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-marathi text-primary">
              पथक नव्हे परंपरा
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Mavle Amhi Dhol-Tashache</strong> is not just a performance group - we are 
              custodians of Maharashtra's rich cultural heritage. Established in 2017 in 
              Dombivli West, our pathak has dedicated itself to preserving and promoting 
              the traditional art of Dhol-Tasha performances.
            </p>
            <p className="text-lg leading-relaxed">
              Our tagline <span className="font-marathi font-semibold text-primary">
              "पथक नव्हे परंपरा"</span> (Not just a group, but tradition) reflects our 
              deep commitment to maintaining the authentic spirit of this ancient art form 
              while bringing it to contemporary celebrations and cultural events.
            </p>
            <p className="text-lg leading-relaxed">
              Based in Mothagaon, Dombivli, Thane district of Maharashtra, we have become 
              a trusted name for Ganpati processions, Diwali Pahat celebrations, weddings, 
              and various cultural events throughout the region.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-cultural hover-cultural">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-marathi text-primary mb-4">
                  आमचे मूल्य
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-accent mt-0.5" />
                    <span>Preserving traditional Maharashtrian culture</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-accent mt-0.5" />
                    <span>Building community through music</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-accent mt-0.5" />
                    <span>Excellence in every performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5" />
                    <span>Commitment to cultural events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-cultural text-white shadow-deep">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  To preserve, promote, and share the rich tradition of Dhol-Tasha 
                  performances with future generations while bringing authentic cultural 
                  experiences to every celebration we are part of.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-marathi text-primary text-center mb-12">
            आमचा प्रवास
          </h2>
          <div className="space-y-8">
            <Card className="shadow-cultural">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center text-white font-bold">
                    2017
                  </div>
                  <h3 className="text-xl font-bold">Foundation</h3>
                </div>
                <p className="text-muted-foreground">
                  Mavle Amhi Dhol-Tashache was established in Dombivli West with a vision 
                  to preserve traditional Maharashtrian cultural performances.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-cultural">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-maroon rounded-full flex items-center justify-center text-white font-bold">
                    2018
                  </div>
                  <h3 className="text-xl font-bold">First Major Performances</h3>
                </div>
                <p className="text-muted-foreground">
                  We participated in our first major Ganpati processions and established 
                  our reputation for authentic and energetic performances.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-cultural">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center text-foreground font-bold">
                    2024
                  </div>
                  <h3 className="text-xl font-bold">Today</h3>
                </div>
                <p className="text-muted-foreground">
                  With a 5.0 rating on JustDial and numerous successful performances, 
                  we continue to be the preferred choice for cultural celebrations 
                  across Thane and Mumbai regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Makes Us Special */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center shadow-cultural hover-cultural">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-marathi text-primary mb-3">
                प्रामाणिक परंपरा
              </h3>
              <p className="text-muted-foreground">
                We maintain authentic traditional techniques and rhythms passed down 
                through generations of Dhol-Tasha masters.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-cultural hover-cultural">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-marathi text-primary mb-3">
                अनुभवी कलाकार
              </h3>
              <p className="text-muted-foreground">
                Our team consists of skilled musicians who have trained under master 
                performers and understand the nuances of traditional rhythms.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-cultural hover-cultural">
            <CardContent className="p-8">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold font-marathi text-primary mb-3">
                मन लावून सेवा
              </h3>
              <p className="text-muted-foreground">
                Every performance is delivered with passion and dedication, ensuring 
                your cultural celebration becomes truly memorable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;