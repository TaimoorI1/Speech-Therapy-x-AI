import React, { useState } from 'react';
import { AlertCircle, Mic, PlayCircle, Award, Book, Briefcase, Globe } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SpeakProudAI = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [fluencyScore, setFluencyScore] = useState(82);
  const [achievement, setAchievement] = useState('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        const newScore = fluencyScore + Math.floor(Math.random() * 5);
        setFluencyScore(newScore > 100 ? 100 : newScore);
        setFeedback('Excellent work! Your pace and clarity have improved. Keep practicing emphasis on key points.');
        setIsRecording(false);
        if (newScore >= 85 && !achievement) {
          setAchievement('Communication Pro: 85% Mastery achieved!');
        }
      }, 3000);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">SpeakProud AI</h1>
      <p className="text-center mb-6">Empowering Every Voice, From Therapy to Mastery</p>
      
      <Tabs defaultValue="practice" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="learn">Learn</TabsTrigger>
        </TabsList>
        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle>Speech Enhancement Session</CardTitle>
              <CardDescription>Improve your speaking skills with AI-powered feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <Select className="mb-4">
                <SelectTrigger>
                  <SelectValue placeholder="Select focus area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fluency">Fluency Improvement</SelectItem>
                  <SelectItem value="public-speaking">Public Speaking</SelectItem>
                  <SelectItem value="accent">Accent Modification</SelectItem>
                  <SelectItem value="voice-quality">Voice Quality</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={toggleRecording} className="w-full mb-4">
                {isRecording ? <Mic className="mr-2" /> : <PlayCircle className="mr-2" />}
                {isRecording ? 'Stop Recording' : 'Start Speaking Proudly'}
              </Button>
              {feedback && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Feedback</AlertTitle>
                  <AlertDescription>{feedback}</AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span>Communication Score</span>
                  <span>{fluencyScore}%</span>
                </div>
                <Progress value={fluencyScore} className="w-full" />
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="scenarios">
          <Card>
            <CardHeader>
              <CardTitle>Real-world Scenarios</CardTitle>
              <CardDescription>Practice for specific speaking situations</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interview">Job Interview</SelectItem>
                  <SelectItem value="presentation">Work Presentation</SelectItem>
                  <SelectItem value="storytelling">Storytelling</SelectItem>
                  <SelectItem value="debate">Debate Practice</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          {/* Analytics content */}
        </TabsContent>
        <TabsContent value="learn">
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Enhance your knowledge and skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20">
                  <Book className="mr-2" /> Speech Techniques
                </Button>
                <Button variant="outline" className="h-20">
                  <Briefcase className="mr-2" /> Professional Communication
                </Button>
                <Button variant="outline" className="h-20">
                  <Globe className="mr-2" /> Language & Accents
                </Button>
                <Button variant="outline" className="h-20">
                  <Award className="mr-2" /> Voice Training
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {achievement && (
        <Card className="mb-6 bg-yellow-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2" /> Achievement Unlocked!
            </CardTitle>
          </CardHeader>
          <CardContent>{achievement}</CardContent>
        </Card>
      )}
    </div>
  );
};

export default SpeakProudAI;
