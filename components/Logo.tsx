
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-16 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Background Shield */}
      <path 
        d="M256 32C180 32 110 50 100 130C90 230 110 380 256 480C402 380 422 230 412 130C402 50 332 32 256 32Z" 
        fill="#1E4D7B" 
        stroke="white" 
        strokeWidth="12"
      />
      
      {/* Inner Border Line */}
      <path 
        d="M256 50C190 50 125 65 115 135C105 225 125 365 256 460C387 365 407 225 397 135C387 65 322 50 256 50Z" 
        stroke="#4A90E2" 
        strokeWidth="4" 
        strokeDasharray="8 4"
      />

      {/* SAFEVIEW Text */}
      <text 
        x="256" 
        y="115" 
        textAnchor="middle" 
        fill="white" 
        style={{ font: 'bold 64px sans-serif', letterSpacing: '2px' }}
      >
        SAFEVIEW
      </text>

      {/* Building Silhouette */}
      <path 
        d="M130 180H180V450H130V180ZM185 160H240V450H185V160Z" 
        fill="#4A90E2" 
        opacity="0.8"
      />
      
      {/* Windows on Building */}
      <rect x="140" y="210" width="10" height="15" fill="#1E4D7B" />
      <rect x="160" y="210" width="10" height="15" fill="#1E4D7B" />
      <rect x="140" y="240" width="10" height="15" fill="#1E4D7B" />
      <rect x="160" y="240" width="10" height="15" fill="#1E4D7B" />
      
      <rect x="195" y="190" width="12" height="18" fill="#1E4D7B" />
      <rect x="215" y="190" width="12" height="18" fill="#1E4D7B" />
      <rect x="195" y="225" width="12" height="18" fill="#1E4D7B" />
      <rect x="215" y="225" width="12" height="18" fill="#1E4D7B" />

      {/* Protection Net Mesh (Hexagonal pattern) */}
      <path 
        d="M260 200L280 190L300 200L300 220L280 230L260 220V200ZM300 200L320 190L340 200L340 220L320 230L300 220ZM280 230L300 240L320 230M260 260L280 250L300 260L300 280L280 290L260 280V260ZM300 260L320 250L340 260L340 280L320 290L300 280ZM340 200L360 190L380 200L380 220L360 230L340 220V200Z" 
        stroke="white" 
        strokeWidth="2" 
        opacity="0.6"
      />
      <path 
        d="M340 260L360 250L380 260L380 280L360 290L340 280V260ZM300 320L320 310L340 320L340 340L320 350L300 340V320Z" 
        stroke="white" 
        strokeWidth="2" 
        opacity="0.6"
      />

      {/* Bottom Curved Text - Path */}
      <path id="curve" d="M120 380C160 440 352 440 392 380" fill="transparent" />
      <text fill="white" style={{ font: 'bold 32px sans-serif' }}>
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          TELAS DE PROTEÇÃO
        </textPath>
      </text>
    </svg>
  );
};

export default Logo;
