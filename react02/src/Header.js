export default function Header(props) {
    return (
        <>
            <div style={{ color: "pink" }}>
                {props.name}는 {props.age}살이 맞습니다.</div>
        </>
    )
}