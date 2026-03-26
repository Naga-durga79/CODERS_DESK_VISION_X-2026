import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { symptomDatabase, searchSymptoms, type Symptom } from '@/data/symptoms';
import { Cross, Shield } from 'lucide-react';

interface SymptomInputProps {
  onAnalyze: (symptoms: Symptom[]) => void;
}

const SymptomInput: React.FC<SymptomInputProps> = ({ onAnalyze }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Symptom[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchSymptoms(searchQuery).slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const addSymptom = (symptom: Symptom) => {
    if (!selectedSymptoms.find(s => s.id === symptom.id)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setSearchQuery('');
      setShowSuggestions(false);
      inputRef.current?.focus();
    }
  };

  const removeSymptom = (symptomId: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptomId));
  };

  const handleAnalyze = () => {
    if (selectedSymptoms.length >= 2) {
      onAnalyze(selectedSymptoms);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault();
      addSymptom(suggestions[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Describe Your Symptoms</h2>
        <p className="text-muted-foreground">Add at least 2 symptoms for accurate health guidance</p>
      </div>

      {/* Selected Symptoms */}
      {selectedSymptoms.length > 0 && (
        <Card variant="symptom">
          <CardContent className="p-4">
            <h3 className="text-sm font-medium text-foreground mb-3">Selected Symptoms ({selectedSymptoms.length})</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((symptom) => (
                <Badge 
                  key={symptom.id} 
                  variant="secondary" 
                  className="px-3 py-1 flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {symptom.name}
                  <button
                    onClick={() => removeSymptom(symptom.id)}
                    className="ml-1 hover:text-destructive transition-colors"
                  >
                    <Cross className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Symptom Search */}
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search symptoms (e.g., headache, fever, nausea)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-12 text-base border-primary/30 focus:border-primary"
        />
        
        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <Card className="absolute top-full left-0 right-0 z-10 mt-1 max-h-64 overflow-y-auto">
            <CardContent className="p-0">
              {suggestions.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => addSymptom(symptom)}
                  className="w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0 flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium text-foreground">{symptom.name}</div>
                    <div className="text-sm text-muted-foreground">{symptom.category}</div>
                  </div>
                  <Shield className="h-4 w-4 text-primary" />
                </button>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quick Add Popular Symptoms */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground">Popular Symptoms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {symptomDatabase.slice(0, 12).map((symptom) => (
            <Button
              key={symptom.id}
              variant="outline"
              size="sm"
              onClick={() => addSymptom(symptom)}
              disabled={selectedSymptoms.some(s => s.id === symptom.id)}
              className="justify-start text-left h-auto py-2 px-3"
            >
              {symptom.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Analyze Button */}
      <div className="text-center">
        <Button 
          variant="hero"
          size="xl"
          onClick={handleAnalyze}
          disabled={selectedSymptoms.length < 2}
          className="min-w-64"
        >
          <Shield className="h-5 w-5 mr-2" />
          Get My Health Guidance
        </Button>
        {selectedSymptoms.length < 2 && (
          <p className="text-sm text-muted-foreground mt-2">
            Please select at least 2 symptoms for analysis
          </p>
        )}
      </div>
    </div>
  );
};

export default SymptomInput;