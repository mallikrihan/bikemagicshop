import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

const stories = [
  { id: 1, name: 'Jason M.', bike: 'Ducati Panigale V4', text: 'The level of service here is unmatched. They tuned my V4 to absolute perfection. Best workshop in the city, hands down.', rating: 5, date: 'October 2025', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { id: 2, name: 'Elena R.', bike: 'Triumph Bonneville T120', text: 'I brought in my classic Bonnie for a full detailing and minor repairs. It looks like it just rolled out of the showroom.', rating: 5, date: 'September 2025', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { id: 3, name: 'Marcus T.', bike: 'BMW R 1250 GS', text: 'Got my GS serviced before a cross-country trip. The mechanics knew exactly what areas needed reinforcing for long hauls.', rating: 5, date: 'August 2025', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { id: 4, name: 'Sophia L.', bike: 'Kawasaki Ninja ZX-10R', text: 'Bought my riding gear here. The staff was incredibly knowledgeable and helped me find the perfect fit. Great store selection.', rating: 4.8, date: 'August 2025', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

export default function Stories() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen pb-24">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-[#111111] border-b-8 border-primary">
        <div className="absolute inset-0 opacity-20 dense-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Customer Stories
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-bold tracking-widest text-xs uppercase">
            Don't just take our word for it. Hear from those who ride with us.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 border-l-8 border-[#111111] relative shadow-sm hover:border-primary transition-colors"
            >
              <div className="absolute top-10 right-10 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(story.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} />
                ))}
              </div>
              
              <div className="flex items-center gap-6 mb-8 mt-4">
                <img src={story.img} alt={story.name} className="w-20 h-20 object-cover grayscale border-4 border-[#111111]" />
                <div>
                  <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tighter">{story.name}</h3>
                  <p className="text-primary font-bold text-[10px] tracking-widest uppercase">{story.bike}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm font-bold leading-relaxed italic border-l-4 border-gray-200 pl-6">"{story.text}"</p>
              
              <div className="mt-8 text-right">
                <span className="text-gray-600 text-sm font-mono tracking-widest uppercase">{story.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Write a review CTA */}
      <section className="mt-24 py-24 bg-primary text-white text-center px-4 dense-pattern-light border-y-8 border-[#111111]">
        <div className="bg-[#111111] max-w-3xl mx-auto p-12 shadow-2xl">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Have an experience to share?</h2>
          <p className="mb-10 text-xs font-bold tracking-widest text-gray-400 uppercase">We value your feedback to constantly improve our services.</p>
          <button className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-gray-200 transition-colors border-l-4 border-primary">
            Leave a Review
          </button>
        </div>
      </section>
    </div>
  );
}
