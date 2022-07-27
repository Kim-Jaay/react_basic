import Header from "./Header";


function App() {

  // jsx 밖의 주석
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: 'red' }} name="jay" age={26} />
      {/* 컴포넌트 자체에는 style을 줄 수 없다 */}
      <nav>
        <ul>
          <li><a href="" style={{ color: 'red', fontSize: '35px' }}>menu01</a></li>
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header >
  )
}

export default App;

