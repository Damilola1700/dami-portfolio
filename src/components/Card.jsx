import ddd from "../assets/ddd.png";
export default function IdCard({
  image = ddd,
  name = "Creative Dami",
  role = "Designer & Developer",
  // website = "www.yourdomain.com",
  accent = "#FF6B35",
}) {


  return (
    <div className="flex origin-top flex-col items-center text-left drop-shadow-2xl transition-transform duration-700 ease-out hover:rotate-2">
      <div className="h-20 w-12 bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950" />

      <svg
        viewBox="0 0 60 100"
        className="relative z-10 -mb-7 h-[150px] w-[90px]"
      >
        <defs>
          <linearGradient id="metal">
            <stop offset="0" stopColor="#7b7e86" />
            <stop offset="0.35" stopColor="#f2f3f5" />
            <stop offset="0.7" stopColor="#a3a6ad" />
            <stop offset="1" stopColor="#e4e5e8" />
          </linearGradient>
        </defs>
        <rect x="10" y="0" width="40" height="16" rx="4" fill="url(#metal)" />
        <path
          d="M17 14C8 30 12 46 30 48C48 46 52 30 43 14"
          fill="none"
          stroke="url(#metal)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="20" y="42" width="20" height="40" rx="8" fill="url(#metal)" />
        <path
          d="M26 78V88C26 96 34 96 34 88V78"
          fill="none"
          stroke="url(#metal)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* card */}
      <div className="relative flex min-h-[400px] w-[300px] flex-col overflow-hidden rounded-[22px] bg-neutral-950 px-[26px] pt-[30px] pb-[30px] text-white ring-1 ring-white/10">
        <div className="absolute top-[13px] left-1/2 h-2.5 w-12 -translate-x-1/2 rounded-md bg-neutral-200 shadow-inner" />

        <div className="flex h-[220px] shrink-0 bg-neutral-300">
          {image && (
            <img
              src={image}
              alt={name}
              className="h-full w-[68%] object-cover object-top grayscale"
            />
          )}
          <div
            className="ml-auto w-[32%]"
            style={{ backgroundColor: accent }}
          />
        </div>

        <div className="relative pt-4">
          <div
            className="absolute top-0 right-0 h-[62px] w-[32%]"
            style={{ backgroundColor: accent }}
          />
          <div className="relative w-[68%] pr-3">
            <p className="text-[22px] leading-tight font-semibold break-words">
              {name}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-neutral-400">
              {role}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between">
        

          
          {/* <p className="text-xs text-neutral-300">{website}</p> */}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
      </div>
    </div>
  );
}
