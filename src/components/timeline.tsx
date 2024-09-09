type TimelineItemProps = {
  time?: string;
  timeAlignment?: "left" | "right";
  title?: string;
  contentAlignment?: "left" | "right";
  children?: React.ReactNode;
  boxed?: boolean;
}

function TimelineItem(props: TimelineItemProps) {
  const {
    time,
    title,
    children,
    contentAlignment = "left",
    boxed = false,
  } = props;

  const TimelineBar = () => {
    return <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  }

  return (
    <li>
      <TimelineBar />
      <div className={"mb-10 " + (contentAlignment === "left" ? "timeline-start md:text-end" : "timeline-end")}>
        <div className={boxed ? "timeline-box" : ""}>
          {!!time && <time className="font-mono italic">{time}</time>}
          {!!title && <div className="text-lg font-black">{title}</div>}
          {children}
        </div>
      </div>
      <hr />
    </li>
  );
}

type TimelineProps = {
  items: {
    time?: string;
    title?: string;
    content?: React.ReactNode;
  }[];
  boxed?: boolean;
  alignment?: "left" | "right" | "alternating";
}

function Timeline({
  items,
  alignment = "alternating",
  boxed }: TimelineProps) {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {items?.map((item, index) =>
        <TimelineItem
          key={index}
          time={item.time}
          title={item.title}
          boxed={boxed}
          contentAlignment={alignment === "alternating" ? (index % 2 === 0 ? "left" : "right") : alignment}
        >
          {item.content}
        </TimelineItem>
      )}
    </ul>
  );
}

export default Timeline;