import React from 'react';
import { LinearProgress } from 'react-native-elements';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Loading = () => {
    return(
        <LinearProgress color="primary" variant="indeterminate" style={{marginTop: heightPercentageToDP('50%')}}/>
    )
}

export default Loading;