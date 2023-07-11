const App = () => {
  const [activeKey, setActiveKey] = React.useState("");
  const [originalStyle, setOriginalStyle] = React.useState(null);
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      play(event.key.toUpperCase());
      console.log(event.key.toUpperCase());
    });
  }, []);
  const DrumPads = [
    {
      keycode: 81,
      text: "Q",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keycode: 87,
      text: "W",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keycode: 69,
      text: "E",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keycode: 65,
      text: "A",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keycode: 83,
      text: "S",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keycode: 68,
      text: "D",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keycode: 90,
      text: "Z",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keycode: 88,
      text: "X",
      music: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keycode: 67,
      text: "C",
      music: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const play = (songId) => {
    const audio = document.getElementById(songId);
    audio.play();
    setActiveKey(songId);
    const song = DrumPads.find((pad) => pad.text === songId);

    const activeElement = document.getElementById(song.music);
    setOriginalStyle(activeElement.style.cssText);
    activeElement.style.backgroundColor = "#adb761";
    // document.getElementById(song.music).style.backgroundColor = "red";
    setTimeout(() => {
      setActiveKey("");
      activeElement.style.cssText = originalStyle;

      setOriginalStyle(null);
      // document.getElementById(song.music).style.backgroundColor = "aqua";
    }, 200);
  };

  return (
    <>
      <div className='container'>
        <div id='drum-machine'>
          <div id='display'>{activeKey}</div>
          <div className='drum-pads'>
            {DrumPads.map((data, index) => (
              <div
                onClick={() => {
                  play(data.text);
                }}
                className='drum-pad'
                id={data.music}
              >
                {data.text}
                <audio id={data.text} className='clip' src={data.music}></audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
