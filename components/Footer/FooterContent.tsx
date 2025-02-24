import React from "react";
import { ServicesPathTypes } from "../../types/commonTypes";

interface FooterContentProps {
  footerContentData: ServicesPathTypes[];
}

const FooterContent: React.FC<FooterContentProps> = ({ footerContentData }) => {
  return (
    <div>
      {footerContentData.length > 0 ? (
        <ul>
          {footerContentData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No footer content available.</p>
      )}
    </div>
  );
};

export default FooterContent;
