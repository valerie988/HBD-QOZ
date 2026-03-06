interface VideoProps {
  title?: string;
}

const BirthdayVideo = ({ title }: VideoProps) => {
  return (
    <div className="w-full mt-8 flex flex-col items-center">

      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-4">
          {title}
        </h2>
      )}

      {/* Responsive Video Container */}
      <div className="w-full aspect-video">

        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dgxhlomww&public_id=vid_oanwig&autoplay=true&muted=true"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />

      </div>

    </div>
  );
};

export default BirthdayVideo;