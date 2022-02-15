const levels = [
    {id:1, level:1, minExp: 0, maxExp:999},
    {id:2, level:2, minExp: 1000, maxExp:2999},
    {id:3, level:3, minExp: 3000, maxExp:5999},
    {id:4, level:4, minExp: 6000, maxExp:9999},
    {id:5, level:5, minExp: 10000, maxExp:14999},
    {id:6, level:6, minExp: 15000, maxExp:20999},
    {id:7, level:7, minExp: 21000, maxExp:27999},
    {id:8, level:8, minExp: 28000, maxExp:35999},
    {id:9, level:9, minExp: 36000, maxExp:44999},
    {id:10, level:19, minExp: 45000, maxExp:54999},
]

const getLevel = experience => {
    const { level } = levels.find(lvl => lvl.minExp > experience && lvl.maxExp > experience);

    return level;
}

export default getLevel;