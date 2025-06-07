import React from "react";
import { focusAreas } from "@/data/focusArea";

const FocusAreaSection: React.FC = () => {
  return (
    <section id="focus-areas" className="py-10 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{area.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {area.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreaSection;
