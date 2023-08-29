const Rank = ({ userEntires ,userName}) => {
  return (
    <div>
      <div className="white f3">{`${userName}, your current rank is...`}</div>
      <div className="white f1">{userEntires}</div>
    </div>
  );
};

export default Rank;
