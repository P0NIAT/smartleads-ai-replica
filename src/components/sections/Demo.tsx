
import React from 'react';
import VideoPlayer from '../VideoPlayer';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-beauty-cream">
      <div className="safe-zone">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-beauty-purple mb-6">
            See Your Agent in <span className="text-beauty-pink">Action</span>
          </h2>
          <p className="text-xl text-beauty-purple max-w-3xl mx-auto">
            Watch how our AI agent handles real customer conversations with the same warmth and professionalism as you would
          </p>
        </div>

        <div className="mb-8">
          <VideoPlayer
            src="https://kqiueydxpgxcqelzuosu.supabase.co/storage/v1/object/public/videos//Demo.mp4"
            className="mx-auto"
            autoPlay={true}
          />
        </div>

        <p className="text-center text-lg text-beauty-purple font-medium">
          Real conversation between our AI agent and a potential customer
        </p>
      </div>
    </section>
  );
};

export default Demo;
