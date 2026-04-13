import React from 'react';
import { BookOpen, Search, Target, Compass, GitBranch, Cpu } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const Domain = () => {
  return (
    <div className="fade-in" style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '60px' }}>
      <div className="scope-header">
        <h1>Project Scope</h1>
        <div className="underline"></div>
        <p>Comprehensive overview of our research approach and methodology</p>
      </div>

      <div className="accordion-wrapper">
        <AccordionItem icon={BookOpen} title="Literature Survey" isOpen={true}>
          <p>The literature review examines existing research and systems related to traditional pepper farming in Sri Lanka. Several studies have explored similar challenges, providing valuable insights into current approaches and their limitations.</p>
          <p>Traditional pepper farming faces severe limitations due to manual observation and reliance on historical methods. Existing Machine Learning approaches have been explored globally, but there is a distinct gap in adapting these systems to the unique environmental and agricultural context of Sri Lanka.</p>
        </AccordionItem>

        <AccordionItem icon={Search} title="Research Gap">
          <p>Current systems exhibit several critical limitations that hinder their effectiveness. These gaps represent significant opportunities for innovation and improvement.</p>
          <p>There is a notable lack of an integrated, end-to-end system tailored specifically for Sri Lankan pepper farmers. Current solutions offer no explainable AI tailored for farmers with limited technical knowledge.</p>
          <p>Furthermore, there is highly limited automation concerning the quality grading of the produce, often leading to inconsistencies and unfair market practices.</p>
        </AccordionItem>

        <AccordionItem icon={Target} title="Research Problem & Solution">
          <p><strong>Research Problem:</strong> The agricultural sector faces increasing challenges in managing supply chains while maintaining profitability and quality. Traditional approaches fail to scale effectively, leading to bottlenecks.</p>
          <p>The core problems include unpredictable crop yield resulting in poor supply chain management, lack of standardized automated quality grading, price uncertainty leading to farmer exploitation, and slow, inaccurate leaf disease detection.</p>
          <p><strong>Proposed Solution:</strong> Our research introduces an innovative AI-Powered Intelligent Decision Support System. This approach enables precise forecasting, automated disease detection, and fair grading via advanced AI algorithms, effectively bridging the gap between modern technology and traditional farming.</p>
        </AccordionItem>

        <AccordionItem icon={Compass} title="Research Objectives">
          <p><strong>Main Objective:</strong> To develop a comprehensive, scalable AI solution that addresses identified gaps in current pepper farming systems while improving efficiency, yield, and market fairness.</p>
          <p>Specific Objectives:</p>
          <ul>
            <li>Build an AI-based system incorporating environmental data to accurately predict seasonal yield.</li>
            <li>Create an automated, image-based quality grading tool utilizing CNN architectures.</li>
            <li>Forecast market prices using robust ML time-series models for better strategic planning.</li>
            <li>Detect and classify crop diseases reliably through deep learning image classification.</li>
          </ul>
        </AccordionItem>

        <AccordionItem icon={GitBranch} title="Methodology">
          <p style={{ marginBottom: '25px' }}>Our methodology comprises four main components, each addressing specific aspects of the smart pepper farming ecosystem:</p>
          
          <div className="methodology-module">
            <h4 className="module-title">1. Yield Prediction Module</h4>
            <div className="module-content">
              <div className="module-placeholder">📈</div>
              <div className="module-details">
                <p>Implementation of an efficient yield forecasting system using:</p>
                <ul>
                  <li>Machine Learning models (Random Forest, XGBoost)</li>
                  <li>Real-time environmental data integration (Rainfall, Temperature)</li>
                  <li>Historical crop data analysis</li>
                  <li>Dynamic recalculation based on changing weather conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">2. Disease Detection System</h4>
            <div className="module-content">
              <div className="module-placeholder">🔍</div>
              <div className="module-details">
                <p>Advanced deep learning system featuring:</p>
                <ul>
                  <li>CNN-based Deep Learning models for leaf disease detection</li>
                  <li>Real-time image capture and upload interface</li>
                  <li>High accuracy classification of common pepper plant diseases</li>
                  <li>Integration with an expert recommendation engine</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">3. Automated Quality Grading</h4>
            <div className="module-content">
              <div className="module-placeholder">⭐</div>
              <div className="module-details">
                <p>Image-based analysis for consistent assessment incorporating:</p>
                <ul>
                  <li>Computer vision algorithms for physical trait extraction</li>
                  <li>Classification into Grade 1, Grade 2, and FAQ standards</li>
                  <li>Elimination of manual grading biases</li>
                  <li>Fast and reliable processing capabilities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">4. Market Price Forecasting</h4>
            <div className="module-content">
              <div className="module-placeholder">💰</div>
              <div className="module-details">
                <p>Time-series predictive modeling focusing on:</p>
                <ul>
                  <li>Analysis of global and local market price indexes</li>
                  <li>Prediction of short-term and long-term price fluctuations</li>
                  <li>Empowering farmers with transparent pricing knowledge</li>
                  <li>Data-driven strategic selling recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem icon={Cpu} title="Technologies Used">
          <ul className="tech-list">
            <li><strong>Frontend Development:</strong> React / Vite for modern, responsive UI.</li>
            <li><strong>Backend Infrastructure:</strong> Node.js server environment.</li>
            <li><strong>Machine Learning:</strong> Python, TensorFlow/PyTorch models for prediction and image analysis.</li>
            <li><strong>Database:</strong> NoSQL infrastructure (MongoDB/Firebase) for flexible data storage.</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Domain;
