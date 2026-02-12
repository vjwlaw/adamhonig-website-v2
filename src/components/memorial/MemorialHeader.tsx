interface MemorialHeaderProps {
  name: string;
  years: string;
  backgroundImage: string;
  publishedDate?: string;
}

export default function MemorialHeader({ name, years, backgroundImage, publishedDate }: MemorialHeaderProps) {
  return (
    <header
      className="relative flex items-center justify-center text-center text-white"
      style={{
        height: '50vh',
        minHeight: '300px',
        maxHeight: '500px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-[3.5rem] font-bold mb-2 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}>
          {name}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-0 italic text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          {years}
        </p>
        {publishedDate && (
          <p className="mt-8 text-sm opacity-80">{publishedDate}</p>
        )}
      </div>
    </header>
  );
}
