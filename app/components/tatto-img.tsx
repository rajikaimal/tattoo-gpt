export default function TattooImg({ src }: { src: string }) {
  return (
    <div className="flex justify-center pt-5">
      <img className="w-96 h-96 object-cover rounded-lg" src={src} alt="img" />
    </div>
  );
}
