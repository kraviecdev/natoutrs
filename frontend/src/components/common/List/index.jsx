import { ContextHeading } from "../Title/index.js";
import { StyledLink } from "../Link/index.js";
import { ListItem, StyledList } from "./styled.js";
import { Wrapper } from "../Wrapper/index.js";
import { Paragraph } from "../Paragraph/index.js";
import Img from "../Img/index.jsx";
import Icon from "../Icon/index.jsx";

const List = ({ data }) => {
  return (
    <StyledList>
      {data &&
        data.map((item, index) => (
          <ListItem key={index}>
            <Wrapper $column $details>
              <Wrapper $icon>
                <Img alt={item.alt} src={item.src} $settings />
                <ContextHeading>{item.alt}</ContextHeading>
                <Paragraph $contrast>{item.info}</Paragraph>
              </Wrapper>
              <Paragraph $italic>{item.additional}</Paragraph>
              {item.context && (
                <Paragraph>
                  <span>{item.context}</span>
                </Paragraph>
              )}
            </Wrapper>
            <Wrapper $icon>
              <StyledLink to={`/settings/${item.route}`}>
                <Icon name="edit-2" />
              </StyledLink>
              <Icon name="trash-2" />
            </Wrapper>
          </ListItem>
        ))}
    </StyledList>
  );
};

export default List;
