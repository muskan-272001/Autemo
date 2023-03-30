import faceExpressions from '../../../assets/gifs/faceExpressions.gif';
import hero from '../../../assets/gifs/hero.gif';
import scientists from '../../../assets/gifs/scientists.gif';
import level1 from '../../../assets/gifs/level1.gif';
import level2 from '../../../assets/gifs/level2.gif';
import level3 from '../../../assets/gifs/level3.gif';
import form from '../../../assets/gifs/form.gif';

export const homeObjHero = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Recognize Emotions',
    headLine: 'AUTEMO',
    description: 'Helping users suffering from Autism Spectrum Disorder with interpreting emotions.',
    buttonLabel: 'Get Started',
    buttonLink: '/levels',
    imgStart: '',
    src: hero,
    alt: 'Robot GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary'
}


export const homeObjDoctor = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Research',
    headLine: 'Scientific Approach',
    description: 'Improving emotional intelligence of the users by Gamifying the learning process, with a scientific approach.',
    buttonLabel: 'Learn more',
    buttonLink: '/credits',
    imgStart: 'start',
    src: scientists,
    alt: 'Scientists GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary',
}

export const homeObjImage = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Easy',
    headLine: 'IMAGES',
    description: 'Helping users recognizing emotions using facial expressions.',
    buttonLabel: 'Take Quiz',
    buttonLink: '/level1',
    imgStart: '',
    src: level1,
    alt: 'Image GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary'
}

export const homeObjAudio = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Medium',
    headLine: 'AUDIO',
    description: 'Helping users recognizing complex emotions in voices.',
    buttonLabel: 'Take Quiz',
    buttonLink: '/level2',
    imgStart: 'start',
    src: level2,
    alt: 'Audio GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary'
}

export const homeObjVideo = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'HARD',
    headLine: 'VIDEOS',
    description: 'Helping users recognizing complex emotions with videos.',
    buttonLabel: 'Take Quiz',
    buttonLink: '/level3',
    imgStart: '',
    src: level3,
    alt: 'Video GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary'
}

export const homeObjCamera = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Real Time',
    headLine: 'Sentiment Analysis',
    description: 'Helping users recognize emotions with real-time sentiment analysis',
    buttonLabel: 'Go Live',
    buttonLink: '/camera',
    imgStart: 'start',
    src: faceExpressions,
    alt: 'Senitment Analysis GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary'
}

export const homeObjUpload = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Customize',
    headLine: 'Upload',
    description: 'Customize quizzes according to your needs by adding questions',
    buttonLabel: 'Upload Now',
    buttonLink: '/upload',
    imgStart: '',
    src: form,
    alt: 'Form GIF',
    btnSize: 'WideBtn',
    btnColor: 'BlueClr',
    btnStyle: 'Primary'
}