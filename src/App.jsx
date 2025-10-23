import React, { useState } from 'react';
import { Sparkles, ArrowRight, Copy, Check, RefreshCw } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState('input');
  const [basicPrompt, setBasicPrompt] = useState('');
  const [answers, setAnswers] = useState({});
  const [finalJson, setFinalJson] = useState('');
  const [copied, setCopied] = useState(false);

  const questions = [
    {
      id: 'duration',
      question: 'What duration do you need?',
      options: ['5 seconds', '10 seconds', '15 seconds', '20 seconds', '30 seconds'],
      field: 'duration'
    },
    {
      id: 'style',
      question: 'What visual style are you aiming for?',
      options: ['Cinematic', 'Documentary', 'Animated', 'Realistic', 'Artistic', 'Commercial'],
      field: 'style'
    },
    {
      id: 'camera',
      question: 'What camera movement would work best?',
      options: ['Static shot', 'Pan', 'Dolly in', 'Dolly out', 'Tracking shot', 'Aerial view', 'No preference'],
      field: 'camera_movement'
    },
    {
      id: 'lighting',
      question: 'What lighting mood do you prefer?',
      options: ['Natural daylight', 'Golden hour', 'Blue hour', 'Studio lighting', 'Low-key dramatic', 'High-key bright', 'Moody', 'No preference'],
      field: 'lighting'
    },
    {
      id: 'pace',
      question: 'What pace should the video have?',
      options: ['Slow and contemplative', 'Medium pace', 'Fast and energetic', 'Variable pace'],
      field: 'pace'
    },
    {
      id: 'resolution',
      question: 'What resolution do you need?',
      options: ['720p', '1080p', '4K'],
      field: 'resolution'
    }
  ];

  const handleStartQuestions = () => {
    if (basicPrompt.trim()) {
      setStep('questions');
      setAnswers({});
    }
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    const currentIndex = questions.findIndex(q => q.id === questionId);
    if (currentIndex === questions.length - 1) {
      generateJson(newAnswers);
    }
  };

  const generateJson = (finalAnswers) => {
    const enhancedPrompt = enhancePrompt(basicPrompt, finalAnswers);
    
    const jsonOutput = {
      model: "veo3",
      prompt: enhancedPrompt,
      parameters: {
        duration: finalAnswers.duration || "10 seconds",
        resolution: finalAnswers.resolution || "1080p",
        style: finalAnswers.style || "Cinematic",
        camera_movement: finalAnswers.camera !== 'No preference' ? finalAnswers.camera : undefined,
        lighting: finalAnswers.lighting !== 'No preference' ? finalAnswers.lighting : undefined,
        pace: finalAnswers.pace || "Medium pace"
      },
      optimization: {
        quality: "high",
        consistency: true,
        motion_smoothness: "enhanced"
      }
    };

    Object.keys(jsonOutput.parameters).forEach(key => 
      jsonOutput.parameters[key] === undefined && delete jsonOutput.parameters[key]
    );

    setFinalJson(JSON.stringify(jsonOutput, null, 2));
    setStep('result');
  };

  const enhancePrompt = (prompt, answers) => {
    let enhanced = prompt;
    
    if (answers.style && answers.style !== 'No preference') {
      enhanced += `. Shot in ${answers.style.toLowerCase()} style`;
    }
    
    if (answers.camera && answers.camera !== 'No preference') {
      enhanced += ` with ${answers.camera.toLowerCase()}`;
    }
    
    if (answers.lighting && answers.lighting !== 'No preference') {
      enhanced += `. Lighting: ${answers.lighting.toLowerCase()}`;
    }
    
    if (answers.pace) {
      enhanced += `. Pacing: ${answers.pace.toLowerCase()}`;
    }
    
    return enhanced;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setStep('input');
    setBasicPrompt('');
    setAnswers({});
    setFinalJson('');
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-300" />
            <h1 className="text-4xl font-bold text-white">Veo3 Prompt Optimizer</h1>
          </div>
          <p className="text-purple-200 text-lg">Transform basic prompts into optimized JSON for Veo3</p>
        </div>

        {step === 'input' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <label className="block text-white text-lg font-semibold mb-4">
              Enter your basic prompt
            </label>
            <textarea
              value={basicPrompt}
              onChange={(e) => setBasicPrompt(e.target.value)}
              placeholder="e.g., A majestic eagle soaring over snow-capped mountains at sunset"
              className="w-full h-32 px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            />
            <button
              onClick={handleStartQuestions}
              disabled={!basicPrompt.trim()}
              className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
            >
              Optimize Prompt <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 'questions' && (
          <div className="space-y-6">
            {questions.map((q, index) => (
              <div
                key={q.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 transition-all ${
                  answers[q.id] ? 'opacity-60 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-white text-xl font-semibold">{q.question}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(q.id, option)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        answers[q.id] === option
                          ? 'bg-purple-500 text-white shadow-lg scale-105'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 'result' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Optimized JSON Prompt</h2>
              <div className="flex gap-3">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  New Prompt
                </button>
              </div>
            </div>
            <pre className="bg-gray-900/50 text-green-300 p-6 rounded-xl overflow-x-auto border border-white/10 font-mono text-sm">
              {finalJson}
            </pre>
            <div className="mt-6 bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <p className="text-blue-200 text-sm">
                <strong>💡 Tip:</strong> This JSON is optimized for Veo3 with enhanced parameters for quality, consistency, and motion smoothness.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}