import React from 'react';
import '../styles/Pages.css';

const Domain = () => {
  return (
    <div className="container domain-page fade-in">
      <h2 className="section-title" style={{ marginTop: '40px' }}>Research Domain</h2>
      
      <div className="domain-section">
        <h3>1. Literature Survey</h3>
        <p>Traditional pepper farming in Sri Lanka faces severe limitations due to manual observation and reliance on historical methods. Existing Machine Learning approaches have been explored globally, but there is a distinct gap in adapting these systems to the unique environmental and agricultural context of Sri Lanka.</p>
      </div>

      <div className="domain-section">
        <h3>2. Research Gap</h3>
        <p>There is a lack of an integrated, end-to-end system tailored for Sri Lankan pepper farmers. Current solutions offer no explainable AI tailored for farmers with limited technical knowledge, and there is highly limited automation concerning the quality grading of the produce.</p>
      </div>

      <div className="domain-section">
        <h3>3. Research Problem</h3>
        <ul>
          <li>Unpredictable crop yield resulting in poor supply chain management.</li>
          <li>No standardized, automated proper quality grading mechanism.</li>
          <li>Price uncertainty leading to farmer exploitation.</li>
          <li>Slow and inaccurate leaf disease detection issues.</li>
        </ul>
      </div>

      <div className="domain-section">
        <h3>4. Research Objectives</h3>
        <ul>
          <li>Build an AI-based system to accurately predict yield.</li>
          <li>Create an automated, image-based quality grading tool.</li>
          <li>Forecast market prices using robust ML time-series models.</li>
          <li>Detect and classify crop diseases reliably.</li>
        </ul>
      </div>

      <div className="domain-section">
        <h3>5. Methodology</h3>
        <ul>
          <li><strong>Yield Prediction:</strong> Uses ML + environmental data to outline future harvest estimates.</li>
          <li><strong>Quality Grading:</strong> Image-based analysis to determine grades like Grade 1, Grade 2, and FAQ (Fair Average Quality).</li>
          <li><strong>Market Prediction:</strong> ML-based price forecasting built upon global and local market indexes.</li>
          <li><strong>Disease Detection:</strong> CNN-based image classification to identify key infections.</li>
        </ul>
      </div>

      <div className="domain-section border-none">
        <h3>6. Technologies Used</h3>
        <ul>
          <li><strong>Frontend:</strong> React / Vite for modern, responsive UI.</li>
          <li><strong>Backend:</strong> Node.js</li>
          <li><strong>ML:</strong> Python, TensorFlow/PyTorch models.</li>
          <li><strong>Database:</strong> NoSQL infrastructure (MongoDB/Firebase).</li>
        </ul>
      </div>
    </div>
  );
};

export default Domain;
