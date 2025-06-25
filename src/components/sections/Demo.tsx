
import React from 'react';
import VideoPlayer from '../VideoPlayer';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-smart-light-gray">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-smart-navy mb-6">
            See Your Agent in <span className="text-smart-cyan">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

        <p className="text-center text-lg text-smart-navy font-medium">
          Real conversation between our AI agent and a potential customer
        </p>
      </div>
    </section>
  );
};

export default Demo;
