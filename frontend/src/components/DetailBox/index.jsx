const DetailBox = ({ label, text, icon, src, alt }) => {
  return (
    <div className="overview-box__detail">
      {icon ? (
        <svg className="overview-box__icon">
          <use href={`/img/icons.svg#icon-${icon}`} />
        </svg>
      ) : (
        <img className="overview-box__img" src={src} alt={alt} />
      )}
      {label && <span className="overview-box__label">{label}</span>}
      {text && <span className="overview-box__text">{text}</span>}
    </div>
  );
};

export default DetailBox;
