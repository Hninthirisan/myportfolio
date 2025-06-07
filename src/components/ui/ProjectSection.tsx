"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/style/project-cards.css";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <div className="card glitter">
      <div className="content-box">
        <span className="card-title">{title}</span>
        <p className="card-content">{description}</p>
        <Link href={link} target="_blank">
          <span className="see-more">Explore</span>
        </Link>
      </div>
      <div className="date-box">
        <Image
          src={image}
          alt="preview"
          width={60}
          height={60}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export const ProjectSection = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description:
        "A machine learning project that predicts the likelihood of heart disease using health-related data.",
      link: "https://github.com/Hninthirisan/heart-disease-prediction",
      image: "/heart.png",
    },
    {
      title: "Cancer Cells Classification",
      description:
        "A model that classifies cell samples to help distinguish between benign and malignant cases.",
      link: "https://github.com/Hninthirisan/cancer-cell-classification",
      image: "/cancer.png",
    },
    {
      title: "Calories Burnt Prediction",
      description:
        "A predictive system that estimates calorie expenditure based on user activity data.",
      link: "https://github.com/Hninthirisan/calories-burnt-prediction",
      image: "/calories.png",
    },
    // Add more projects here
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
