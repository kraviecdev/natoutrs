import { Article } from "../../_assets/Article/index.js";
import { SecondaryHeading } from "../../_assets/Title/index.js";
import DetailBox from "./DetailBox/index.jsx";

const DetailsCard = ({ title, data }) => {
  return (
    <Article $secondary $noshadow>
      <SecondaryHeading>{title}</SecondaryHeading>
      {data &&
        data.map((data, index) => (
          <DetailBox
            key={index}
            src={data.src}
            alt={data.alt}
            icon={data.icon}
            text={data.text}
            info={data.info}
          />
        ))}
    </Article>
  );
};

export default DetailsCard;
