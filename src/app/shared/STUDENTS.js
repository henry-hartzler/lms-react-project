import aqualineSm from '../assets/img/aqualine-small.svg';
import aqualineMd from '../assets/img/aqualine-medium.svg';
import duskpinLg from '../assets/img/duskpin-large.svg';
import aqualineLg from '../assets/img/aqualine-large.svg';
import leafersMd from '../assets/img/leafers-md.svg';
import piceratopsLg from '../assets/img/piceratops-large.svg';
import piceratopsSm from '../assets/img/piceratops-sm.svg';
import starkySM from '../assets/img/starky-sm.svg';
import starkyLg from '../assets/img/starky-lg.svg';

export const getRandomAvatar = () => {
    const avatars = [
        aqualineSm,
        aqualineMd,
        aqualineLg
    ]
    const randomIdx = arr => {
        return Math.floor(Math.random() * arr.length)
    }
    return avatars[randomIdx(avatars)]
}

export const STUDENTS = [
    {
        id: 0,
        name: 'Student1',
        img: aqualineSm,
        points: 0
    },
    {
        id: 1,
        name: 'Student2',
        img: starkySM,
        points: 0
    },
    {
        id: 2,
        name: 'Student3',
        img: piceratopsSm,
        points: 0
    },
    {
        id: 3,
        name: 'Student4',
        img: leafersMd,
        points: 0
    },
    {
        id: 4,
        name: 'Student5',
        img: aqualineMd,
        points: 0
    },
    {
        id: 5,
        name: 'Student6',
        img: starkyLg,
        points: 0
    },
    {
        id: 6,
        name: 'Student7',
        img: piceratopsLg,
        points: 0
    },
    {
        id: 7,
        name: 'Student8',
        img: duskpinLg,
        points: 0
    },
    {
        id: 8,
        name: 'Student9',
        img: aqualineLg,
        points: 0
    },
];
