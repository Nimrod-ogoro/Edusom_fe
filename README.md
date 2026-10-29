# ED AI — AI-Powered Education Platform

**Personalized learning. Smarter teaching. Measurable progress.**

ED AI is an AI-powered educational platform designed to transform remedial learning, holiday engagement, and academic performance tracking under Kenya's Competency-Based Curriculum (CBC).

The platform connects students, teachers, and parents through an intelligent learning system that analyzes examination performance, identifies knowledge gaps, generates personalized learning programmes, and adapts tutoring to each student's progress.

Our vision is to build an education intelligence infrastructure for Kenya and, eventually, across Africa.

## Vision

To make personalized, adaptive, and evidence-based education accessible to every learner by combining artificial intelligence, curriculum-aligned learning, and continuous performance analysis.

## Core Features

### 1. Student Panel
- Personalized student dashboard.
- Interactive AI tutoring sessions.
- Curriculum-aligned lessons and practice exercises.
- Adaptive explanations based on student responses and observed learning progress.
- Personalized holiday and remedial learning programmes.
- Progress tracking, quizzes, and assessments.
- Identification of academic strengths and areas requiring improvement.

### 2. Teacher Panel
- Student and class management.
- Examination paper and assessment uploads.
- Subject-specific performance analysis.
- Identification of learning gaps and recurring misconceptions.
- Curriculum-aligned student reports.
- Monitoring of tutoring sessions and learning progress.
- Tools to review AI-generated recommendations and learning plans.

### 3. Parent Panel
- View student academic progress.
- Track completed lessons and learning activities.
- Monitor strengths and areas needing additional support.
- Review assessment results and improvement trends.
- Receive learning recommendations and progress updates.

### 4. AI-Powered Examination Analysis
ED AI aims to analyze uploaded examination papers and student answers to identify:

- Subject-specific strengths and weaknesses.
- Topics and skills requiring additional practice.
- Repeated errors and possible misconceptions.
- Foundational knowledge gaps.
- Recommended learning activities and revision priorities.

The system is designed to support different examination formats, including scanned documents, PDFs, and handwritten responses, subject to the capabilities and validation of the relevant processing components.

### 5. Adaptive AI Tutoring
The tutoring engine aims to provide personalized instruction by considering:

- The student's grade and subject.
- Relevant curriculum learning outcomes.
- Previous assessment results.
- Current learning objectives.
- Earlier attempts and observed errors.
- The student's responses to different explanations.

When a student struggles, the tutor can attempt alternative explanations, provide worked examples, ask guiding questions, and adjust practice difficulty.

### 6. Personalized Holiday and Remedial Programmes
The platform aims to transform examination results into structured learning plans that include:

- Priority topics based on diagnostic results.
- Prerequisite concepts that need revision.
- Daily and weekly learning objectives.
- Guided AI tutoring sessions.
- Practice exercises and progress checks.
- Revision of previously mastered topics.
- Final assessments to measure learning progress.

Programmes should adapt as students demonstrate mastery or require additional support.

### 7. Learning Progress and Reporting
ED AI is designed to compare baseline assessments with subsequent results, track topic-level progress, and provide understandable reports for students, teachers, and parents.

Progress indicators will be based on recorded assessments and learning activities rather than unsupported AI-generated claims.

## Technology Stack

The frontend is built using React and Vite.

| Component | Technology |
|---|---|
| Web frontend | React |
| Development server and build tooling | Vite |
| Frontend language | JavaScript / JSX |
| UI styling | CSS or the project's configured styling framework |
| Code quality | ESLint |
| AI integration | Planned open-weight model integration, including evaluation of Kimi models |
| Backend | To be configured |
| Database | To be configured |
| Mobile application | Planned |
| AI infrastructure | Planned local and cloud-based inference |

The exact backend, database, model-serving infrastructure, and mobile technologies will be documented as the architecture develops.

## Getting Started

### Prerequisites

Install the following:

- Node.js — a current supported LTS version.
- npm, included with Node.js.
- Git, if you intend to clone the repository.

### Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate into the project directory:

```bash
cd <YOUR_PROJECT_DIRECTORY>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal, typically:

```text
http://localhost:5173
```

Open the URL in your browser to view the application.

### Available Scripts

Run the following commands from the project directory:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server. |
| `npm run build` | Build the production frontend. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint checks. |

These scripts assume the standard React + Vite project configuration. Check `package.json` if your project uses different scripts.

## Project Structure

A typical project structure is:

```text
ed-ai/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

