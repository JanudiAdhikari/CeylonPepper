import React, { useState } from 'react';
import { BookOpen, Search, Target, Compass, GitBranch, Cpu } from 'lucide-react';
import AccordionItem from '../components/AccordionItem';

const getImgUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const Domain = () => {
    const [openSection, setOpenSection] = useState(-1);

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
                    <div style={{ marginBottom: '25px', padding: '25px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: 'var(--text-dark)', marginBottom: '12px', fontSize: '1.15rem' }}>The Core Challenge</h4>
                        <p style={{ color: 'var(--text-light)', marginBottom: '12px', lineHeight: '1.6' }}>
                            Sri Lanka's agricultural sector, particularly the pepper farming industry, faces escalating challenges in maintaining consistent profitability, quality, and supply chain integrity. Traditional, manual approaches are highly vulnerable to volatile climate changes, unpredictable market forces, and a lack of technological adoption, which ultimately leads to severe bottlenecks and economic losses.
                        </p>
                        <p style={{ color: 'var(--text-light)', margin: 0, lineHeight: '1.6' }}>
                            <strong>Key Obstacles:</strong> Unpredictable crop yields hindering supply chain planning, absence of automated and standardized quality grading systems, severe price volatility causing farmer exploitation, and delayed, inaccurate detection of critical plant diseases.
                        </p>
                    </div>

                    <div style={{ padding: '25px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ color: 'var(--text-dark)', marginBottom: '12px', fontSize: '1.15rem' }}>Our Innovative Solution</h4>
                        <p style={{ color: 'var(--text-light)', marginBottom: '12px', lineHeight: '1.6' }}>
                            To address these systemic issues, our research introduces a comprehensive <strong>Machine Learning Based Integrated Solution for Smart Pepper Farming</strong>. We aim to revolutionize the traditional landscape by creating an accessible, digital ecosystem tailored specifically for local farmers.
                        </p>
                        <p style={{ color: 'var(--text-light)', margin: 0, lineHeight: '1.6' }}>
                            By leveraging cutting-edge Artificial Intelligence and Blockchain technology, our platform enables precise yield forecasting, rapid automated disease detection, transparent AI-driven quality grading, and immutable supply chain tracking. This approach effectively bridges the gap between state-of-the-art agricultural technology and grassroots farming practices.
                        </p>
                    </div>
                </AccordionItem>

                <AccordionItem
                    icon={Compass}
                    title="Research Objectives"
                    isOpen={openSection === 3}
                    onToggle={() => toggleSection(3)}
                >
                    <p><strong>Main Objective:</strong> To develop a comprehensive, scalable solution that addresses identified gaps in current pepper farming systems while improving efficiency, yield and market fairness.</p>
                    <p>Specific Objectives:</p>
                    <ul>
                        <li>Build ML-based system incorporating environmental data to accurately predict seasonal yield.</li>
                        <li>Create an automated, image-based quality grading tool utilizing CNN architectures.</li>
                        <li>Forecast market prices using robust ML time-series models for better strategic planning.</li>
                        <li>Detect and classify crop diseases reliably through deep learning image classification.</li>
                        <li>Implement a secure, blockchain-based traceability system to ensure supply chain transparency and batch verification.</li>
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
                                <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', textAlign: 'justify' }}>
                                    <p style={{ marginBottom: '10px' }}>This study proposes a hybrid multimodal yield prediction framework that integrates deep convolutional feature extraction with structured environmental variables for black pepper yield estimation. The dataset consists of RGB images, soil moisture values, temperature measurements and corresponding yield data (kg) collected from three pepper plantations in the Kegalle District, Sri Lanka. All images were resized to 224 × 224 pixels and normalized using the EfficientNet preprocessing function. The dataset was partitioned into training (80%) and testing (20%) subsets using a fixed random seed to ensure reproducibility.</p>
                                    <p style={{ marginBottom: '10px' }}>Transfer learning was employed using EfficientNetB0 pretrained on ImageNet, with the classification head removed (include_top=False) and global average pooling applied to obtain fixed-length feature embeddings. The CNN was used solely as a feature extractor to mitigate overfitting due to limited data availability. In addition to raw environmental variables (soil moisture and temperature), nonlinear engineered features including moisture–temperature ratio, squared soil moisture and squared temperature terms were introduced to model potential nonlinear interactions.</p>
                                    <p style={{ marginBottom: '10px' }}>To reduce redundancy in high-dimensional CNN features, Principal Component Analysis (PCA) was applied to retain 100 principal components, with fitting performed exclusively on the training set to prevent data leakage. Tabular features were standardized using StandardScaler prior to concatenation with PCA-reduced image features. The fused feature representation was used to train an XGBoost regressor, selected for its strong predictive performance, built-in regularization (L1 and L2) and capability to model nonlinear feature interactions.</p>
                                    <p>To evaluate the impact of feature engineering and dimensionality reduction, a baseline XGBoost model using raw features without PCA or derived variables was implemented for comparison. Model performance was assessed using the coefficient of determination (R²), Root Mean Squared Error (RMSE) and Mean Absolute Error (MAE). Model interpretability was enhanced using SHAP to quantify feature contributions within the XGBoost model and Grad-CAM to visualize image regions influencing yield predictions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="methodology-module">
                        <h4 className="module-title">2. Disease Detection System</h4>
                        <div className="module-content">
                            <img src={getImgUrl("1cMLSxKOiYVLuVgxZmqBoJssGev_nrsvU")} alt="Disease Detection" className="module-image" />
                            <div className="module-details">
                                <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', textAlign: 'justify' }}>
                                    <p style={{ marginBottom: '10px' }}>This research focuses on developing a deep learning-based system for detecting black pepper diseases and providing digital support for farmers. The system is designed to identify common diseases in pepper plants while also enabling communication and knowledge sharing among farmers and agricultural authorities. A dataset of black pepper leaf images was collected to train the disease detection model. The dataset includes five major diseases: Yellow Mottle, Leaf Blight, Pollu Disease, Slow Decline and Foot Rot.</p>
                                    <p style={{ marginBottom: '10px' }}>Images were obtained from cultivation areas and other agricultural sources to capture variations in disease symptoms under different environmental and lighting conditions. Before training, the images were preprocessed to ensure consistency. This included resizing to a fixed input size, normalizing pixel values and removing noise where necessary. Data augmentation techniques such as rotation, flipping and zooming were applied to increase dataset diversity and reduce overfitting.</p>
                                    <p style={{ marginBottom: '10px' }}>A Convolutional Neural Network (CNN) was used to classify leaf images into the five disease categories. CNNs are effective for image classification as they automatically learn relevant visual features such as color changes, spots and texture patterns associated with plant diseases. The model was trained over multiple epochs to improve classification performance. Model evaluation was conducted using a separate test dataset. Performance was assessed using accuracy, precision, recall and F1-score to measure the reliability of disease predictions.</p>
                                    <p>In addition to disease detection, the system includes a digital platform to support farmers. A knowledge sharing feature allows farmers to post and exchange farming experiences and information. A complaint management module enables farmers to report issues related to diseases or agricultural services through structured forms, which are reviewed by government officers via an administrative interface. All components are integrated into a single platform, allowing farmers to detect diseases, access information and communicate with authorities. This integrated approach supports improved crop management and informed decision-making.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="methodology-module">
                        <h4 className="module-title">3. Automated Quality Grading</h4>
                        <div className="module-content">
                            <img src={getImgUrl("1OLk8I6bPCLLA5auMhQ7JVu5Mhr9fJy-D")} alt="Quality Grading" className="module-image" />
                            <div className="module-details">
                                <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', textAlign: 'justify' }}>
                                    <p style={{ marginBottom: '10px' }}>The proposed post-harvest pepper quality grading module utilizes computer vision techniques to evaluate multiple quality parameters of black pepper batches. The objective is to provide a consistent and automated grading mechanism that considers visual quality characteristics in accordance with international standards.</p>
                                    <p style={{ marginBottom: '10px' }}>The grading process begins with batch information collection through the mobile application, where farmers provide details such as pepper variety, harvest date, drying method and batch weight. These details are stored in the system database and associated with the corresponding batch record. For visual analysis, the system requires nine images captured from three locations within the pepper sack: top, middle and bottom. Each location includes full view, half view and close-up images to ensure representative sampling and reduce bias.</p>
                                    <p style={{ marginBottom: '10px' }}>The images are processed using a YOLOv8s object detection model, which identifies pepper berries, adulterant seeds and extraneous matter. Detected pepper berries are cropped and passed to two MobileNetV3-based classifiers to detect mold contamination and abnormal textures such as damaged or broken berries. MobileNetV3 was selected due to its efficiency and suitability for real-time applications.</p>
                                    <p>Based on detection and classification results, quality metrics including adulterant seed percentage, extraneous matter percentage, mold contamination, abnormal texture and healthy berry percentage are calculated. Adulterant and extraneous matter percentages are computed relative to total detected objects, while other metrics are calculated relative to the total number of pepper berries. Results from three images per location are averaged to obtain sample-level values, and final batch metrics are derived by averaging the top, middle and bottom samples. These values are then processed by a grading engine that assigns weighted scores based on predefined thresholds. The final score determines the quality grade and generates a detailed report with improvement recommendations for farmers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="methodology-module">
                        <h4 className="module-title">4. Market Price Forecasting</h4>
                        <div className="module-content">
                            <img src={getImgUrl("1oxSlZXvpTJCUO4_SbFTLBZxwzaali3Ps")} alt="Market Price Forecasting" className="module-image" />
                            <div className="module-details">
                                <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4b5563', textAlign: 'justify' }}>
                                    <p style={{ marginBottom: '10px' }}>The proposed system integrates machine learning-based price prediction with blockchain-based supply chain verification to support decision-making and transparency in the Sri Lankan pepper industry. The methodology focuses on two main components: market price prediction and blockchain-based traceability of pepper batches. The price prediction module forecasts local market prices weekly for farmers and export prices monthly for exporters, while the blockchain component ensures secure verification and tracking of pepper batches throughout the supply chain.</p>
                                    <p style={{ marginBottom: '10px' }}>Historical data was collected from several reliable sources to train the predictive models. Local pepper market price data were obtained from the Department of Agriculture, Sri Lanka, while export price data and economic indicators such as export volume and exchange rates were collected from the Central Bank of Sri Lanka. Weather information, including temperature, humidity, rainfall and wind speed, was gathered using the Open-Meteo weather API. These datasets were integrated to create a multi-variable dataset capturing environmental and economic factors influencing pepper price fluctuations.</p>
                                    <p style={{ marginBottom: '10px' }}>Before training, data preprocessing ensured quality and consistency. Missing values were handled, and categorical variables such as district, pepper type, and grade were encoded into numerical formats. Feature engineering was applied to extract meaningful attributes. For local price prediction, inputs included district, pepper type, grade, temperature, humidity, rainfall, wind speed, and time-based variables (year, month, week). For export price prediction, input included export volume, exchange rate, and time-based variables (year, month). Several machine learning algorithms, including Random Forest, XGBoost, CatBoost and Light Gradient Boosting Machine (LightGBM), were evaluated to identify the most suitable model.</p>
                                    <p style={{ marginBottom: '10px' }}>The model forecasts local pepper prices for the upcoming week to assist farmers in selling decisions. Based on the predicted price, farmers receive simple recommendations such as sell, wait, or partially sell to support better marketing decisions. In addition, the model forecasts monthly export prices to help exporters plan their pricing strategies.</p>
                                    <p>To improve transparency in the supply chain, a blockchain-based verification mechanism is integrated into the system. Each pepper batch created by a farmer is recorded as a blockchain transaction. After administrative verification, the batch information is stored in a new block containing the batch data, timestamp, previous hash and current hash, ensuring data immutability and traceability. A QR code is then generated and linked to the blockchain record, allowing stakeholders to access verified batch information such as origin, status history and transaction records.</p>
                                </div>
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
                            <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Database</h5>
                            <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>MongoDB</p>
                        </div>
                        <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
                            <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>APIs</h5>
                            <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>FastAPI</p>
                        </div>
                        <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
                            <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Machine Learning</h5>
                            <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>Python</p>
                        </div>
                        <div className="tech-card shadow-card" style={{ padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
                            <h5 style={{ color: 'var(--primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Deployment</h5>
                            <p style={{ fontWeight: '500', color: '#374151', margin: 0 }}>GCP</p>
                        </div>
                    </div>
                </AccordionItem>
            </div>
        </div>
    );
};

export default Domain;
