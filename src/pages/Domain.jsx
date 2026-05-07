import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Search,
  Target,
  Compass,
  GitBranch,
  Cpu,
  Layout,
  Shield,
  TrendingUp,
  Activity,
  BarChart3,
  CheckCircle2,
  Sprout,
  Award,
  Link,
  Microscope,
} from "lucide-react";
import AccordionItem from "../components/AccordionItem";

const getImgUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const Domain = () => {
  const [openSection, setOpenSection] = useState(-1);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  return (
    <div
      ref={sectionRef}
      className={`fade-in domain-page-container ${isVisible ? "page-animated" : ""}`}
    >
      {/* Core Modules Section */}
      <div className="container core-modules-container">
        <div className="badge-container anim-item anim-delay-1">
          <span className="section-badge">Our Pillars</span>
        </div>
        <div className="scope-header anim-item anim-delay-1">
          <h1>Core Modules</h1>
          <div className="underline"></div>
          <p>
            The four fundamental components driving our smart farming ecosystem
          </p>
        </div>
        <div className="modules-grid">
          {[
            {
              title: "Yield Prediction",
              icon: Sprout,
              desc: "Leveraging multimodal deep learning and environmental data for high-precision seasonal forecasts.",
              color: "#4caf50",
            },
            {
              title: "Quality Grading",
              icon: Award,
              desc: "Advanced CNN architectures for standardized, automated post-harvest pepper quality assessment.",
              color: "#2e7d32",
            },
            {
              title: "Market Forecast & Blockchain",
              icon: Link,
              desc: "Combining ML-driven price forecasting with immutable blockchain traceability protocols.",
              color: "#1b5e20",
            },
            {
              title: "Disease Detection",
              icon: Microscope,
              desc: "Deep convolutional neural networks for early identification and classification of plant pathology.",
              color: "#81c784",
            },
          ].map((mod, idx) => (
            <div
              key={idx}
              className="module-card anim-item"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="module-number">0{idx + 1}</div>
              <div
                className="module-icon-container"
                style={{ backgroundColor: `${mod.color}15`, color: mod.color }}
              >
                <mod.icon size={32} />
              </div>
              <h3 className="module-title">{mod.title}</h3>
              <p className="module-desc">{mod.desc}</p>
              <div className="module-footer">
                <div
                  className="module-line"
                  style={{ backgroundColor: mod.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="benefits-section-container">
        <div className="benefits-bg-glow"></div>
        <div className="container">
          <div className="badge-container anim-item">
            <span className="section-badge">Impact</span>
          </div>
          <div className="scope-header anim-item">
            <h1>Key Benefits</h1>
            <div className="underline"></div>
            <p>
              Empowering stakeholders with technology-driven agricultural
              solutions
            </p>
          </div>
          <div className="benefits-grid benefits-grid-layout">
            {[
              {
                title: "Increased Productivity",
                desc: "Optimize harvests with data-driven yield predictions and early disease warnings.",
              },
              {
                title: "Fair Market Value",
                desc: "Automated grading ensures farmers receive transparent and consistent pricing.",
              },
              {
                title: "Supply Chain Trust",
                desc: "Blockchain traceability guarantees product origin for global export compliance.",
              },
              {
                title: "Informed Decisions",
                desc: "Predictive price analytics help stakeholders navigate market volatility effectively.",
              },
              {
                title: "Integrated Ecosystem",
                desc: "A unified platform connecting all critical farming processes for seamless management.",
              },
              {
                title: "Enhanced Accessibility",
                desc: "User-friendly digital tools tailored specifically for local farmers to bridge the tech divide.",
              },
            ].map((ben, idx) => (
              <div
                key={idx}
                className="benefit-item anim-item"
                style={{
                  animationDelay: `${0.1 + idx * 0.15}s`,
                }}
              >
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="benefit-title">{ben.title}</h4>
                  <p className="benefit-desc">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="badge-container anim-item">
        <span className="section-badge">Deep Dive</span>
      </div>
      <div className="scope-header anim-item">
        <h1>Project Scope</h1>
        <div className="underline"></div>
        <p>Comprehensive overview of our research approach and methodology</p>
      </div>

      <div className="accordion-container container anim-item anim-delay-2">
        <AccordionItem
          icon={BookOpen}
          title="Literature Survey"
          isOpen={openSection === 0}
          onToggle={() => toggleSection(0)}
        >
          <div className="accordion-text-justify">
            <p>
              Pepper farming in Sri Lanka faces several challenges including
              yield uncertainty, inconsistent quality grading, market price
              fluctuations and plant diseases. Traditional farming practices
              mainly depend on manual observations and farmer experience, which
              often lead to inaccurate decision-making and reduced productivity
              [1].
            </p>

            <p>
              In the area of yield prediction, early studies mainly used
              statistical and regression-based models to estimate crop
              productivity using climatic factors [2][3]. However, these
              approaches showed limitations in capturing nonlinear environmental
              relationships. Recent research has introduced machine learning and
              explainable AI techniques such as XGBoost, Random Forest and SHAP
              to improve prediction accuracy and interpretability in
              agricultural forecasting systems [4][5]. These technologies
              demonstrate the potential of data-driven yield estimation for
              smart farming applications.
            </p>

            <p>
              Post-harvest quality grading is another important factor in
              determining the commercial value of black pepper. International
              standards such as ISO and Codex Alimentarius define several
              quality parameters including bulk density, contamination level and
              extraneous matter percentage [6][7]. Previous research has
              explored automated grading using computer vision and machine
              learning techniques to classify pepper quality based on visual
              characteristics [8][9]. Recent deep learning approaches using
              object detection and lightweight CNN architectures have further
              improved grading accuracy and consistency in real-world
              environments [15].
            </p>

            <p>
              Market price prediction has gained significant attention due to
              increasing market volatility affecting farmer income and export
              profitability. Traditional time-series forecasting models such as
              ARIMA were widely used for agricultural price prediction but often
              failed to capture external environmental and economic factors
              [10][17]. Modern machine learning models including XGBoost and
              LSTM have demonstrated improved forecasting performance by
              learning complex relationships within historical and real-time
              datasets [11][12]. In parallel, blockchain technology has emerged
              as a reliable solution for improving agricultural supply chain
              transparency and traceability by enabling secure and
              tamper-resistant record management [13][14].
            </p>

            <p>
              Plant disease detection has also evolved significantly with the
              advancement of deep learning and computer vision technologies.
              Earlier image-processing techniques relied on handcrafted color
              and texture features to identify plant diseases [15]. More recent
              studies have applied Convolutional Neural Networks (CNNs) for
              automatic disease classification from leaf images, achieving high
              accuracy and robustness under varying environmental conditions
              [16][17]. Deep learning approaches have proven highly effective
              for identifying visual symptoms such as discoloration, texture
              variation and leaf damage patterns in agricultural crops [16][17][18].
            </p>

            <p>
              Although previous studies have shown promising results in
              individual domains such as yield prediction, quality grading,
              market forecasting and disease detection, most existing solutions
              focus on isolated problems rather than providing an integrated
              smart farming ecosystem. Therefore, there is a need for a unified
              and scalable platform that combines these technologies to support
              end-to-end decision-making in Sri Lankan pepper farming.
            </p>

            <div style={{ marginTop: "25px" }}>
              <h4 style={{ marginBottom: "12px" }}>References</h4>

              <p>
                [1] J. Weerahewa, “Agricultural productivity challenges in Sri
                Lanka,” Agricultural Economics Review, vol. 32, no. 2, pp.
                45–59, 2021.
              </p>

              <p>
                [2] C. S. Karthik et al., “Black pepper (Piper nigrum L.) yield
                estimates using crop weather model,” Journal of Agrometeorology,
                vol. 22, no. 3, pp. 372–376, 2020.
              </p>

              <p>
                [3] K. Kandiannan et al., “Modeling the association of weather
                and black pepper yield,” Indian Journal of Horticulture, vol.
                68, no. 1, pp. 96–102, 2011.
              </p>

              <p>
                [4] M. F. Celik et al., “Explainable Artificial Intelligence for
                Cotton Yield Prediction With Multisource Data,” IEEE Geoscience
                and Remote Sensing Letters, vol. 20, 2023.
              </p>

              <p>
                [5] N. A. Zuma and M. S. Rahman, “From Data to Decisions: Crop
                Yield Prediction through Tuned XGBoost and Explainable AI,”
                Proc. QPAIN Conf., 2025.
              </p>

              <p>
                [6] ISO, ISO 959-1:1998 – Pepper (Piper nigrum L.), whole or
                ground – Part 1: Black pepper, 1998.
              </p>

              <p>
                [7] Codex Alimentarius, Standard for Black, White and Green
                Peppers (CXS 326-2017), 2017.
              </p>

              <p>
                [8] P. Pallewatta et al., “PepperTester: A non-destructive
                approach to assess the purity of black pepper seed samples,”
                Proc. International Conference on Smart Agriculture and Digital
                Farming, 2025.
              </p>

              <p>
                [9] C. M. D. Chaithra, “Black pepper grading system using
                feature extraction and machine learning approaches,” Journal of
                Emerging Technologies and Innovative Research, vol. 11, no. 9,
                2024.
              </p>

              <p>
                [10] P. Box, G. Jenkins and G. Reinsel, Time Series Analysis:
                Forecasting and Control, 4th ed., Wiley, 2008.
              </p>

              <p>
                [11] T. Chen and C. Guestrin, “XGBoost: A Scalable Tree Boosting
                System,” Proc. KDD '16, pp. 785–794, 2016.
              </p>

              <p>
                [12] S. Hochreiter and J. Schmidhuber, “Long Short-Term Memory,”
                Neural Computation, vol. 9, no. 8, pp. 1735–1780, 1997.
              </p>

              <p>
                [13] G. Lv, “Blockchain-Based Traceability for Agricultural
                Products: Enhancing Transparency and Consumer Trust,”
                Agriculture, vol. 13, no. 9, 2023.
              </p>

              <p>
                [14] A. Pakseresht et al., “Blockchain technology
                characteristics essential for the agriculture supply chain,”
                International Journal of Agricultural Sustainability, vol. 22,
                no. 1, 2024.
              </p>

              <p>
                [15] J. K. Patil and R. Kumar, “Advances in image processing for
                detection of plant diseases,” Journal of Advanced Bioinformatics
                Applications and Research, vol. 2, no. 2, pp. 135–141, 2011.
              </p>

              <p>
                [16] S. P. Mohanty, D. P. Hughes and M. Salathé, “Using deep
                learning for image-based plant disease detection,” Frontiers in
                Plant Science, vol. 7, 2016.
              </p>

              <p>
                [17] K. P. Ferentinos, “Deep learning models for plant disease
                detection and diagnosis,” Computers and Electronics in
                Agriculture, vol. 145, pp. 311–318, 2018.
              </p>

              <p>
                [18] S. Sladojevic et al., “Deep neural networks based
                recognition of plant diseases by leaf image classification,”
                Computational Intelligence and Neuroscience, 2016.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          icon={Search}
          title="Research Gap"
          isOpen={openSection === 1}
          onToggle={() => toggleSection(1)}
        >
          <div style={{ textAlign: "justify" }}>
            <p>
              Despite the technological advancements in global agriculture,
              several critical gaps remain within the Sri Lankan black pepper
              industry. Current yield prediction models often lack the localized
              precision required for Sri Lanka's unique micro-climatic
              conditions, failing to integrate real-time soil and environmental
              data for region-specific forecasts. In the area of disease
              management, existing solutions are predominantly standalone and
              fail to provide integrated communication channels between farmers
              and agricultural authorities for rapid intervention.
            </p>
            <p>
              There is also a notable absence of automated, standardized quality
              grading systems for post-harvest pepper. Farmers currently rely on
              subjective manual observations, which often leads to inconsistent
              valuations and unfair market practices. Furthermore, most
              commodity price forecasting models do not account for the specific
              interplay between local weather patterns and Sri Lankan export
              trends, leaving farmers vulnerable to market volatility.
            </p>
            <p>
              While Blockchain technology is frequently discussed, its practical
              application for small-scale spice traceability remains largely
              unexplored in the local context. Most importantly, there is a
              total lack of a unified, end-to-end digital ecosystem that
              integrates yield forecasting, disease detection, automated
              grading, and transparent supply chain tracking into a single,
              accessible platform tailored for Sri Lankan farmers.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem
          icon={Target}
          title="Research Problem & Solution"
          isOpen={openSection === 2}
          onToggle={() => toggleSection(2)}
        >
          <div style={{ textAlign: "justify" }}>
            <div
              style={{
                marginBottom: "25px",
                padding: "25px",
                background: "#f8fafc",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h4
                style={{
                  color: "var(--text-dark)",
                  marginBottom: "12px",
                  fontSize: "1.15rem",
                }}
              >
                The Core Challenge
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  marginBottom: "12px",
                  lineHeight: "1.6",
                }}
              >
                Sri Lanka's agricultural sector, particularly the pepper farming
                industry, faces escalating challenges in maintaining consistent
                profitability, quality, and supply chain integrity. Traditional,
                manual approaches are highly vulnerable to volatile climate
                changes, unpredictable market forces, and a lack of
                technological adoption, which ultimately leads to severe
                bottlenecks and economic losses.
              </p>
              <p
                style={{
                  color: "var(--text-light)",
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                <strong>Key Obstacles:</strong> Unpredictable crop yields
                hindering supply chain planning, absence of automated and
                standardized quality grading systems, severe price volatility
                causing farmer exploitation, and delayed, inaccurate detection
                of critical plant diseases.
              </p>
            </div>

            <div
              style={{
                padding: "25px",
                background: "#f8fafc",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h4
                style={{
                  color: "var(--text-dark)",
                  marginBottom: "12px",
                  fontSize: "1.15rem",
                }}
              >
                Our Innovative Solution
              </h4>
              <p
                style={{
                  color: "var(--text-light)",
                  marginBottom: "12px",
                  lineHeight: "1.6",
                }}
              >
                To address these systemic issues, our research introduces a
                comprehensive{" "}
                <strong>
                  Machine Learning Based Integrated Solution for Smart Pepper
                  Farming
                </strong>
                . We aim to revolutionize the traditional landscape by creating
                an accessible, digital ecosystem tailored specifically for local
                farmers.
              </p>
              <p
                style={{
                  color: "var(--text-light)",
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                By leveraging cutting-edge Artificial Intelligence and
                Blockchain technology, our platform enables precise yield
                forecasting, rapid automated disease detection, transparent
                AI-driven quality grading, and immutable supply chain tracking.
                This approach effectively bridges the gap between
                state-of-the-art agricultural technology and grassroots farming
                practices.
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          icon={Compass}
          title="Research Objectives"
          isOpen={openSection === 3}
          onToggle={() => toggleSection(3)}
        >
          <div style={{ textAlign: "justify" }}>
            <p>
              <strong>Main Objective:</strong> To develop a comprehensive,
              scalable solution that addresses identified gaps in current pepper
              farming systems while improving efficiency, yield and market
              fairness.
            </p>
            <p>Specific Objectives:</p>
            <ul>
              <li>
                Build ML-based system incorporating environmental data to
                accurately predict seasonal yield.
              </li>
              <li>
                Create an automated, image-based quality grading tool utilizing
                CNN architectures.
              </li>
              <li>
                Forecast market prices using robust ML time-series models for
                better strategic planning.
              </li>
              <li>
                Detect and classify crop diseases reliably through deep learning
                image classification.
              </li>
              <li>
                Implement a secure, blockchain-based traceability system to
                ensure supply chain transparency and batch verification.
              </li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem
          icon={GitBranch}
          title="Methodology"
          isOpen={openSection === 4}
          onToggle={() => toggleSection(4)}
        >
          <p style={{ marginBottom: "25px" }}>
            Our methodology comprises four main components, each addressing
            specific aspects of the smart pepper farming ecosystem:
          </p>

          <div className="methodology-module">
            <h4 className="module-title">1. Yield Prediction Module</h4>
            <div className="module-content">
              <img
                src={getImgUrl("1L0fkhJVeqV_6C0zzIwKPYoYRx7GsBot2")}
                alt="Yield Prediction"
                className="module-image"
              />
              <div className="module-details">
                <div
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#4b5563",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>
                    This study proposes a hybrid multimodal yield prediction
                    framework that integrates deep convolutional feature
                    extraction with structured environmental variables for black
                    pepper yield estimation. The dataset consists of RGB images,
                    soil moisture values, temperature measurements and
                    corresponding yield data (kg) collected from three pepper
                    plantations in the Kegalle District, Sri Lanka. All images
                    were resized to 224 × 224 pixels and normalized using the
                    EfficientNet preprocessing function. The dataset was
                    partitioned into training (80%) and testing (20%) subsets
                    using a fixed random seed to ensure reproducibility.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Transfer learning was employed using EfficientNetB0
                    pretrained on ImageNet, with the classification head removed
                    (include_top=False) and global average pooling applied to
                    obtain fixed-length feature embeddings. The CNN was used
                    solely as a feature extractor to mitigate overfitting due to
                    limited data availability. In addition to raw environmental
                    variables (soil moisture and temperature), nonlinear
                    engineered features including moisture–temperature ratio,
                    squared soil moisture and squared temperature terms were
                    introduced to model potential nonlinear interactions.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    To reduce redundancy in high-dimensional CNN features,
                    Principal Component Analysis (PCA) was applied to retain 100
                    principal components, with fitting performed exclusively on
                    the training set to prevent data leakage. Tabular features
                    were standardized using StandardScaler prior to
                    concatenation with PCA-reduced image features. The fused
                    feature representation was used to train an XGBoost
                    regressor, selected for its strong predictive performance,
                    built-in regularization (L1 and L2) and capability to model
                    nonlinear feature interactions.
                  </p>
                  <p>
                    To evaluate the impact of feature engineering and
                    dimensionality reduction, a baseline XGBoost model using raw
                    features without PCA or derived variables was implemented
                    for comparison. Model performance was assessed using the
                    coefficient of determination (R²), Root Mean Squared Error
                    (RMSE) and Mean Absolute Error (MAE). Model interpretability
                    was enhanced using SHAP to quantify feature contributions
                    within the XGBoost model and Grad-CAM to visualize image
                    regions influencing yield predictions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">2. Disease Detection System</h4>
            <div className="module-content">
              <img
                src={getImgUrl("1cMLSxKOiYVLuVgxZmqBoJssGev_nrsvU")}
                alt="Disease Detection"
                className="module-image"
              />
              <div className="module-details">
                <div
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#4b5563",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>
                    This research focuses on developing a deep learning-based
                    system for detecting black pepper diseases and providing
                    digital support for farmers. The system is designed to
                    identify common diseases in pepper plants while also
                    enabling communication and knowledge sharing among farmers
                    and agricultural authorities. A dataset of black pepper leaf
                    images was collected to train the disease detection model.
                    The dataset includes five major diseases: Yellow Mottle,
                    Leaf Blight, Pollu Disease, Slow Decline and Foot Rot.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Images were obtained from cultivation areas and other
                    agricultural sources to capture variations in disease
                    symptoms under different environmental and lighting
                    conditions. Before training, the images were preprocessed to
                    ensure consistency. This included resizing to a fixed input
                    size, normalizing pixel values and removing noise where
                    necessary. Data augmentation techniques such as rotation,
                    flipping and zooming were applied to increase dataset
                    diversity and reduce overfitting.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    A Convolutional Neural Network (CNN) was used to classify
                    leaf images into the five disease categories. CNNs are
                    effective for image classification as they automatically
                    learn relevant visual features such as color changes, spots
                    and texture patterns associated with plant diseases. The
                    model was trained over multiple epochs to improve
                    classification performance. Model evaluation was conducted
                    using a separate test dataset. Performance was assessed
                    using accuracy, precision, recall and F1-score to measure
                    the reliability of disease predictions.
                  </p>
                  <p>
                    In addition to disease detection, the system includes a
                    digital platform to support farmers. A knowledge sharing
                    feature allows farmers to post and exchange farming
                    experiences and information. A complaint management module
                    enables farmers to report issues related to diseases or
                    agricultural services through structured forms, which are
                    reviewed by government officers via an administrative
                    interface. All components are integrated into a single
                    platform, allowing farmers to detect diseases, access
                    information and communicate with authorities. This
                    integrated approach supports improved crop management and
                    informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">3. Automated Quality Grading</h4>
            <div className="module-content">
              <img
                src={getImgUrl("1OLk8I6bPCLLA5auMhQ7JVu5Mhr9fJy-D")}
                alt="Quality Grading"
                className="module-image"
              />
              <div className="module-details">
                <div
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#4b5563",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>
                    The proposed post-harvest pepper quality grading module
                    utilizes computer vision techniques to evaluate multiple
                    quality parameters of black pepper batches. The objective is
                    to provide a consistent and automated grading mechanism that
                    considers visual quality characteristics in accordance with
                    international standards.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    The grading process begins with batch information collection
                    through the mobile application, where farmers provide
                    details such as pepper variety, harvest date, drying method
                    and batch weight. These details are stored in the system
                    database and associated with the corresponding batch record.
                    For visual analysis, the system requires nine images
                    captured from three locations within the pepper sack: top,
                    middle and bottom. Each location includes full view, half
                    view and close-up images to ensure representative sampling
                    and reduce bias.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    The images are processed using a YOLOv8s object detection
                    model, which identifies pepper berries, adulterant seeds and
                    extraneous matter. Detected pepper berries are cropped and
                    passed to two MobileNetV3-based classifiers to detect mold
                    contamination and abnormal textures such as damaged or
                    broken berries. MobileNetV3 was selected due to its
                    efficiency and suitability for real-time applications.
                  </p>
                  <p>
                    Based on detection and classification results, quality
                    metrics including adulterant seed percentage, extraneous
                    matter percentage, mold contamination, abnormal texture and
                    healthy berry percentage are calculated. Adulterant and
                    extraneous matter percentages are computed relative to total
                    detected objects, while other metrics are calculated
                    relative to the total number of pepper berries. Results from
                    three images per location are averaged to obtain
                    sample-level values, and final batch metrics are derived by
                    averaging the top, middle and bottom samples. These values
                    are then processed by a grading engine that assigns weighted
                    scores based on predefined thresholds. The final score
                    determines the quality grade and generates a detailed report
                    with improvement recommendations for farmers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="methodology-module">
            <h4 className="module-title">4. Market Price Forecasting</h4>
            <div className="module-content">
              <img
                src={getImgUrl("1oxSlZXvpTJCUO4_SbFTLBZxwzaali3Ps")}
                alt="Market Price Forecasting"
                className="module-image"
              />
              <div className="module-details">
                <div
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#4b5563",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>
                    The proposed system integrates machine learning-based price
                    prediction with blockchain-based supply chain verification
                    to support decision-making and transparency in the Sri
                    Lankan pepper industry. The methodology focuses on two main
                    components: market price prediction and blockchain-based
                    traceability of pepper batches. The price prediction module
                    forecasts local market prices weekly for farmers and export
                    prices monthly for exporters, while the blockchain component
                    ensures secure verification and tracking of pepper batches
                    throughout the supply chain.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Historical data was collected from several reliable sources
                    to train the predictive models. Local pepper market price
                    data were obtained from the Department of Agriculture, Sri
                    Lanka, while export price data and economic indicators such
                    as export volume and exchange rates were collected from the
                    Central Bank of Sri Lanka. Weather information, including
                    temperature, humidity, rainfall and wind speed, was gathered
                    using the Open-Meteo weather API. These datasets were
                    integrated to create a multi-variable dataset capturing
                    environmental and economic factors influencing pepper price
                    fluctuations.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Before training, data preprocessing ensured quality and
                    consistency. Missing values were handled, and categorical
                    variables such as district, pepper type, and grade were
                    encoded into numerical formats. Feature engineering was
                    applied to extract meaningful attributes. For local price
                    prediction, inputs included district, pepper type, grade,
                    temperature, humidity, rainfall, wind speed, and time-based
                    variables (year, month, week). For export price prediction,
                    input included export volume, exchange rate, and time-based
                    variables (year, month). Several machine learning
                    algorithms, including Random Forest, XGBoost, CatBoost and
                    Light Gradient Boosting Machine (LightGBM), were evaluated
                    to identify the most suitable model.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    The model forecasts local pepper prices for the upcoming
                    week to assist farmers in selling decisions. Based on the
                    predicted price, farmers receive simple recommendations such
                    as sell, wait, or partially sell to support better marketing
                    decisions. In addition, the model forecasts monthly export
                    prices to help exporters plan their pricing strategies.
                  </p>
                  <p>
                    To improve transparency in the supply chain, a
                    blockchain-based verification mechanism is integrated into
                    the system. Each pepper batch created by a farmer is
                    recorded as a blockchain transaction. After administrative
                    verification, the batch information is stored in a new block
                    containing the batch data, timestamp, previous hash and
                    current hash, ensuring data immutability and traceability. A
                    QR code is then generated and linked to the blockchain
                    record, allowing stakeholders to access verified batch
                    information such as origin, status history and transaction
                    records.
                  </p>
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
          <div
            className="tech-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              paddingTop: "15px",
            }}
          >
            {[
              { name: "Flutter", role: "Mobile App", slug: "flutter" },
              { name: "React", role: "Admin Web", slug: "react" },
              { name: "Node.js", role: "Backend", slug: "nodedotjs" },
              { name: "Firebase", role: "Auth & Storage", slug: "firebase" },
              { name: "MongoDB", role: "Database", slug: "mongodb" },
              { name: "FastAPI", role: "ML Service", slug: "fastapi" },
              { name: "Python", role: "ML & Data", slug: "python" },
              {
                name: "Google Cloud",
                role: "Cloud Infra",
                slug: "googlecloud",
              },
              { name: "Docker", role: "Containerization", slug: "docker" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="shadow-card"
                style={{
                  padding: "25px 15px",
                  textAlign: "center",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.3s ease",
                  border: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f8fafc",
                    borderRadius: "12px",
                    padding: "12px",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt={tech.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      color: "var(--text-dark)",
                      marginBottom: "4px",
                      fontSize: "1rem",
                      fontWeight: "700",
                    }}
                  >
                    {tech.name}
                  </h5>
                  <p
                    style={{
                      color: "var(--primary)",
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      margin: 0,
                      opacity: 0.8,
                    }}
                  >
                    {tech.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Domain;
