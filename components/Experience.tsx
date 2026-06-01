import Image from "next/image";

const brands = [
  { name: "Google",       src: "/logos/google.svg",      width: 48,  height: 48  },
  { name: "Meta",         src: "/logos/facebook.png",    width: 52,  height: 52  },
  { name: "McDonald's",   src: "/logos/mcdonalds.svg",   width: 52,  height: 52  },
  { name: "Zalando",      src: "/logos/zalando.svg",     width: 140, height: 40  },
  { name: "eBay",         src: "/logos/ebay.png",        width: 120, height: 48  },
  { name: "Audi",         src: "/logos/audi.png",        width: 100, height: 36  },
  { name: "BMW",          src: "/logos/bmw.svg",         width: 56,  height: 56  },
  { name: "Mercedes-Benz",src: "/logos/mercedes.png",    width: 52,  height: 52  },
  { name: "Volkswagen",   src: "/logos/volkswagen.svg",  width: 56,  height: 56  },
  { name: "Samsung",      src: "/logos/samsung.svg",     width: 130, height: 36  },
];

export default function Experience() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">
        Experience
      </p>
      <h2 className="text-2xl sm:text-3xl font-light text-stone-950 tracking-tight mb-12 max-w-xl">
        Across brands, agencies and digital products.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-stone-100">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white flex items-center justify-center py-10 px-8"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
