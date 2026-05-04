import React, { useState } from 'react';
import { BookOpen, Search, Target, Compass, GitBranch, Cpu } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const getImgUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const Domain = () => {
  const [openSection, setOpenSection] = useState(-1);
  const toggleSection = (i) => setOpenSection(openSection === i ? -1 : i);

  const techs = [
    { icon: '📱', label: 'Mobile App', value: 'Flutter' },
    { icon: '⚙️', label: 'Backend', value: 'Node.js' },
    { icon: '🔐', label: 'Auth', value: 'Firebase' },
    { icon: '🗄️', label: 'Database', value: 'MongoDB' },
    { icon: '⚡', label: 'APIs', value: 'FastAPI' },
    { icon: '🧠', label: 'ML / AI', value: 'Python' },
    { icon: '☁️', label: 'Deployment', value: 'GCP' },
    { icon: '📊', label: 'Models', value: 'XGBoost · YOLO · CNN' },
  ];

  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="scope-hero">
        <div className="scope-hero-inner">
          <div className="scope-tag">
            <span className="scope-tag-dot" />
            Research Domain
          </div>
          <h1>Project <em>Scope</em> &amp; Methodology</h1>
          <p>A comprehensive overview of our research approach, problem statement, and the innovative methodologies driving smart pepper farming in Sri Lanka.</p>
        </div>
      </div>

      {/* Accordion */}
      <div className="accordion-wrapper">
        <AccordionItem icon={BookOpen} title="Literature Survey" isOpen={openSection === 0} onToggle={() => toggleSection(0)}>
          <p>The literature review examines existing research and systems related to traditional pepper farming in Sri Lanka. Several studies have explored similar challenges, providing valuable insights into current approaches and their limitations.</p>
          <p>Traditional pepper farming faces severe limitations due to manual observation and reliance on historical methods. Existing Machine Learning approaches have been explored globally, but there is a distinct gap in adapting these systems to the unique environmental and agricultural context of Sri Lanka.</p>
        </AccordionItem>

        <AccordionItem icon={Search} title="Research Gap" isOpen={openSection === 1} onToggle={() => toggleSection(1)}>
          <p>Current systems exhibit several critical limitations that hinder their effectiveness. These gaps represent significant opportunities for innovation and improvement.</p>
          <p>There is a notable lack of an integrated, end-to-end system tailored specifically for Sri Lankan pepper farmers. Current solutions offer no explainable AI tailored for farmers with limited technical knowledge.</p>
          <p>Furthermore, there is highly limited automation concerning the quality grading of the produce, often leading to inconsistencies and unfair market practices.</p>
        </AccordionItem>

        <AccordionItem icon={Target} title="Research Problem & Solution" isOpen={openSection === 2} onToggle={() => toggleSection(2)}>
          <div style={{ marginBottom: '24px', padding: '24px', background: 'linear-gradient(135deg, rgba(26,107,46,0.04), rgba(92,184,92,0.04))', borderRadius: '14px', border: '1px solid rgba(26,107,46,0.12)' }}>
            <h4 style={{ color: 'var(--text-dark)', marginBottom: '12px', fontSize: '1.05rem', fontFamily: "'Playfair Display', serif" }}>The Core Challenge</h4>
            <p>Sri Lanka's agricultural sector, particularly the pepper farming industry, faces escalating challenges in maintaining consistent profitability, quality, and supply chain integrity. Traditional, manual approaches are highly vulnerable to volatile climate changes, unpredictable market forces, and a lack of technological adoption, which ultimately leads to severe bottlenecks and economic losses.</p>
            <p><strong>Key Obstacles:</strong> Unpredictable crop yields hindering supply chain planning, absence of automated quality grading systems, severe price volatility causing farmer exploitation, and delayed detection of critical plant diseases.</p>
          </div>
          <div style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(26,107,46,0.04), rgba(92,184,92,0.04))', borderRadius: '14px', border: '1px solid rgba(26,107,46,0.12)' }}>
            <h4 style={{ color: 'var(--text-dark)', marginBottom: '12px', fontSize: '1.05rem', fontFamily: "'Playfair Display', serif" }}>Our Innovative Solution</h4>
            <p>To address these systemic issues, our research introduces a comprehensive <strong>Machine Learning Based Integrated Solution for Smart Pepper Farming</strong>. By leveraging Artificial Intelligence and Blockchain technology, our platform enables precise yield forecasting, rapid automated disease detection, transparent AI-driven quality grading, and immutable supply chain tracking.</p>
          </div>
        </AccordionItem>

        <AccordionItem icon={Compass} title="Research Objectives" isOpen={openSection === 3} onToggle={() => toggleSection(3)}>
          <p><strong>Main Objective:</strong> To develop a comprehensive, scalable solution that addresses identified gaps in current pepper farming systems while improving efficiency, yield, and market fairness.</p>
          <p>Specific Objectives:</p>
          <ul>
            <li>Build ML-based system incorporating environmental data to accurately predict seasonal yield.</li>
            <li>Create an automated, image-based quality grading tool utilizing CNN architectures.</li>
            <li>Forecast market prices using robust ML time-series models for better strategic planning.</li>
            <li>Detect and classify crop diseases reliably through deep learning image classification.</li>
            <li>Implement a secure, blockchain-based traceability system to ensure supply chain transparency and batch verification.</li>
          </ul>
        </AccordionItem>

        <AccordionItem icon={GitBranch} title="Methodology" isOpen={openSection === 4} onToggle={() => toggleSection(4)}>
          <p style={{ marginBottom: '28px' }}>Our methodology comprises four main components, each addressing specific aspects of the smart pepper farming ecosystem:</p>

          {[
            {
              num: '01',
              title: 'Yield Prediction Module',
              img: '1L0fkhJVeqV_6C0zzIwKPYoYRx7GsBot2',
              text: [
                'This study proposes a hybrid multimodal yield prediction framework that integrates deep convolutional feature extraction with structured environmental variables for black pepper yield estimation. The dataset consists of RGB images, soil moisture values, temperature measurements and corresponding yield data (kg) collected from three pepper plantations in the Kegalle District, Sri Lanka. All images were resized to 224 × 224 pixels.',
                'Transfer learning was employed using EfficientNetB0 pretrained on ImageNet, with the classification head removed and global average pooling applied to obtain fixed-length feature embeddings. PCA was applied to retain 100 principal components. The fused feature representation was used to train an XGBoost regressor, selected for its strong predictive performance and built-in regularization.',
                'Model interpretability was enhanced using SHAP to quantify feature contributions within the XGBoost model and Grad-CAM to visualize image regions influencing yield predictions.',
              ],
            },
            {
              num: '02',
              title: 'Disease Detection System',
              img: '1cMLSxKOiYVLuVgxZmqBoJssGev_nrsvU',
              text: [
                'This research focuses on developing a deep learning-based system for detecting black pepper diseases. The system identifies five major diseases: Yellow Mottle, Leaf Blight, Pollu Disease, Slow Decline and Foot Rot. Images were collected from cultivation areas under various environmental and lighting conditions.',
                'A CNN was used to classify leaf images into five disease categories, automatically learning relevant visual features such as color changes, spots and texture patterns. Data augmentation techniques including rotation, flipping and zooming were applied to increase dataset diversity.',
                'In addition to disease detection, the system includes a knowledge-sharing platform allowing farmers to exchange farming experiences, and a complaint management module for reporting issues to government agricultural officers.',
              ],
            },
            {
              num: '03',
              title: 'Automated Quality Grading',
              img: '1OLk8I6bPCLLA5auMhQ7JVu5Mhr9fJy-D',
              text: [
                'The post-harvest pepper quality grading module utilizes computer vision to evaluate multiple quality parameters in accordance with international standards. The system requires nine images from three locations within the pepper sack: top, middle and bottom, with full view, half view and close-up captures.',
                'Images are processed using a YOLOv8s object detection model to identify pepper berries, adulterant seeds and extraneous matter. Detected berries are passed to two MobileNetV3-based classifiers detecting mold contamination and abnormal textures.',
                'A grading engine assigns weighted scores based on predefined thresholds to generate a quality grade and detailed report with improvement recommendations for farmers.',
              ],
            },
            {
              num: '04',
              title: 'Market Price Forecasting',
              img: '1oxSlZXvpTJCUO4_SbFTLBZxwzaali3Ps',
              text: [
                'The system integrates ML-based price prediction with blockchain-based supply chain verification. The price prediction module forecasts local market prices weekly for farmers and export prices monthly for exporters. Historical data was collected from the Department of Agriculture and Central Bank of Sri Lanka.',
                'Several ML algorithms including Random Forest, XGBoost, CatBoost and LightGBM were evaluated. Based on predicted prices, farmers receive sell/wait/partially-sell recommendations for better marketing decisions.',
                'Each pepper batch is recorded as a blockchain transaction. After verification, batch information is stored in an immutable block and a QR code is generated for stakeholder access to verified origin and transaction records.',
              ],
            },
          ].map((mod) => (
            <div className="methodology-module" key={mod.num}>
              <div className="module-badge">{mod.num}</div>
              <h4 className="module-title">{mod.title}</h4>
              <div className="module-content">
                <img
                  src={getImgUrl(mod.img)}
                  alt={mod.title}
                  className="module-image"
                />
                <div className="module-details">
                  {mod.text.map((t, i) => <p key={i}>{t}</p>)}
                </div>
              </div>
            </div>
          ))}
        </AccordionItem>

        <AccordionItem icon={Cpu} title="Technologies Used" isOpen={openSection === 5} onToggle={() => toggleSection(5)}>
          <div className="tech-grid">
            {techs.map((t) => (
              <div className="tech-card" key={t.label}>
                <span className="tech-card-icon">{t.icon}</span>
                <h5>{t.label}</h5>
                <p>{t.value}</p>
              </div>
            ))}
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Domain;