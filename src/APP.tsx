const App: React.FC = () => {
    const handleOnClick = () => {
      // クリックされた要素に応じた処理を行う。
    };
    return (
      <div className="App">
        <ul>
          {["dog", "cat", "rabbit"].map(v => (
            <li onClick={handleOnClick} key={v}>
              {v}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  