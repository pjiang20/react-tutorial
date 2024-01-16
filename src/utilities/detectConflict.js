const getDays = (s) => s.split(' ')[0];

const parseDays = (s) => getDays(s).split('').filter((char) => char != 'T');

const detectDayConflict = (s1, s2) => {
    const array1 = parseDays(s1);
    const array2 = parseDays(s2);
    return array1.some((char) => array2.includes(char));
};

const getTimes = (s) => s.split(' ')[1];

const parseTimes = (s) => getTimes(s).split('-').map((time) => + time.replace(':', ''));

const detectTimeConflict = (s1, s2) => {
    const [start1, end1] = parseTimes(s1);
    const [start2, end2] = parseTimes(s2);
    return (start1 < end2 && start2 < end1);
}

const detectDayTimeConflict = (s1, s2) => (
    (!s1 || !s2)
    ? false
    : (detectDayConflict(s1, s2) && detectTimeConflict(s1, s2))
);

export const detectConflict = (course1, course2) => (
    // course1.term === course2.term && detectDayTimeConflict(course1.meets, course2.meets)
    detectDayTimeConflict(course1.meets, course2.meets)
);

