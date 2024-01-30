import React, { useEffect, useState } from "react";
import data from '../../data/team.json';
import TeamCard from "./teamCard";

export default function TeamSection() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("team-section");
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        const newScrollPercentage = (scrollY / sectionHeight) * 100;
  
        const clampedScrollPercentage = Math.min(newScrollPercentage, 100);
  
        setScrollPercentage(clampedScrollPercentage);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div id="team-section" className="w-full relative">
        <div className="w-full flex justify-between py-20">
          <div className="flex flex-col items-center gap-40">
            {data.team.slice(0, 5).map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
          <div className="relative w-[2px] bg-white">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
              style={{ top: `${scrollPercentage}%` }}
            ></div>
          </div>
          <div className="flex flex-col items-center gap-40 mt-32">
            {data.team.slice(5, 10).map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    );
  }