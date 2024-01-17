import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList(props) {
  console.log(props);
  const { items, how } = props;
  console.log(how);

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
}
