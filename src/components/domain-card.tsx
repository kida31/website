import { CSSProperties } from 'react';

type DomainCardProps = {
    title: string;
    description?: string;
    imgUrl?: string;
}

const parentContainer: CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "1rem",
}

const textContainerStyle: CSSProperties = {
    zIndex: 1,
}

const bgImgStyle: CSSProperties = {
    position: "absolute",
}

export default function DomainCard(props: DomainCardProps) {
    return (
        <div style={parentContainer} >
            <div style={textContainerStyle}>
                <h2>{props.title}</h2>
                {props.description ? <p>{props.description}</p> : null}
            </div>
            <img src={props.imgUrl} style={bgImgStyle} />
        </div>
    )
}