This is an illustrative structure. Actual directories should reflect the files currently present in the repository.

## Development Roadmap

### Phase 1 — Frontend Foundation
- Establish the ED AI visual identity.
- Build the main application layout and navigation.
- Develop the student, teacher, and parent interfaces.
- Implement responsive layouts for desktop, tablet, and mobile browsers.
- Establish reusable UI components.

### Phase 2 — Authentication and Core Platform
- Implement secure authentication and account management.
- Establish student, parent, teacher, and school relationships.
- Introduce role-based permissions.
- Connect the frontend to a backend API.
- Implement core database models and audit logging.

### Phase 3 — Curriculum and Examination Intelligence
- Structure curriculum information by grade, subject, strand, sub-strand, and learning outcome.
- Develop examination upload and document-processing workflows.
- Map questions and answers to curriculum concepts.
- Introduce performance analysis and error classification.
- Provide teacher review and correction workflows.

### Phase 4 — AI Tutoring and Personalization
- Integrate a suitable AI model.
- Develop curriculum-grounded retrieval and response verification.
- Build the student learning profile.
- Generate personalized learning programmes.
- Adapt tutoring based on assessment evidence and student responses.

### Phase 5 — Assessments and Progress Tracking
- Introduce diagnostic and follow-up assessments.
- Track progress at topic and subject levels.
- Generate parent and teacher reports.
- Evaluate the reliability of AI-generated assessments and feedback.

### Phase 6 — Mobile Applications and Scale
- Develop dedicated mobile applications.
- Optimize for low-bandwidth environments and affordable devices.
- Introduce school administration and multi-school support.
- Evaluate performance, reliability, security, and regional curriculum requirements.
- Expand to additional African education systems when ready.

## AI Reliability and Responsible Education

ED AI is being designed around the following principles:

- **Curriculum alignment:** Educational responses should be grounded in verified, relevant curriculum materials.
- **Evidence-based personalization:** Learning recommendations should use actual student performance and observed behaviour.
- **Verification:** Important answers and assessments should be checked using appropriate sources, deterministic calculations, marking rules, or teacher review.
- **Transparency:** The system should distinguish verified results from AI-generated suggestions and uncertainty.
- **Human oversight:** Teachers should be able to review important diagnostic conclusions and learning recommendations.
- **Child safety:** The platform should use age-appropriate content, access controls, and safeguards against harmful interactions.
- **Data protection:** Student information must be collected, processed, retained, and shared only for appropriate, clearly defined purposes.
- **Fairness and accessibility:** The platform should support diverse learning needs and avoid unsupported assumptions about a student's abilities.

AI-generated analysis is intended to support educational decisions, not replace teachers' professional judgment.

## Security and Privacy

Because ED AI will serve children and process educational records, privacy and security are core architectural requirements.

Planned safeguards include:

- Role-based access control.
- Secure authentication and session management.
- Encryption in transit and appropriate encryption at rest.
- Restricted access to examination scripts and student profiles.
- Audit logs for sensitive actions.
- Secure handling of uploaded files.
- Appropriate parental or guardian involvement.
- Data retention and deletion policies.
- Evaluation of applicable Kenyan data protection and children's data requirements.

Production deployment should not begin until appropriate security, privacy, and compliance reviews have been completed.

## Contributing

ED AI is an evolving technology project. Contributions should follow the project's coding conventions and prioritize maintainability, security, accessibility, and educational reliability.

Before submitting changes:

1. Install project dependencies.
2. Run the linter.
3. Verify that the production build succeeds.
4. Test affected user flows.
5. Document new environment variables and integrations.
6. Avoid committing secrets, private student records, or production credentials.

## Project Status

**Status:** In development.

The React + Vite frontend is the starting point for the broader ED AI platform. AI-powered diagnostics, adaptive tutoring, curriculum intelligence, mobile applications, and production infrastructure should be treated as planned capabilities until they have been implemented and tested.

## Long-Term Vision

ED AI aims to establish a scalable educational intelligence platform that connects curriculum knowledge, examination analysis, adaptive tutoring, and measurable learning outcomes.

The long-term objective is to help every learner understand what they know, identify what they need to improve, and follow a personalized path toward stronger academic performance.

**ED AI — Understand the learner. Personalize the journey. Measure the progress.**
