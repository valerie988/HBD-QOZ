interface VideoProps {
  src: string;
  poster?: string;
  title?: string;
}

const BirthdayVideo = ({ src, poster, title }: VideoProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 text-center">
          {title}
        </h2>
      )}

      <div className="w-full md:w-100 lg:w-112.5">
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          muted
          loop
          className="w-full rounded-xl shadow-lg border-2 border-red-400"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default BirthdayVideo;