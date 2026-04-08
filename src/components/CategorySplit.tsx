interface CategorySplitProps {
  id?: string;
  label: string;
  title: string;
  image: string;
  alt: string;
  whatsappText: string;
  reverse?: boolean;
}

const CategorySplit = ({ id, label, title, image, alt, whatsappText, reverse }: CategorySplitProps) => {
  return (
    <section id={id} className="grid md:grid-cols-2 min-h-[550px]">
      <div className={`relative overflow-hidden ${reverse ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover min-h-[400px]"
          width={1024}
          height={1024}
        />
      </div>
      <div className={`flex flex-col items-center justify-center py-16 px-8 bg-background ${reverse ? "md:order-1" : ""}`}>
        <p className="section-label text-muted-foreground">{label}</p>
        <h2 className="section-title text-foreground mb-8">{title}</h2>
        <a
          href={`https://wa.me/2348163195023?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-see-more"
        >
          Discover
        </a>
      </div>
    </section>
  );
};

export default CategorySplit;
