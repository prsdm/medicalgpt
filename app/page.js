'use client';

import { useCompletion } from 'ai/react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import { SiHuggingface } from 'react-icons/si';
import { useRef, useEffect } from 'react';

export default function Completion() {
  const { completion, input, stop, isLoading, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/model'
  });

  const chatParent = useRef(null); // Removed the <HTMLDivElement> type annotation

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  }, [completion]);

  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-gray-50">
      <header className="p-4 w-full mx-auto">
        <h1 className="text-2xl font-bold text-center">Chat with Medquad Model</h1>
        <div className="absolute right-4 top-4 flex gap-4">
          <a href="https://github.com/prsdm/llm-application" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaGithub className="h-6 w-6 text-black" />
          </a>
          <a href="https://huggingface.co/prsdm/phi-2-medquad" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <SiHuggingface className="h-6 w-6 text-black" />
          </a>
        </div>
        <p className="text-center text-sm">Created by
          <a href="https://github.com/prsdm" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
            Prasad Mahamulkar
          </a>
        </p>
        <p className="text-center text-sm">If this doesn&apos;t work, please clone the repository and add your Hugging Face token to the .env file.</p>
      </header>

      <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
        <div ref={chatParent} className="p-4 flex-grow overflow-y-auto flex flex-col gap-4 rounded-lg">
        </div>
      </section>

      <section className="p-4">
        <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
          <input
            id="user-input"
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
          />
          <button
            disabled={isLoading}
            type="submit"
            className={`ml-2 px-4 py-2 rounded-md ${isLoading ? 'bg-gray-300' : 'bg-black hover:bg-black'} text-white focus:outline-none focus:ring focus:ring-black`}
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
