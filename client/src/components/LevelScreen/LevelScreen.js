import React, { Component } from 'react';
import LevelButton from '../UI/Button/LevelButton/LevelButton';
import LevelNoButton from '../UI/Button/LevelNoButton/LevelNoButton';
import FooterSection from '../FooterSection/FooterSection';
import ImageIcon from '../../assets/icons/picture.svg';
import AudioIcon from '../../assets/icons/audio.svg';
import VideoIcon from '../../assets/icons/youtube.svg';
import { Link } from 'react-router-dom';
import classes from './LevelScreen.module.css';

class LevelScreen extends Component {

    render() {

        return (
            <div className="App" style={{ height: '100%' }}>

                <main className={classes.PageContent}>
                    <div className={classes.LevelScreen_Header}>
                        Quizzes
                    </div>

                    <div className={classes.LevelScreen_Container}>
                        <Link to="/level1">
                            <LevelButton>
                                <img src={ImageIcon} alt="Level-1 Icon" />
                            </LevelButton>
                        </Link>

                        <Link to="/level2">
                            <LevelButton>
                                <img src={AudioIcon} alt="Level-2 Icon" />
                            </LevelButton>
                        </Link>

                        <Link to="/level3">
                            <LevelButton >
                                <img src={VideoIcon} alt="Level-3 Icon" />
                            </LevelButton>
                        </Link>
                    </div>

                    <div className={classes.LevelBtns_Container}>
                        <Link to="/level1"><LevelNoButton>Quiz 1</LevelNoButton></Link>
                        <Link to="/level2"><LevelNoButton>Quiz 2</LevelNoButton></Link>
                        <Link to="/level3"><LevelNoButton>Quiz 3</LevelNoButton></Link>
                    </div>

                </main>
                <FooterSection />
            </div>
        );
    }
}

export default LevelScreen;