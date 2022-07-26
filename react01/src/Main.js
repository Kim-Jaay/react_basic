const Main = ({ kim, work }) => {

    return (
        <main>
            {kim} is {work}ing.
        </main>
    )
}

// 전달받은 값이 없을때 기본으로 전해주는 값
Main.defaultProps = {
    work: 'sleep'
}
export default Main;