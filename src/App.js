import React, { useEffect, useState } from "react";

const projects = [
  {
    title: "URL Shortener API",
    description:
      "A high-performance URL shortening service built with Go and the Gin framework, featuring Dockerized deployment. Because long URLs are just unnecessary verbosity!",
  },
  {
    title: "Order Processing Service",
    description:
      "A backend service for order processing with event-driven architecture and optimized queue management. Orders come in, magic happens, and profits go up!",
  },
  {
    title: "Duplicate File Finder CLI Tool",
    description:
      "A CLI tool to efficiently detect and remove duplicate files using hash-based comparison. Because two copies of the same file are twice the burden!",
  },
  {
    title: "GUID Generator Web App",
    description:
      "A lightweight web application for generating and managing GUIDs securely. Because randomness is key (unless you’re debugging).",
  }
];

const experiences = [
  {
    company: "Armada",
    description:
      "Developed a high-concurrency Golang service for scraping data from 2000+ terminals. Migrated data storage to PostgreSQL and orchestrated tasks using Temporal. Also, debugged things by staring at logs intensely.",
  },
  {
    company: "ShipRocket",
    description:
      "Worked in the scalability core team, optimizing high-throughput backend services and migrating services to gRPC for lower response times. Later transitioned to the data engineering team, building and maintaining data pipelines. Survived countless production issues and became best friends with logging frameworks.",
  }
];

const Portfolio = () => {
  const [spotifyTrack, setSpotifyTrack] = useState(null);
  const [exploring, setExploring] = useState([
    { title: "Event-Driven Microservices", link: "https://example.com/article1" },
    { title: "Scaling Distributed Systems", link: "https://example.com/article2" }
  ]);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer YOUR_SPOTIFY_ACCESS_TOKEN` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.item) {
          setSpotifyTrack({
            name: data.item.name,
            artist: data.item.artists.map((artist) => artist.name).join(", "),
          });
        }
      })
      .catch(() => setSpotifyTrack(null));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-2">Cyril Paul</h1>
      <p className="text-lg text-gray-400 mb-2">Software Engineer | Backend | Distributed Systems</p>
      <p className="text-gray-500 text-sm italic mb-6">"I make coffee so I can write code, then write code to make coffee."</p>
      
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 mb-6">
          Passionate about backend engineering, distributed systems, and writing scalable, efficient code.
          Also, an old-school music enthusiast who believes that debugging is best done with a vinyl playing in the background.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Projects (a.k.a. Things I broke before they worked)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Experience (a.k.a. Debugging in Production)</h2>
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{exp.company}</h2>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Currently Listening To</h2>
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          {spotifyTrack ? (
            <p className="text-gray-300">{spotifyTrack.name} - {spotifyTrack.artist}</p>
          ) : (
            <p className="text-gray-500 italic">No music playing... maybe debugging instead?</p>
          )}
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Currently Exploring</h2>
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <ul>
            {exploring.map((article, index) => (
              <li key={index} className="text-gray-300">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Connect With Me</h2>
        <div className="bg-gray-800 p-4 rounded-2xl shadow-lg">
          <p className="text-gray-300">LinkedIn: <a href="https://linkedin.com/in/cyrilpaul98/" className="text-blue-400 hover:underline">linkedin.com/in/cyrilpaul98/</a></p>
          <p className="text-gray-300">Spotify: "We may not work together, but we can vibe." 🎵</p>
        </div>
      </div>
      
      <footer className="mt-10 text-gray-500 text-sm text-center">
        <p>404 - Talent Not Found (Just Kidding) 🚀</p>
        <p>I communicate in JSON, but only when deserialized properly.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
