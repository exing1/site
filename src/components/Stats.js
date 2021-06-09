function Stat(props) {
  return (
    <div className="stat">
      <h2 className="head2">
        {props.title}
      </h2>
      <div className="sm">
        {props.info}
      </div>
    </div>
  )
}

function Stats() {
  const create = (title, info) => {
    return {title: title, info: info};
  }
  const stats = [];
  stats.push(create("Brown University", "Applied Mathematics-Computer Science Sc.B. and Economics A.B. GPA: 4.0"));
  stats.push(create("Top 3% Speedcuber", "globally ranked, semifinalist in 8 official competitions"));
  stats.push(create("Table Tennis Champion", "at 2018 JOOLA North American Teams Championship"));
  stats.push(create("Professional Magician", "with over 100 performances"));
  stats.push(create("Best Public Speaker", "Brown Entrepreneurship Program Innovation Dojo Fall 2019 Cohort"));
  stats.push(create("Over 100k Views", "on YouTube with over 2.7k likes"));
  stats.push(create("Over 100 Hours", "of volunteer work for World Cube Association, hospitals, and learning centers"));
  stats.push(create("Hackathon Winner", "of the WolframAlpha and Contrary Venure Capital Awards at Hack@Brown 2021"));

  let i = 0;
  return (
    <>
      {stats.map((obj) => {return <Stat title={obj.title} info={obj.info} key={i++}/>})}
    </>
  );
}

export default Stats;