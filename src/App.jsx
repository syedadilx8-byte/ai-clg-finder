import React, { useState } from 'react';
import { GraduationCap, Sparkles, BookOpen, TrendingUp, Mail, User, Award } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    skills: [],
    passion: '',
    careerInterest: '',
    tenthMarks: '', 
    twelfthMarks: '',
    diplomaMarks: ''
  });
  
  const [customSkill, setCustomSkill] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const skillOptions = [
    'Programming', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'Writing', 'Public Speaking', 'Design', 'Music', 'Art',
    'Leadership', 'Problem Solving', 'Critical Thinking', 'Research',
    'Data Analysis', 'Communication', 'Creativity', 'Teamwork'
  ];

  const careerFields = [
    'Engineering',
    'Commerce',
    'IT & Computer Science',
    'Design'
  ];

  const recommendationDatabase = {
    'Engineering': {
      colleges: [
        { name: 'Indian Institute of Technology (IIT) Madras', location: 'Chennai, Tamil Nadu', tier: 'premium', minMarks: 90 },
        { name: 'Indian Institute of Technology (IIT) Hyderabad', location: 'Hyderabad, Telangana', tier: 'premium', minMarks: 88 },
        { name: 'National Institute of Technology (NIT) Trichy', location: 'Tiruchirappalli, Tamil Nadu', tier: 'premium', minMarks: 85 },
        { name: 'National Institute of Technology (NIT) Warangal', location: 'Warangal, Telangana', tier: 'premium', minMarks: 85 },
        { name: 'BITS Pilani Hyderabad Campus', location: 'Hyderabad, Telangana', tier: 'premium', minMarks: 82 },
        { name: 'VIT Vellore', location: 'Vellore, Tamil Nadu', tier: 'good', minMarks: 78 },
        { name: 'Manipal Institute of Technology', location: 'Manipal, Karnataka', tier: 'good', minMarks: 75 },
        { name: 'PSG College of Technology', location: 'Coimbatore, Tamil Nadu', tier: 'good', minMarks: 75 },
        { name: 'RV College of Engineering', location: 'Bangalore, Karnataka', tier: 'good', minMarks: 76 },
        { name: 'BMS College of Engineering', location: 'Bangalore, Karnataka', tier: 'good', minMarks: 74 },
        { name: 'SSN College of Engineering', location: 'Chennai, Tamil Nadu', tier: 'good', minMarks: 72 },
        { name: 'SRM Institute of Science and Technology', location: 'Chennai, Tamil Nadu', tier: 'average', minMarks: 65 }
      ],
      courses: [
        { name: 'Computer Science Engineering', duration: '4 years', skills: ['Programming', 'Mathematics', 'Problem Solving'] },
        { name: 'Electronics and Communication Engineering', duration: '4 years', skills: ['Physics', 'Mathematics'] },
        { name: 'Mechanical Engineering', duration: '4 years', skills: ['Physics', 'Mathematics'] },
        { name: 'Electrical Engineering', duration: '4 years', skills: ['Physics', 'Mathematics'] },
        { name: 'Information Technology', duration: '4 years', skills: ['Programming', 'Problem Solving'] }
      ],
      careers: [
        { title: 'Software Engineer', skills: ['Programming', 'Problem Solving'], growth: 'High' },
        { title: 'Data Scientist', skills: ['Programming', 'Mathematics'], growth: 'Very High' },
        { title: 'Full Stack Developer', skills: ['Programming'], growth: 'Very High' },
        { title: 'AI/ML Engineer', skills: ['Programming', 'Mathematics'], growth: 'Very High' },
        { title: 'Systems Engineer', skills: ['Problem Solving'], growth: 'High' }
      ]
    },
    'Commerce': {
      colleges: [
        { name: 'Loyola College', location: 'Chennai, Tamil Nadu', tier: 'premium', minMarks: 85 },
        { name: 'Stella Maris College', location: 'Chennai, Tamil Nadu', tier: 'premium', minMarks: 82 },
        { name: 'Christ University', location: 'Bangalore, Karnataka', tier: 'premium', minMarks: 80 },
        { name: 'St. Joseph College', location: 'Bangalore, Karnataka', tier: 'good', minMarks: 78 },
        { name: 'Mount Carmel College', location: 'Bangalore, Karnataka', tier: 'good', minMarks: 76 },
        { name: 'Nizam College', location: 'Hyderabad, Telangana', tier: 'good', minMarks: 73 }
      ],
      courses: [
        { name: 'Bachelor of Commerce (B.Com)', duration: '3 years', skills: ['Mathematics', 'Data Analysis'] },
        { name: 'B.Com with Computer Applications', duration: '3 years', skills: ['Mathematics', 'Programming'] },
        { name: 'BBA', duration: '3 years', skills: ['Leadership', 'Communication'] },
        { name: 'Chartered Accountancy', duration: '4-5 years', skills: ['Mathematics'] }
      ],
      careers: [
        { title: 'Chartered Accountant', skills: ['Mathematics'], growth: 'High' },
        { title: 'Financial Analyst', skills: ['Mathematics', 'Data Analysis'], growth: 'High' },
        { title: 'Business Analyst', skills: ['Data Analysis'], growth: 'High' },
        { title: 'Investment Banker', skills: ['Mathematics'], growth: 'Very High' }
      ]
    },
    'IT & Computer Science': {
      colleges: [
        { name: 'IIT Madras', location: 'Chennai, Tamil Nadu', tier: 'premium', minMarks: 90 },
        { name: 'IIT Hyderabad', location: 'Hyderabad, Telangana', tier: 'premium', minMarks: 88 },
        { name: 'IIIT Hyderabad', location: 'Hyderabad, Telangana', tier: 'premium', minMarks: 87 },
        { name: 'BITS Pilani Hyderabad', location: 'Hyderabad, Telangana', tier: 'premium', minMarks: 82 },
        { name: 'VIT Vellore', location: 'Vellore, Tamil Nadu', tier: 'good', minMarks: 78 },
        { name: 'PES University', location: 'Bangalore, Karnataka', tier: 'good', minMarks: 75 }
      ],
      courses: [
        { name: 'Computer Science', duration: '4 years', skills: ['Programming', 'Mathematics'] },
        { name: 'Information Technology', duration: '4 years', skills: ['Programming'] },
        { name: 'Data Science', duration: '4 years', skills: ['Programming', 'Mathematics'] },
        { name: 'AI and Machine Learning', duration: '4 years', skills: ['Programming', 'Mathematics'] }
      ],
      careers: [
        { title: 'Full Stack Developer', skills: ['Programming'], growth: 'Very High' },
        { title: 'AI/ML Engineer', skills: ['Programming', 'Mathematics'], growth: 'Very High' },
        { title: 'Data Scientist', skills: ['Programming'], growth: 'Very High' },
        { title: 'Cloud Architect', skills: ['Programming'], growth: 'High' }
      ]
    },
    'Design': {
      colleges: [
        { name: 'NID Bangalore', location: 'Bangalore, Karnataka', tier: 'premium', minMarks: 75 },
        { name: 'Srishti Manipal Institute', location: 'Bangalore, Karnataka', tier: 'premium', minMarks: 72 },
        { name: 'Vogue Institute', location: 'Bangalore, Karnataka', tier: 'good', minMarks: 65 },
        { name: 'JD Institute', location: 'Bangalore/Chennai', tier: 'average', minMarks: 62 }
      ],
      courses: [
        { name: 'Bachelor of Design', duration: '4 years', skills: ['Design', 'Creativity'] },
        { name: 'Graphic Design', duration: '3 years', skills: ['Design', 'Creativity'] },
        { name: 'UX/UI Design', duration: '3 years', skills: ['Design', 'Programming'] },
        { name: 'Fashion Design', duration: '4 years', skills: ['Design', 'Art'] }
      ],
      careers: [
        { title: 'Graphic Designer', skills: ['Design', 'Creativity'], growth: 'Moderate' },
        { title: 'UX/UI Designer', skills: ['Design'], growth: 'Very High' },
        { title: 'Product Designer', skills: ['Design', 'Creativity'], growth: 'High' },
        { title: 'Art Director', skills: ['Design', 'Leadership'], growth: 'High' }
      ]
    }
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, customSkill.trim()]
      }));
      setCustomSkill('');
    }
  };

  const removeSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const calculateSkillMatch = (requiredSkills, userSkills) => {
    if (!requiredSkills || requiredSkills.length === 0) return 0.5;
    const matches = requiredSkills.filter(skill => 
      userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    ).length;
    return matches / requiredSkills.length;
  };

  const generateRecommendations = () => {
    setLoading(true);
    
    setTimeout(() => {
      const avgMarks = formData.twelfthMarks 
        ? (parseFloat(formData.tenthMarks) + parseFloat(formData.twelfthMarks)) / 2
        : parseFloat(formData.tenthMarks);
      
      const fieldData = recommendationDatabase[formData.careerInterest] || recommendationDatabase['Engineering'];
      
      const scoredColleges = fieldData.colleges
        .map(college => {
          let score = 0;
          if (avgMarks >= college.minMarks) score += 50;
          else score += (avgMarks / college.minMarks) * 30;
          
          if (college.tier === 'premium' && avgMarks >= 85) score += 30;
          else if (college.tier === 'good' && avgMarks >= 70) score += 20;
          else if (college.tier === 'average') score += 10;
          
          return { ...college, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
      
      const recommendedColleges = scoredColleges.map(college => ({
        name: college.name,
        location: college.location,
        reason: `This ${college.tier === 'premium' ? 'top-tier' : college.tier === 'good' ? 'well-regarded' : 'accessible'} South Indian institution matches your profile with ${avgMarks.toFixed(1)}% marks. ${avgMarks >= college.minMarks ? 'You meet admission criteria.' : 'Focus on preparation to meet standards.'} Strong programs in ${formData.careerInterest} with excellent placements.`,
        admissionCriteria: `Requires ${college.minMarks}%+ and ${college.tier === 'premium' ? 'entrance exams (JEE/KCET/EAMCET)' : 'state entrance exam'}`
      }));
      
      const scoredCourses = fieldData.courses
        .map(course => {
          const skillMatch = calculateSkillMatch(course.skills, formData.skills);
          return { ...course, score: skillMatch * 100 };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
      
      const recommendedCourses = scoredCourses.map(course => ({
        name: course.name,
        duration: course.duration,
        reason: `Matches your skills in ${formData.skills.slice(0, 3).join(', ')}. ${course.skills ? `Develops ${course.skills.join(', ')}.` : ''} ${formData.passion ? `Your interest in ${formData.passion} is valuable.` : ''} Prepares for ${formData.careerInterest} careers.`,
        careerProspects: `Strong demand for graduates in ${fieldData.careers.slice(0, 2).map(c => c.title).join(' and ')} roles`
      }));
      
      const scoredCareers = fieldData.careers
        .map(career => {
          const skillMatch = calculateSkillMatch(career.skills, formData.skills);
          return { ...career, score: skillMatch * 100 };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
      
      const recommendedCareers = scoredCareers.map(career => ({
        title: career.title,
        description: `As a ${career.title}, use your ${formData.skills.slice(0, 2).join(' and ')} skills in ${formData.careerInterest}. ${formData.passion ? `Your passion for ${formData.passion} adds value.` : ''} Opportunities for innovation and growth.`,
        skillsNeeded: `${career.skills.join(', ')}, continuous learning`,
        growthPotential: `${career.growth} growth with competitive salaries and advancement opportunities`
      }));
      
      const performanceLevel = avgMarks >= 85 ? 'excellent' : avgMarks >= 75 ? 'strong' : avgMarks >= 65 ? 'good' : 'developing';
      
      const summary = `With ${performanceLevel} performance (${avgMarks.toFixed(1)}%) and skills in ${formData.skills.slice(0, 3).join(', ')}, you're ready for ${formData.careerInterest} in South India. ${formData.passion ? `Your passion for ${formData.passion} is an asset.` : ''} Colleges in Karnataka, Tamil Nadu, Telangana offer great tech opportunities.${avgMarks >= 80 ? ' Your marks qualify you for top institutions.' : ' Keep improving for better options.'}`;
      
      setRecommendations({
        colleges: recommendedColleges,
        courses: recommendedCourses,
        careerPaths: recommendedCareers,
        summary
      });
      
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || formData.skills.length === 0 || 
        !formData.careerInterest || !formData.tenthMarks) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (formData.tenthMarks < 0 || formData.tenthMarks > 100) {
      alert('Please enter valid marks (0-100)');
      return;
    }
    
    generateRecommendations();
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      skills: [],
      passion: '',
      careerInterest: '',
      tenthMarks: '',
      twelfthMarks: '',
      diplomaMarks: ''
    });
    setRecommendations(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white shadow-sm border-b border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI College Finder - South India</h1>
              <p className="text-sm text-gray-600">Discover your perfect college and career path</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {!recommendations ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8 text-center">
              <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Yourself</h2>
              <p className="text-gray-600">Get personalized college and career recommendations</p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4" />
                    Email ID *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <Award className="w-4 h-4" />
                  Your Skills * (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skillOptions.map(skill => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.skills.includes(skill)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCustomSkill()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Add custom skill..."
                  />
                  <button
                    type="button"
                    onClick={addCustomSkill}
                    className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 font-medium"
                  >
                    Add
                  </button>
                </div>

                {formData.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.skills.map(skill => (
                      <span key={skill} className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                        {skill}
                        <button type="button" onClick={() => removeSkill(skill)} className="hover:bg-indigo-700 rounded-full p-0.5">×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Passion / Hobbies
                  </label>
                  <textarea
                    value={formData.passion}
                    onChange={(e) => setFormData({...formData, passion: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows="3"
                    placeholder="What do you love doing?"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Career Interest *
                  </label>
                  <select
                    value={formData.careerInterest}
                    onChange={(e) => setFormData({...formData, careerInterest: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select a field</option>
                    {careerFields.map(field => (
                      <option key={field} value={field}>{field}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    10th Grade Marks (%) *
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={formData.tenthMarks}
                    onChange={(e) => setFormData({...formData, tenthMarks: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="85.5"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    12th Grade Marks (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={formData.twelfthMarks}
                    onChange={(e) => setFormData({...formData, twelfthMarks: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Diploma Marks (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={formData.diplomaMarks}
                    onChange={(e) => setFormData({...formData, diplomaMarks: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing Your Profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Get AI Recommendations
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Your Personalized Recommendations</h2>
              <p className="text-indigo-100 text-lg leading-relaxed">{recommendations.summary}</p>
              <button
                onClick={resetForm}
                className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Start New Search
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">Recommended Colleges</h3>
              </div>
              <div className="space-y-4">
                {recommendations.colleges.map((college, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{college.name}</h4>
                      <span className="text-sm text-indigo-600 font-medium">{college.location}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{college.reason}</p>
                    <p className="text-sm text-gray-500"><strong>Admission:</strong> {college.admissionCriteria}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Recommended Courses</h3>
              </div>
              <div className="space-y-4">
                {recommendations.courses.map((course, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{course.name}</h4>
                      <span className="text-sm text-purple-600 font-medium">{course.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{course.reason}</p>
                    <p className="text-sm text-gray-500"><strong>Career Prospects:</strong> {course.careerProspects}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Career Paths</h3>
              </div>
              <div className="space-y-4">
                {recommendations.careerPaths.map((career, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h4>
                    <p className="text-gray-600 mb-3">{career.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p className="text-gray-500"><strong>Skills Needed:</strong> {career.skillsNeeded}</p>
                      <p className="text-gray-500"><strong>Growth Potential:</strong> {career.growthPotential}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>  
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
            <p> 2026 ai collage finder build by sayeda</p>
        </div>
      </footer>
    </div>
    );
}