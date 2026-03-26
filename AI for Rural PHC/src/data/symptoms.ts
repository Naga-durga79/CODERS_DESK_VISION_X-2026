// SymptomAI Comprehensive Symptom Database
export interface Symptom {
  id: string;
  name: string;
  category: string;
  commonConditions: string[];
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  precautions: string[];
  medicines: string[];
  diet: string[];
  exercises: string[];
  severity: 'mild' | 'moderate' | 'severe';
}

export const symptomDatabase: Symptom[] = [
  // A
  { id: 'abdominal_pain', name: 'Abdominal Pain', category: 'Digestive', commonConditions: ['gastritis', 'ibs', 'appendicitis'] },
  { id: 'anxiety', name: 'Anxiety', category: 'Mental Health', commonConditions: ['anxiety_disorder', 'stress', 'panic_attacks'] },
  
  // B
  { id: 'back_pain', name: 'Back Pain', category: 'Musculoskeletal', commonConditions: ['muscle_strain', 'herniated_disc', 'sciatica'] },
  { id: 'bloating', name: 'Bloating', category: 'Digestive', commonConditions: ['ibs', 'indigestion', 'lactose_intolerance'] },
  { id: 'breathlessness', name: 'Breathlessness', category: 'Respiratory', commonConditions: ['asthma', 'anxiety', 'anemia'] },
  
  // C
  { id: 'chest_pain', name: 'Chest Pain', category: 'Cardiovascular', commonConditions: ['acid_reflux', 'anxiety', 'muscle_strain'] },
  { id: 'cough', name: 'Cough', category: 'Respiratory', commonConditions: ['common_cold', 'bronchitis', 'allergies'] },
  { id: 'constipation', name: 'Constipation', category: 'Digestive', commonConditions: ['ibs', 'dehydration', 'poor_diet'] },
  
  // D
  { id: 'diarrhea', name: 'Diarrhea', category: 'Digestive', commonConditions: ['food_poisoning', 'ibs', 'gastroenteritis'] },
  { id: 'dizziness', name: 'Dizziness', category: 'Neurological', commonConditions: ['low_blood_pressure', 'dehydration', 'inner_ear_infection'] },
  { id: 'dry_skin', name: 'Dry Skin', category: 'Dermatological', commonConditions: ['eczema', 'dehydration', 'winter_weather'] },
  
  // F
  { id: 'fatigue', name: 'Fatigue', category: 'General', commonConditions: ['anemia', 'sleep_deprivation', 'stress'] },
  { id: 'fever', name: 'Fever', category: 'General', commonConditions: ['viral_infection', 'bacterial_infection', 'flu'] },
  { id: 'frequent_urination', name: 'Frequent Urination', category: 'Urological', commonConditions: ['uti', 'diabetes', 'overhydration'] },
  
  // H
  { id: 'headache', name: 'Headache', category: 'Neurological', commonConditions: ['tension_headache', 'migraine', 'stress'] },
  { id: 'heartburn', name: 'Heartburn', category: 'Digestive', commonConditions: ['acid_reflux', 'gerd', 'spicy_food'] },
  { id: 'high_blood_pressure', name: 'High Blood Pressure', category: 'Cardiovascular', commonConditions: ['hypertension', 'stress', 'poor_diet'] },
  
  // I
  { id: 'insomnia', name: 'Insomnia', category: 'Sleep', commonConditions: ['stress', 'anxiety', 'caffeine_intake'] },
  { id: 'itchy_skin', name: 'Itchy Skin', category: 'Dermatological', commonConditions: ['allergies', 'eczema', 'dry_skin'] },
  { id: 'irregular_heartbeat', name: 'Irregular Heartbeat', category: 'Cardiovascular', commonConditions: ['anxiety', 'caffeine_intake', 'arrhythmia'] },
  
  // J
  { id: 'joint_pain', name: 'Joint Pain', category: 'Musculoskeletal', commonConditions: ['arthritis', 'muscle_strain', 'inflammation'] },
  { id: 'joint_stiffness', name: 'Joint Stiffness', category: 'Musculoskeletal', commonConditions: ['arthritis', 'morning_stiffness', 'age_related'] },
  
  // M
  { id: 'memory_problems', name: 'Memory Problems', category: 'Neurological', commonConditions: ['stress', 'sleep_deprivation', 'age_related'] },
  { id: 'muscle_cramps', name: 'Muscle Cramps', category: 'Musculoskeletal', commonConditions: ['dehydration', 'electrolyte_imbalance', 'overexertion'] },
  { id: 'mood_swings', name: 'Mood Swings', category: 'Mental Health', commonConditions: ['hormonal_imbalance', 'stress', 'depression'] },
  
  // N
  { id: 'nausea', name: 'Nausea', category: 'Digestive', commonConditions: ['food_poisoning', 'pregnancy', 'motion_sickness'] },
  { id: 'night_sweats', name: 'Night Sweats', category: 'General', commonConditions: ['hormonal_imbalance', 'infection', 'menopause'] },
  { id: 'numbness', name: 'Numbness', category: 'Neurological', commonConditions: ['nerve_compression', 'poor_circulation', 'vitamin_deficiency'] },
  
  // R
  { id: 'runny_nose', name: 'Runny Nose', category: 'Respiratory', commonConditions: ['common_cold', 'allergies', 'sinusitis'] },
  { id: 'rash', name: 'Rash', category: 'Dermatological', commonConditions: ['allergies', 'eczema', 'contact_dermatitis'] },
  
  // S
  { id: 'sore_throat', name: 'Sore Throat', category: 'Respiratory', commonConditions: ['viral_infection', 'strep_throat', 'dry_air'] },
  { id: 'stomach_pain', name: 'Stomach Pain', category: 'Digestive', commonConditions: ['indigestion', 'gastritis', 'food_poisoning'] },
  { id: 'swelling', name: 'Swelling', category: 'General', commonConditions: ['inflammation', 'injury', 'poor_circulation'] },
  
  // W
  { id: 'weight_loss', name: 'Weight Loss', category: 'General', commonConditions: ['stress', 'poor_diet', 'thyroid_issues'] },
  { id: 'weight_gain', name: 'Weight Gain', category: 'General', commonConditions: ['poor_diet', 'sedentary_lifestyle', 'hormonal_imbalance'] },
];

