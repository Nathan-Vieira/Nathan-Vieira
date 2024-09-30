export const ProfileButton = (props) => {
  console.log("profilebutton");
  return (
    <div>
      {props.projectdata.map((val) => {
        return (
          <div key={val.id}>
            <h3>{val.name}</h3>
            <p>-{val.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
