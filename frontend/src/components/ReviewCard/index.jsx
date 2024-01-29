import Img from "../Img/index.jsx";
import { Wrapper } from "../Wrapper/index.js";
import { ContextHeading } from "../Title/index.js";
import { Paragraph } from "../Paragraph/index.js";
import Icon from "../Icon/Icon.jsx";

const ReviewCard = ({ review }) => {
  const rating = [1, 2, 3, 4, 5];

  return (
    <Wrapper $column $review>
      <Wrapper>
        <Img
          $user
          src={`/img/users/${review.user.photo}`}
          alt={review.user.name}
        />
        <ContextHeading>{review.user.name}</ContextHeading>
      </Wrapper>
      <Paragraph $italic>{review.review}</Paragraph>
      <Wrapper>
        {rating.map((rate, index) => (
          <Icon $rating={review.rating < rate} key={index} name="star" />
        ))}
      </Wrapper>
    </Wrapper>
  );
};

export default ReviewCard;
