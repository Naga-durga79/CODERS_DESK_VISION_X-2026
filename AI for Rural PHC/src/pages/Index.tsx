import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SymptomInput from '@/components/SymptomInput';
import AnalysisResult from '@/components/AnalysisResult';
import { type Symptom } from '@/data/symptoms';

type AppState = 'home' | 'input' | 'results';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);

  const handleGetStarted = () => {
    setAppState('input');
  };

  const handleAnalyze = (symptoms: Symptom[]) => {
    setSelectedSymptoms(symptoms);
    setAppState('results');
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setAppState('input');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showNavigation={appState === 'home'} />
      
      <main>
        {appState === 'home' && (
          <>
            <HeroSection onGetStarted={handleGetStarted} />
            
            {/* Quick Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-foreground mb-8">Trusted by Thousands</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">10K+</div>
                    <div className="text-muted-foreground">Symptoms Analyzed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">95%</div>
                    <div className="text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-muted-foreground">Available</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {appState === 'input' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <SymptomInput onAnalyze={handleAnalyze} />
            </div>
          </section>
        )}

        {appState === 'results' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnalysisResult symptoms={selectedSymptoms} onReset={handleReset} />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Health & Hygiene • AI-Powered Wellness Assistant • 
            <span className="mx-2">•</span>
            For informational purposes only
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
