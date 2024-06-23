interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} className="h-full w-full object-cover" alt={alt} />;
};

export default Image;
