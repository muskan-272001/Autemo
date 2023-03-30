import React, { Component } from 'react';
import axios from 'axios';
import classes from './UploadQuestion.module.css';
import uploadSvg from '../../assets/illustrations/undraw_text_field.svg';
import FooterSection from '../../components/FooterSection/FooterSection';

class UploadQuestion extends Component {
    state = {
        question: '',
        level: 'level1',
        hostedURL: '',
        correct_answer: 'happy',
        incorrect_answers: ['sad', 'angry', 'neutral'],
        options: {
            happy: 'happy',
            sad: 'sad',
            angry: 'angry',
            disgust: 'disgust',
            surprise: 'surprise',
            fear: 'fear',
            neutral: 'neutral'
        }
    };

    containerRef = React.createRef();
    wrapperRef = React.createRef();
    formRef = React.createRef();

    responseHandler = (message, classname) => {
        const div = document.createElement('div');
        div.className = classname;
        if (classname === 'Danger') {
            div.style.backgroundColor = '#f00946';
        } else {
            div.style.backgroundColor = '#24ce4a';
        }
        div.style.position = 'absolute';
        div.style.margin = '-40px 0 0 0';
        div.style.width = '100%';
        div.style.color = '#ffffff';
        div.style.padding = '10px'
        div.style.textAlign = 'center';
        div.appendChild(document.createTextNode(message));

        // const container = this.containerRef.current;
        const wrapper = this.wrapperRef.current;
        const form = this.formRef.current;

        wrapper.insertBefore(div, form);
        setTimeout(() => (
            document.querySelector('.Danger') || document.querySelector('.Success'))
            .remove(), 1000);
    }

    questionHandler = e => {
        this.setState({
            question: e.target.value
        });
    }

    hostedURLHandler = e => {
        this.setState({
            hostedURL: e.target.value
        });
    }

    levelHandler = e => {
        this.setState({
            level: e.target.value
        });
    }

    correctAnswerHandler = e => {
        const correct_answer = e.target.value;
        let incorrect_answers_obj = this.objectWithoutKey(this.state.options, correct_answer);

        const arr = [];
        for (let i = 0; i < 3; i++) {
            let x = (this.chooseRandomKey(incorrect_answers_obj));
            arr.push(x);
            incorrect_answers_obj = this.objectWithoutKey(incorrect_answers_obj, x);
        }

        // console.log('INCORRECT: ', arr);
        this.setState({
            correct_answer: e.target.value,
            incorrect_answers: arr
        });
    }

    objectWithoutKey = (object, key) => {
        const { [key]: deletedKey, ...otherKeys } = object;
        return otherKeys;
    }

    chooseRandomKey = (object) => {
        const arr = Object.keys(object);
        return arr[Math.floor(Math.random() * arr.length)];
    }

    submitHandler = e => {
        e.preventDefault();

        const ques = {
            question: this.state.question,
            hostedURL: this.state.hostedURL,
            correct_answer: this.state.correct_answer,
            incorrect_answers: this.state.incorrect_answers
        };

        const patternQuestion = ques.question;

        let shouldUploadQuestion = patternQuestion.trim('');

        if (shouldUploadQuestion !== '') {
            this.setState({
                question: ques.question
            });
        } else {
            this.responseHandler('Question Incorrect', 'Danger')
        }

        const patternURL = /\.(?:wav|mp3|mp4|webm|ogv|svg|jpeg|jpg|png|gif)/;
        let shouldUploadURL = patternURL.test(ques.hostedURL);
        if (shouldUploadURL) {
            this.setState({
                hostedURL: ques.hostedURL
            });
        } else {
            this.responseHandler('URL Incorrect', 'Danger');
        }


        // console.log(ques);

        if (shouldUploadQuestion && shouldUploadURL) {
            switch (this.state.level) {
                case 'level1': {
                    axios.post('/levelOne', ques)
                        .then(res => {
                            // console.log(res.data);
                            this.responseHandler('Question Added Successfully!', 'Success');
                        })
                        .catch(err => console.log(err));

                    break;
                }

                case 'level2': {
                    axios.post('/levelTwo', ques)
                        .then(res => {
                            // console.log(res.data);
                            this.responseHandler('Question Added Successfully!', 'Success');
                        })
                        .catch(err => console.log(err));

                    break;
                }

                case 'level3': {
                    axios.post('/levelThree', ques)
                        .then(res => {
                            // console.log(res.data);
                            this.responseHandler('Question Added Successfully!', 'Success');
                        })
                        .catch(err => console.log(err));

                    break;
                }

                default: {
                    axios.post('/levelOne', ques)
                        .then(res => console.log(res.data))
                        .catch(err => console.log(err));

                    break;
                }
            }
        }

    }

    render() {



        return (
            <div ref={this.containerRef} className={classes.Container}>
                <div ref={this.wrapperRef} className={classes.Wrapper}>

                    <form ref={this.formRef} onSubmit={this.submitHandler} className={classes.Form}>
                        <label>Question:</label>
                        <input required placeholder={'Question'} onChange={this.questionHandler} type="text" />

                        <label>Level</label>
                        <select name="Level" className={classes.Dropdown} onChange={this.levelHandler}>
                            <option value="level1">Level 1</option>
                            <option value="level2">Level 2</option>
                            <option value="level3">Level 3</option>
                        </select>

                        <label>Hosted URL of File:</label>
                        <input required placeholder={'URL'} onChange={this.hostedURLHandler} type="text" />


                        <label>Correct Answer:</label>
                        <select name="correct-answer" className={classes.Dropdown} onChange={this.correctAnswerHandler}>
                            <option value={this.state.options.happy}>Happy</option>
                            <option value={this.state.options.sad}>Sad</option>
                            <option value={this.state.options.angry}>Angry</option>
                            <option value={this.state.options.fear}>Fear</option>
                            <option value={this.state.options.surprise}>Surprise</option>
                            <option value={this.state.options.disgust}>Disgust</option>
                            <option value={this.state.options.neutral}>Neutral</option>
                        </select>

                        <label className={classes.DummyLabel} />

                        <button type="submit" className={classes.SubmitBtn}>Submit</button>


                    </form >
                </div>
                <div className={classes.ImgContainer}>
                    <img alt="Form SVG" src={uploadSvg} />
                </div>
                <FooterSection />
            </div >
        );
    }
}

export default UploadQuestion;