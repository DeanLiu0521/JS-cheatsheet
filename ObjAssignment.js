var voxel = {x: 3.6, y: 7.4, z: 6.53};

const {x:a, y: b, z: c} = voxel;

const AVE_TEMPERATURES = {
    today : 77.5,
    tomorrow: 79
};
function getTempOfTmrw(ave_temperatures){
    "use strict";
    const {tomorrow: tempOfTomorrow} = ave_temperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVE_TEMPERATURES));