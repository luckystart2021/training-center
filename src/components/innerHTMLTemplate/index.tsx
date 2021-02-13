import React from "react";
type TInnerHTMLTemplate = {
  stringHTML: string;
};

export const InnerHTMLTemplate: React.FC<TInnerHTMLTemplate> = ({
  stringHTML,
}) => {
  const innerHTML = {
    __html: stringHTML,
  };
  return <div dangerouslySetInnerHTML={innerHTML}></div>;
};
