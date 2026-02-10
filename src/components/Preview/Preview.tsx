import React from "react";

type PreviewProps = {
  contentCode: string;
};
const Preview = ({ contentCode }: PreviewProps) => {
  return (
    <div className="bg-white h-full">
      <iframe srcDoc={contentCode} sandbox="allow-scripts" />
    </div>
  );
};

export default Preview;
