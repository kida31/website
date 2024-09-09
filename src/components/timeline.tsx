const TimelineNode = () => {
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

const TimelineBar = () => <hr />

type TimelineItemProps = {
  time?: string;
  title?: string;
  children?: React.ReactNode;
  alignContent: "left" | "right";
  boxed: boolean;
}

function TimelineItem({
  time,
  title,
  children,
  alignContent,
  boxed,
}: TimelineItemProps) {
  const containerClasses = [
    "mb-10",
    alignContent === "left" ? "timeline-start md:text-end" : "timeline-end",
  ]

  return (
    <>
      <TimelineNode />
      <div className={"mb-10 " + (alignContent === "left" ? "timeline-start md:text-end" : "timeline-end")}>
        {!!time && <time className="font-mono italic timeline-end">{time}</time>}
        <div className={(boxed ? "timeline-box" : "")}>
          {!!title && <div className="text-lg font-black">{title}</div>}
          {children}
        </div>
      </div>
    </>
  );
}

export type TimelineProps = {
  items: {
    time?: string;
    title?: string;
    content?: React.ReactNode;
  }[];
  boxed?: boolean;
  alignment?: "left" | "right" | "alternating";
}

export default function Timeline({
  items,
  alignment = "alternating",
  boxed
}: TimelineProps) {

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {items?.map((item, index) =>
        <li key={index}>
          {/* bar except for first item */}
          {index !== 0 && <TimelineBar />}
          <TimelineItem
            time={item.time ?? ""}
            title={item.title ?? ""}
            boxed={!!boxed}
            alignContent={
              alignment === "alternating"
                ? (index % 2 === 0 ? "left" : "right")
                : alignment
            }
          >
            {item.content}
          </TimelineItem>
          {/* bar except for last item */}
          {index !== (items.length - 1) && <TimelineBar />}
        </li>
      )}
    </ul>
  );
}
