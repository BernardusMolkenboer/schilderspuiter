import React, { useEffect } from "react";

interface AbnLogoAnimatedProps {
  className?: string;
  style?: React.CSSProperties;
}

const AbnLogoAnimatedWhite: React.FC<AbnLogoAnimatedProps> = ({
  className,
  style,
}) => {
  useEffect(() => {
    // Define animations with both standard and webkit keyframes for cross-browser compatibility
    const animationCSS = `
      @keyframes colorChangeAnimation0 {
        0%, 100% { fill: #004d40; }
        50% { fill: #4db6ac; }
      }
      @-webkit-keyframes colorChangeAnimation0 {
        0%, 100% { fill: #004d40; }
        50% { fill: #4db6ac; }
      }

      @keyframes colorChangeAnimation1 {
        0%, 100% { fill: #00796b; }
        50% { fill: #b2dfdb; }
      }
      @-webkit-keyframes colorChangeAnimation1 {
        0%, 100% { fill: #00796b; }
        50% { fill: #b2dfdb; }
      }

      @keyframes colorChangeAnimation2 {
        0%, 100% { fill: #00897b; }
        50% { fill: #80cbc4; }
      }
      @-webkit-keyframes colorChangeAnimation2 {
        0%, 100% { fill: #00897b; }
        50% { fill: #80cbc4; }
      }
    `;

    // Create a style element and inject it into the head of the document
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    styleEl.textContent = animationCSS;
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1225.73 498.7"
        className={className}
        style={style}
      >
        {/* Example path with animation, repeat as needed */}
        <path
          className="animate-colorChange"
          d="M228.27 0 15.28 124.26l57.18 31.45 52.86-31.45 99.13 58.78-49.06 29.85 57.17 30.03L441.28 121.4 228.27 0Zm-52.89 87.75 52.23-32.47 101.26 62.16-50.56 29.69-102.92-59.39Z"
          style={{
            animation: "colorChangeAnimation0 5s infinite alternate",
            WebkitAnimation: "colorChangeAnimation0 5s infinite alternate", // For Safari
          }}
        />
        <path
          className="animate-colorChange" // Add the animation class to each path
          d="m181.99 235.5-1.52-.82-7.24-3.93L0 136.68v247.79L214.88 498.7l5.72-242.24-9.93-5.39-28.69-15.58Zm-20.9 168.23-102.92-59.2v-28.04l102.92 56.86v30.38Zm0-123.07v32.3L58.17 251.85v-27.52"
          style={{
            fill: "#4d8f83",
            strokeWidth: 0,
          }}
        />
        <path
          className="animate-colorChange" // Add the animation class to each path
          d="m242.12 256.76-5.14 241.94 59.46-27.51V295.41l111.5-64.38-5.72 180.12 48.66-32.4V138.2L242.12 256.76z"
          style={{
            fill: "#77c3b5",
            strokeWidth: 0,
          }}
        />
        <path
          d="M537.33 136.69h11.24l48.88 120.93h-11.24l-14.82-37.3h-57.23l-14.82 37.3h-10.9l48.88-120.93Zm-19.25 73.92h49.39l-24.7-62.51-24.7 62.51Zm174.23-73.92c19.76 0 39.85 8.18 39.85 31.34 0 10.9-4.6 20.27-14.31 25.55 12.77 4.94 19.42 16.01 19.42 29.64 0 24.53-22.14 34.4-44.11 34.4h-44.79V136.69h43.94Zm-2.72 48.71c9.2 0 17.37-3.41 17.37-13.8s-8-13.97-17.37-13.97H672.9v27.76h16.69Zm2.38 51.27c10.56 0 19.93-3.92 19.93-15.84s-9.37-15.84-19.93-15.84h-19.08v31.68h19.08Zm61.99-99.98h38.83c24.53 0 48.03 10.56 48.03 38.83 0 13.97-8.35 27.08-20.78 33.55l27.42 48.54h-27.93l-21.63-41.9c-2.21.17-4.43.17-6.98.17-3.58 0-7.67-.34-11.92-1.02v42.75h-25.04V136.68ZM779 193.75c4.26.68 8.86 1.02 13.29 1.02 11.92 0 22.82-4.94 22.82-18.39s-10.9-18.22-22.82-18.22H779v35.6Zm122.11-57.06h26.91l48.2 120.93h-26.06l-9.88-26.57h-52.29l-9.88 26.57h-25.04l48.03-120.93Zm-5.11 72.9h36.28l-18.22-48.2-18.05 48.2Zm115.99-72.9 56.03 80.05v-80.05h24.53v120.93h-21.97l-56.04-80.05v80.05h-24.53V136.69h21.97Zm149.7 0c35.77 0 64.04 21.97 64.04 60.29s-27.42 60.63-64.38 60.63h-46.67V136.68h47.01Zm-1.53 98.45c23.33 0 39.34-13.46 39.34-37.98s-15.33-37.98-39.34-37.98h-20.1v75.96h20.1Zm-656.54 71.57 32.96 47.09v-47.09h14.43v71.13h-12.92l-32.96-47.09v47.09H490.7v-71.13h12.92Zm105 0v12.72h-30.16v15.53h26.95v12.72h-26.95v17.43h31.16v12.72h-45.59V306.7h44.58Zm24.34 0 13.02 51.4 14.13-51.4h13.73l14.13 51.4 12.92-51.4h15.23l-20.94 71.13h-14.43l-13.93-51-13.93 51h-14.63l-20.94-71.13h15.63Zm145.57-2.01c11.72 0 22.54 6.01 27.55 16.93l-5.51 2.71c-4.21-8.72-12.12-13.93-21.84-13.93-17.33 0-26.85 16.53-26.85 32.46s9.42 31.26 27.05 31.26c10.02 0 17.63-5.21 22.34-13.93l5.51 2.71c-5.31 10.92-15.83 16.93-28.05 16.93-20.44 0-33.26-17.23-33.26-36.97s12.02-38.17 33.06-38.17Zm38.67 37.57c0-19.94 12.72-37.57 34.16-37.57s34.06 17.03 34.06 37.57-12.52 37.57-34.06 37.57-34.16-17.13-34.16-37.57Zm6.41 0c0 16.23 9.82 31.86 27.65 31.86s27.75-15.13 27.75-31.86-9.62-31.86-27.75-31.86-27.65 15.13-27.65 31.86Zm81.45-35.56 27.25 50.09 27.35-50.09h5.61v71.13h-6.11v-59.51l-24.25 44.68h-5.41l-24.25-44.68v59.51h-6.11v-71.13h5.91Zm76.64 0h18.54c13.62 0 25.45 6.31 25.45 21.74s-12.82 21.64-26.85 21.64c-3.71 0-7.31-.4-11.02-.9v28.65h-6.11v-71.13Zm6.11 36.97c3.51.6 7.31.8 10.92.8 10.72 0 20.54-3.91 20.54-16.13 0-11.22-8.42-16.03-19.04-16.03h-12.42v31.36Zm67.12-36.97h6.61l28.75 71.13h-6.61l-8.72-21.94h-33.66l-8.72 21.94h-6.41l28.75-71.13Zm-11.32 43.48h29.05l-14.53-36.77-14.53 36.77Zm63.02-43.48 41.88 60.71v-60.71h6.11v71.13h-5.61l-41.88-60.61v60.61h-6.11v-71.13h5.61Zm65.22 0 21.34 36.87 21.44-36.87h6.81l-25.15 41.98v29.16h-6.31v-28.96l-25.15-42.18h7.01Z"
          style={{
            fill: "#fff",
            strokeWidth: 0,
          }}
        />
      </svg>
    </>
  );
};

export default AbnLogoAnimatedWhite;
