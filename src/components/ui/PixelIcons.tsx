import React from 'react';

const PixelGrid = ({ grid, className = "" }: { grid: string[]; className?: string }) => {
  const height = grid.length;
  const width = grid[0].length;
  
  return (
    <svg 
      viewBox={`0 0 ${width} ${height}`} 
      className={`inline-block w-[1.2em] h-[1.2em] pixel-render ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {grid.map((row, y) => 
        row.split('').map((char, x) => 
          char === '1' ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1.1" height="1.1" fill="currentColor" />
          ) : null
        )
      )}
    </svg>
  );
};

// 12x12 grids for icons

export const HomeIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000001100000",
    "000011110000",
    "000111111000",
    "001101101100",
    "011001100110",
    "110001100011",
    "000000000000",
    "001111111100",
    "001100001100",
    "001100001100",
    "001111111100",
    "001111111100",
  ]} />
);

export const SwordIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000000000011",
    "000000000111",
    "000000001110",
    "000000011100",
    "000000111000",
    "000001110000",
    "000011100000",
    "001111000000",
    "011111100000",
    "001111000000",
    "110100000000",
    "011000000000",
  ]} />
);

export const SparkleIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000001100000",
    "000001100000",
    "000011110000",
    "000111111000",
    "001111111100",
    "111111111111",
    "111111111111",
    "001111111100",
    "000111111000",
    "000011110000",
    "000001100000",
    "000001100000",
  ]} />
);

export const CastleIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "110110110110",
    "110110110110",
    "111111111111",
    "111111111111",
    "011111111110",
    "011100001110",
    "111100001111",
    "111100001111",
    "111101101111",
    "111101101111",
    "111111111111",
    "111111111111",
  ]} />
);

export const TrophyIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "111111111111",
    "111111111111",
    "011111111110",
    "001111111100",
    "000111111000",
    "000011110000",
    "000001100000",
    "000001100000",
    "000011110000",
    "000111111000",
    "001111111100",
    "111111111111",
  ]} />
);

export const MailIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000000000000",
    "011111111110",
    "110000000011",
    "101000000101",
    "100100001001",
    "100010010001",
    "100001100001",
    "100000000001",
    "100000000001",
    "110000000011",
    "011111111110",
    "000000000000",
  ]} />
);

export const PlayIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000000000000",
    "001100000000",
    "001111000000",
    "001111110000",
    "001111111100",
    "001111111111",
    "001111111111",
    "001111111100",
    "001111110000",
    "001111000000",
    "001100000000",
    "000000000000",
  ]} />
);

export const DocIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "001111111000",
    "011000001100",
    "010000000110",
    "010111100010",
    "010000000010",
    "010111110010",
    "010000000010",
    "010111110010",
    "010000000010",
    "010111110010",
    "011000000110",
    "001111111100",
  ]} />
);

export const ChatIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000000000000",
    "011111111110",
    "110000000011",
    "100111111001",
    "100000000001",
    "100111111001",
    "100000000001",
    "110000000011",
    "011111111110",
    "000001100000",
    "000011000000",
    "000110000000",
  ]} />
);

export const GithubIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000111111000",
    "011111111110",
    "011001100110",
    "011001100110",
    "111111111111",
    "110111111011",
    "010011110010",
    "001001100100",
    "001101101100",
    "000110011000",
    "000011110000",
    "000000000000",
  ]} />
);

export const PhoneIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000011110000",
    "000111111000",
    "000110011000",
    "000110011000",
    "000110011000",
    "000110011000",
    "000110011000",
    "000110011000",
    "000110011000",
    "000111111000",
    "000011110000",
    "000000000000",
  ]} />
);

export const LocationIcon = ({ className }: { className?: string }) => (
  <PixelGrid className={className} grid={[
    "000011110000",
    "000111111000",
    "001100001100",
    "001101101100",
    "001101101100",
    "001100001100",
    "000111111000",
    "000011110000",
    "000001100000",
    "000001100000",
    "000001100000",
    "000000000000",
  ]} />
);
