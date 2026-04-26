import React, { useState } from 'react';
import { BookOpen, Search, Target, Compass, GitBranch, Cpu } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const getImgUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const Domain = () => {
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  return (
    <div className="fade-in" style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '60px' }}>
      <div className="scope-header">
        <h1>Project Scope</h1>
        <div className="underline"></div>
        <p>Comprehensive overview of our research approach and methodology</p>
      </div>

      <div className="accordion-wrapper">
        <AccordionItem 
          icon={BookOpen} 
          title="Literature Survey" 
          isOpen={openSection === 0}
          onToggle={() => toggleSection(0)}
        >
          <p>The literature review examines existing research and systems related to traditional pepper farming in Sri Lanka. Several studies have explored similar challenges, providing valuable insights into current approaches and their limitations.</p>
          <p>Traditional pepper farming faces severe limitations due to manual observation and reliance on historical methods. Existing Machine Learning approaches have been explored globally, but there is a distinct gap in adapting these systems to the unique environmental and agricultural context of Sri Lanka.</p>
        </AccordionItem>

        <AccordionItem 
          icon={Search} 
          title="Research Gap" 
          isOpen={openSection === 1}
          onToggle={() => toggleSection(1)}
        >
          <p>Current systems exhibit several critical limitations that hinder their effectiveness. These gaps represent significant opportunities for innovation and improvement.</p>
          <p>There is a notable lack of an integrated, end-to-end system tailored specifically for Sri Lankan pepper farmers. Current solutions offer no explainable AI tailored for farmers with limited technical knowledge.</p>
          <p>Furthermore, there is highly limited automation concerning the quality grading of the produce, often leading to inconsistencies and unfair market practices.</p>
        </AccordionItem>

        <AccordionItem 
          icon={Target} 
          title="Research Problem & Solution" 
          isOpen={openSection === 2}
          onToggle={() => toggleSection(2)}
        >
          <p><strong>Research Problem:</strong> The agricultural sector faces increasing challenges in managing supply chains while maintaining profitability and quality. Traditional approaches fail to scale effectively, leading to bottlenecks.</p>
          <p>The core problems include unpredictable crop yield resulting in poor supply chain management, lack of standardized automated quality grading, price uncertainty leading to farmer exploitation, and slow, inaccurate leaf disease detection.</p>
          <p><strong>Proposed Solution:</strong> Our research introduces an innovative AI-Powered Intelligent Decision Support System. This approach enables precise forecasting, automated disease detection, and fair grading via advanced AI algorithms, effectively bridging the gap between modern technology and traditional farming.</p>
        </AccordionItem>

        <AccordionItem 
          icon={Compass} 
          title="Research Objectives" 
          isOpen={openSection === 3}
          onToggle={() => toggleSection(3)}
        >
          <p><strong>Main Objective:</strong> To develop a comprehensive, scalable AI solution that addresses identified gaps in current pepper farming systems while improving efficiency, yield, and market fairness.</p>
          <p>Specific Objectives:</p>
          <ul>
            <li>Build an AI-based system incorporating environmental data to accurately predict seasonal yield.</li>
            <li>Create an automated, image-based quality grading tool utilizing CNN architectures.</li>
            <li>Forecast market prices using robust ML time-series models for better strategic planning.</li>
            <li>Detect and classify crop diseases reliably through deep learning image classification.</li>
          </ul>
        </AccordionItem>

        <AccordionItem 
          icon={GitBranch} 
          title="Methodology" 
          isOpen={openSection === 4}
          onToggle={() => toggleSection(4)}
        >
          <p style={{ marginBottom: '25px' }}>Our methodology comprises four main components, each addressing specific aspects of the smart pepper farming ecosystem:</p>
          
          <div className="methodology-module">
            <h4 className="module-title">1. Yield Prediction Module</h4>
            <div className="module-content">
              <img src={getImgUrl("1L0fkhJVeqV_6C0zzIwKPYoYRx7GsBot2")} alt="Yield Prediction" className="module-image" />
              <div className="module-details">
                <p>Implementation of an efficient yield forecasting system using:</p>
                <ul>
                  <li>Model: EfficientNetB0 + XGBoost</li>
                  <li>Key Metrics: Train R²: 0.88, Test R²: 0.85, RMSE: 0.42, MAE: 0.31</li>
                  <li>Real-time environmental data integration</li>
                  <li>Dynamic recalculation based on changing weather conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">2. Disease Detection System</h4>
            <div className="module-content">
              <img src={getImgUrl("1cMLSxKOiYVLuVgxZmqBoJssGev_nrsvU")} alt="Disease Detection" className="module-image" />
              <div className="module-details">
                <p>Advanced deep learning system featuring:</p>
                <ul>
                  <li>Model: CNN for leaf disease detection</li>
                  <li>Key Metrics: Accuracy: 88.5%, F1-score: 0.87</li>
                  <li>Real-time image capture and classification of common pepper plant diseases</li>
                  <li>Integration with an expert recommendation engine</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">3. Automated Quality Grading</h4>
            <div className="module-content">
              <img src={getImgUrl("1OLk8I6bPCLLA5auMhQ7JVu5Mhr9fJy-D")} alt="Quality Grading" className="module-image" />
              <div className="module-details">
                <p>Image-based analysis for consistent assessment incorporating:</p>
                <ul>
                  <li>Models: YOLOv8s (Detection), MobileNetV3 (Classification)</li>
                  <li>Key Metrics: mAP50: 0.837, mAP50-95: 0.595, Mold Acc: 89.2%, Texture Acc: 87.6%</li>
                  <li>Classification into Grade 1, Grade 2, and FAQ standards</li>
                  <li>Elimination of manual grading biases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">4. Market Price Forecasting</h4>
            <div className="module-content">
              <img src={getImgUrl("1oxSlZXvpTJCUO4_SbFTLBZxwzaali3Ps")} alt="Market Price Forecasting" className="module-image" />
              <div className="module-details">
                <p>Time-series predictive modeling focusing on:</p>
                <ul>
                  <li>Model: LightGBM</li>
                  <li>Key Metrics: Accuracy: 87.97%, MAPE: 12.02%, R² = 0.87</li>
                  <li>Prediction of short-term and long-term price fluctuations</li>
                  <li>Data-driven strategic selling recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          icon={Cpu} 
          title="Technologies Used" 
          isOpen={openSection === 5}
          onToggle={() => toggleSection(5)}
        >
          <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', paddingTop: '10px' }}>
            <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Mobile App</h5>
              <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>Flutter</p>
            </div>
            <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Backend</h5>
              <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>Node.js</p>
            </div>
            <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Authentication</h5>
              <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>Firebase</p>
            </div>
            <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Databases</h5>
              <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>MongoDB, SQLite</p>
            </div>
            <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
              <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>APIs</h5>
              <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>FastAPI</p>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Domain;
