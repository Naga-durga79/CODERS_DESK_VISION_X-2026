import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getConditionsForSymptoms, conditionDatabase, type Symptom, type Condition } from '@/data/symptoms';
import { Shield, Heart, Cross, Leaf } from 'lucide-react';

interface AnalysisResultProps {
  symptoms: Symptom[];
  onReset: () => void;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ symptoms, onReset }) => {
  const possibleConditions = getConditionsForSymptoms(symptoms.map(s => s.id));
  const primaryCondition = possibleConditions[0] ? conditionDatabase[possibleConditions[0]] : null;

  if (!primaryCondition) {
    return (
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">Unable to analyze symptoms. Please try different symptoms.</p>
        <Button onClick={onReset} variant="outline">Try Again</Button>
      </div>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-success/10 text-success border-success/20';
      case 'moderate': return 'bg-warning/10 text-warning border-warning/20';
      case 'severe': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header with Condition */}
      <Card variant="result">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Shield className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold text-foreground">{primaryCondition.name}</CardTitle>
          </div>
          <Badge className={getSeverityColor(primaryCondition.severity)} variant="outline">
            {primaryCondition.severity.toUpperCase()} CONDITION
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground text-lg leading-relaxed">
            {primaryCondition.description}
          </p>
        </CardContent>
      </Card>

      {/* Your Symptoms */}
      <Card variant="medical">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cross className="h-5 w-5 text-primary" />
            Your Reported Symptoms
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {symptoms.map((symptom) => (
              <Badge key={symptom.id} variant="secondary" className="bg-primary/10 text-primary">
                {symptom.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guidance Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Precautions */}
        <Card variant="result">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <Shield className="h-5 w-5" />
              Precautions & Care
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {primaryCondition.precautions.map((precaution, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-warning mt-1">⚠️</span>
                  <span className="text-foreground">{precaution}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Medicines */}
        <Card variant="result">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-secondary">
              <Cross className="h-5 w-5" />
              Recommended Medicines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {primaryCondition.medicines.map((medicine, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">💊</span>
                  <span className="text-foreground">{medicine}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Important:</strong> Always consult with a healthcare professional before taking any medication.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Diet Recommendations */}
        <Card variant="result">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <Leaf className="h-5 w-5" />
              Diet Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {primaryCondition.diet.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-success mt-1">🥗</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Exercise & Wellness */}
        <Card variant="result">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Heart className="h-5 w-5" />
              Exercise & Wellness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {primaryCondition.exercises.map((exercise, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">🧘</span>
                  <span className="text-foreground">{exercise}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Medical Disclaimer */}
      <Card className="border-warning/30 bg-warning/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-warning mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This AI analysis is for informational purposes only and should not replace professional medical advice. 
                Always consult with qualified healthcare providers for proper diagnosis and treatment. 
                If you experience severe symptoms or emergency conditions, seek immediate medical attention.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button onClick={onReset} variant="outline" size="lg">
          Analyze New Symptoms
        </Button>
        <Button variant="medical" size="lg">
          <Heart className="h-4 w-4 mr-2" />
          Save Report
        </Button>
      </div>
    </div>
  );
};

export default AnalysisResult;