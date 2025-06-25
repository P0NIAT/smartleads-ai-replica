
import React from 'react';
import VideoPlayer from '../VideoPlayer';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-beauty-purple to-beauty-pink">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            See Your Agent in <span className="text-beauty-lavender">Action</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Watch how our AI agent handles real customer conversations with the same warmth and professionalism as you would
          </p>
        </div>

        <div className="mb-8">
          <VideoPlayer
            src="/demo-video.mp4"
            poster="/demo-thumb.jpg"
            className="mx-auto"
          />
        </div>

        <p className="text-center text-lg text-white font-medium">
          Real conversation between our AI agent and a potential customer
        </p>
      </div>
    </section>
  );
};

export default Demo;