export const conditionDatabase: Record<string, Condition> = {
  // Common Conditions
  common_cold: {
    id: 'common_cold',
    name: 'Common Cold',
    description: 'A viral infection of the upper respiratory tract causing congestion, runny nose, and mild discomfort.',
    precautions: ['Rest plenty', 'Stay hydrated', 'Avoid close contact with others', 'Wash hands frequently'],
    medicines: ['Paracetamol for fever', 'Throat lozenges', 'Decongestant nasal spray', 'Vitamin C supplements'],
    diet: ['Warm fluids like tea and soup', 'Citrus fruits', 'Ginger tea', 'Honey and lemon', 'Avoid dairy temporarily'],
    exercises: ['Light walking', 'Gentle breathing exercises', 'Avoid intense workouts', 'Steam inhalation'],
    severity: 'mild'
  },
  
  stress: {
    id: 'stress',
    name: 'Stress and Anxiety',
    description: 'Mental and physical tension resulting from demanding circumstances, affecting overall well-being.',
    precautions: ['Identify stress triggers', 'Practice time management', 'Ensure adequate sleep', 'Limit caffeine and alcohol'],
    medicines: ['Magnesium supplements', 'Herbal teas (chamomile, lavender)', 'Consider professional counseling'],
    diet: ['Omega-3 rich foods', 'Complex carbohydrates', 'Green leafy vegetables', 'Limit sugar and processed foods'],
    exercises: ['Deep breathing exercises', 'Yoga and meditation', 'Regular light exercise', 'Progressive muscle relaxation'],
    severity: 'moderate'
  },
  
  ibs: {
    id: 'ibs',
    name: 'Irritable Bowel Syndrome (IBS)',
    description: 'A digestive disorder causing abdominal pain, bloating, and changes in bowel movements.',
    precautions: ['Identify trigger foods', 'Eat regular meals', 'Manage stress levels', 'Stay hydrated'],
    medicines: ['Probiotics', 'Fiber supplements', 'Antispasmodic medications', 'Peppermint oil capsules'],
    diet: ['Low FODMAP diet', 'Soluble fiber foods', 'Avoid trigger foods', 'Small frequent meals'],
    exercises: ['Regular walking', 'Gentle yoga', 'Swimming', 'Stress-reduction techniques'],
    severity: 'moderate'
  },
  
  gastritis: {
    id: 'gastritis',
    name: 'Gastritis',
    description: 'Inflammation of the stomach lining causing pain, nausea, and digestive discomfort.',
    precautions: ['Avoid spicy and acidic foods', 'Limit alcohol and smoking', 'Eat smaller meals', 'Manage stress'],
    medicines: ['Antacids', 'Proton pump inhibitors', 'H2 blockers', 'Probiotics'],
    diet: ['Bland foods', 'Banana and rice', 'Avoid citrus and tomatoes', 'Chamomile tea', 'Lean proteins'],
    exercises: ['Light walking after meals', 'Gentle stretching', 'Avoid intense exercise', 'Relaxation techniques'],
    severity: 'mild'
  },
  
  tension_headache: {
    id: 'tension_headache',
    name: 'Tension Headache',
    description: 'The most common type of headache, often caused by stress, poor posture, or muscle tension.',
    precautions: ['Maintain regular sleep schedule', 'Stay hydrated', 'Manage stress', 'Take regular breaks from screens'],
    medicines: ['Paracetamol', 'Ibuprofen', 'Apply cold or warm compress', 'Peppermint oil on temples'],
    diet: ['Stay well hydrated', 'Avoid alcohol and caffeine', 'Regular meals', 'Magnesium-rich foods'],
    exercises: ['Neck and shoulder stretches', 'Gentle yoga', 'Progressive muscle relaxation', 'Regular exercise routine'],
    severity: 'mild'
  },
  
  muscle_strain: {
    id: 'muscle_strain',
    name: 'Muscle Strain',
    description: 'Overstretching or tearing of muscle fibers, commonly affecting back, neck, or limb muscles.',
    precautions: ['Rest the affected area', 'Apply ice initially', 'Avoid activities that worsen pain', 'Gradual return to activity'],
    medicines: ['Anti-inflammatory medications', 'Topical pain relievers', 'Muscle relaxants if severe', 'Pain relief gel'],
    diet: ['Anti-inflammatory foods', 'Protein for muscle repair', 'Adequate hydration', 'Fruits and vegetables'],
    exercises: ['Gentle stretching after initial rest', 'Physical therapy exercises', 'Gradual strengthening', 'Avoid intense activity initially'],
    severity: 'moderate'
  }
};

export const getSymptomsByCategory = (category: string): Symptom[] => {
  return symptomDatabase.filter(symptom => symptom.category === category);
};

export const searchSymptoms = (query: string): Symptom[] => {
  return symptomDatabase.filter(symptom => 
    symptom.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const getConditionsForSymptoms = (symptomIds: string[]): string[] => {
  const conditionCounts: Record<string, number> = {};
  
  symptomIds.forEach(symptomId => {
    const symptom = symptomDatabase.find(s => s.id === symptomId);
    if (symptom) {
      symptom.commonConditions.forEach(condition => {
        conditionCounts[condition] = (conditionCounts[condition] || 0) + 1;
      });
    }
  });
  
  // Return conditions sorted by how many symptoms match
  return Object.entries(conditionCounts)
    .sort(([,a], [,b]) => b - a)
    .map(([condition]) => condition);
};