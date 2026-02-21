type PreviewProps = {
  contentCode: string;
};
const Preview = ({ contentCode }: PreviewProps) => {
  return (
    <div className="bg-white h-full">
      <iframe srcDoc={contentCode} sandbox="allow-scripts allow-same-origin" />
    </div>
  );
};

export default Preview;
