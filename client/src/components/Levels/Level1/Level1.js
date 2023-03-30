import React from 'react';
import Level from '../../../containers/Level/Level';

const API_URL = '/levelOne';

const LEVEL = 1;

const level1 = props => {
    return (
        <Level level={LEVEL} url={API_URL} />
    )
}

export default level1;
