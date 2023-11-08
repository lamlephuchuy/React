import React from "react";
import ReactDOM from "react-dom";
import './App.css';

class Drum extends React.Component {
    playSound = () => {
        const audio = new Audio(this.props.src);
        audio.addEventListener('loadeddata', () => {
            audio.play().catch(error => console.log(error));
        });
    }

    render() {
        return (
            <button onClick={this.playSound} className={this.props.className}>
                {this.props.letter}
            </button>
        );
    }
}

class DrumList extends React.Component {
    render() {
        const drums = [
            { letter: 'w', src: 'sound1.mp3', className: 'drum' },
            { letter: 'a', src: 'sound2.mp3', className: 'snare' },
            { letter: 's', src: 'sound3.mp3', className: 'floortom' },
            { letter: 'd', src: 'sound4.mp3', className: 'hihat' },
            { letter: 'j', src: 'sound5.mp3', className: 'cymbal' },
            { letter: 'k', src: 'sound6.mp3', className: 'ridecymbal' },
            { letter: 'l', src: 'sound7.mp3', className: 'crash' },
        ];

        return (
            <div className="btt">
                <div className="drums">
                    {drums.map((drum, index) => 
                        <Drum key={index} {...drum} />
                    )}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<DrumList />, document.getElementById('root'));
