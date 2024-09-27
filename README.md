# Large Language Model Application 🗣️

This project is built using Next.js and integrates a Medquad Large Language Model from Hugging Face🤗. This is the sample project on how to deploy LLM models in production, based on this [documentation](https://sdk.vercel.ai/providers/legacy-providers/hugging-face). 

The model is trained on a labeled dataset using the Supervised fine tuning (SFT) method. The labeled dataset typically contains examples of instruction (input) and response (output) pairs relevant to the task. In this process, the model learns how to respond to specific instructions.

Check the Model training part and article here:

[![GitHub](https://img.shields.io/badge/Github-code-blue?style=flat&logo=github&logoColor=white&color=red)](https://github.com/prsdm/fine-tuning-llms/blob/main/Fine-tuning-phi-2-model.ipynb) [![Medium](https://img.shields.io/badge/Medium-view_article-green?style=flat&logo=medium&logoColor=white&color=green)](https://medium.com/@prasadmahamulkar/fine-tuning-phi-2-a-step-by-step-guide-e672e7f1d009)

![Demo](<public/demo.gif>) 

## Getting Started

#### Clone the repository:
```bash
git clone https://github.com/prsdm/llm-app.git
```
```bash
cd llm-app
```
#### Install dependencies:
Make sure you have Node.js installed.
```bash
npm install
# or
yarn install
```
#### Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


