# LLM Application
This project is built using Next.js and integrates a Medquad Large Language Model from Hugging Face. This is the sample project on how to deploy LLM models in production. 
The model is trained on a labeled dataset using Supervised fine tuning (SFT) method. The labeled dataset typically contains examples of instruction (input) and response (output) pairs relevant to the task. In this process, the model learns how to respond to specific instructions.
Check Model traing code here: [link](https://github.com/prsdm/fine-tuning-llms/blob/main/Fine-tuning-phi-2-model.ipynb)

![Demo](<public/demo.gif>) 

## Getting Started

Clone the repository:
```bash
git clone https://github.com/prsdm/llm-app.git
```
```bash
cd llm-app
```
Install dependencies:
Make sure you have Node.js installed.
```bash
npm install
# or
yarn install
```
Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


