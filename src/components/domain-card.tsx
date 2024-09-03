type DomainCardProps = {
    title: string;
    description?: string;
}

export default function DomainCard(props: DomainCardProps) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            {props.description ? <p>{props.description}</p> : null}
        </div>
    )
}
