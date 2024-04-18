import { Article } from "../../_assets/Article/index.js";
import { Wrapper } from "../../_assets/Wrapper/index.js";
import { ContextHeading } from "../../_assets/Title/index.js";
import { Paragraph } from "../../_assets/Paragraph/index.js";
import Icon from "../../_assets/Icon/index.jsx";
import Img from "../../_assets/Img/index.jsx";

const ReviewCard = ({ review }) => {
  const rating = [1, 2, 3, 4, 5];

  return (
    <Article $secondary>
      <Wrapper>
        <Img
          $round
          src={`/img/users/${review.user.photo}`}
          alt={review.user.name}
        />
        <ContextHeading>{review.user.name}</ContextHeading>
      </Wrapper>
      <Paragraph $italic>{review.review}</Paragraph>
      <Wrapper $icon>
        {rating.map((rate, index) => (
          <Icon $rating={review.rating < rate} key={index} name="star" />
        ))}
      </Wrapper>
    </Article>
  );
};

export default ReviewCard;
