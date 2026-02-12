type PreviewProps = {
  contentCode: string;
};
const Preview = ({ contentCode }: PreviewProps) => {
  return (
    <div className="bg-white flex-1 relative">
      <iframe srcDoc={contentCode} sandbox="allow-scripts" className="w-full" />
    </div>
  );
};

export default Preview;
