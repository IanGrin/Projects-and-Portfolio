const weightedLottery = weights => {
    let containerArray = [];
    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })
    return containerArray[(Math.random() * containerArray.length) | 0]
}

const weights = {
    winning: 1,
    losing: 5
}

weightedLottery(weights);//?