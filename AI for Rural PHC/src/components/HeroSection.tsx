import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Heart, Cross, Leaf } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Health Analysis</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Personal
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Health Assistant
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get instant, AI-powered health guidance based on your symptoms. 
              Receive personalized recommendations for precautions, medicines, diet, and wellness.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onGetStarted}
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow"
            >
              <Shield className="h-5 w-5 mr-2" />
              Analyze My Symptoms
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6">
              <Cross className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Symptom Analysis</h3>
              <p className="text-white/80 text-sm">Advanced AI analysis of multiple symptoms</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6">
              <Shield className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Health Guidance</h3>
              <p className="text-white/80 text-sm">Personalized precautions and care tips</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6">
              <Leaf className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Diet & Wellness</h3>
              <p className="text-white/80 text-sm">Nutrition and exercise recommendations</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6">
              <Heart className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Trusted Results</h3>
              <p className="text-white/80 text-sm">Medical-grade analysis with disclaimers</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;