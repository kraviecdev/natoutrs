import { Article } from "../common/Article/index.js";
import { SecondaryHeading } from "../common/Title/index.js";
import DetailBox from "../common/DetailBox/index.jsx";

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
