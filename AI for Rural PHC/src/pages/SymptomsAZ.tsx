import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { symptomDatabase, type Symptom } from '@/data/symptoms';
import { Search, ArrowLeft, Shield } from 'lucide-react';

const SymptomsAZ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(symptomDatabase.map(s => s.category))];
    return cats.sort();
  }, []);

  // Filter symptoms
  const filteredSymptoms = useMemo(() => {
    let filtered = symptomDatabase;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedCategory]);

  // Group symptoms alphabetically
  const groupedSymptoms = useMemo(() => {
    const groups: Record<string, Symptom[]> = {};
    filteredSymptoms.forEach(symptom => {
      const firstLetter = symptom.name[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(symptom);
    });
    return groups;
  }, [filteredSymptoms]);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="min-h-screen bg-background">
      <Header showNavigation={false} />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">A-Z Symptom Directory</h1>
              <p className="text-muted-foreground">Explore our comprehensive symptom database</p>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search symptoms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredSymptoms.length} symptoms
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {alphabet.map(letter => {
              const hasSymptoms = groupedSymptoms[letter]?.length > 0;
              return (
                <button
                  key={letter}
                  onClick={() => {
                    const element = document.getElementById(`letter-${letter}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    hasSymptoms 
                      ? 'bg-primary text-primary-foreground hover:bg-primary-dark' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!hasSymptoms}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Symptoms List */}
          <div className="space-y-8">
            {Object.entries(groupedSymptoms).map(([letter, symptoms]) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                  {letter}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {symptoms.map(symptom => (
                    <Card key={symptom.id} variant="symptom" className="hover:shadow-medical transition-all duration-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{symptom.name}</CardTitle>
                          <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {symptom.category}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Related Conditions:</h4>
                          <div className="flex flex-wrap gap-1">
                            {symptom.commonConditions.slice(0, 3).map((condition, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {condition.replace(/_/g, ' ')}
                              </Badge>
                            ))}
                            {symptom.commonConditions.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{symptom.commonConditions.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredSymptoms.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No symptoms found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <Card className="mt-12 bg-gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Analyze Your Symptoms?</h3>
              <p className="text-white/90 mb-6">
                Get personalized health insights by selecting your symptoms and receiving AI-powered recommendations.
              </p>
              <Link to="/">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Shield className="h-5 w-5 mr-2" />
                  Start Health Analysis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SymptomsAZ;