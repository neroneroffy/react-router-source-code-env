
const ids = [1, 2, 3]

const requestDataById = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id,
                askUserId: `askUserId${id}`,
                targetSpaceId: `targetSpaceId${id}`,
                judgeSpaceId: `judgeSpaceId${id}`
            })
        }, 1000)
    })
}

const idPromiseArr = ids.map(item => {
    return requestDataById(item)
})

const requestAskUser = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: `name${id}`
            })
        }, 1000)
    })
}
const requestTarget = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                target: `target${id}`
            })
        }, 1000)
    })
}
const requestJudge = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                judge: `judge${id}`
            })
        }, 1000)
    })
}

const executor = () => {
    return Promise.all(idPromiseArr).then(listRes => {
        let requestArr = []
        listRes.map(item => {
            requestArr = requestArr.concat([
                requestAskUser(item.askUserId),
                requestTarget(item.targetSpaceId),
                requestJudge(item.judgeSpaceId),
            ])
            return null
        })
        return Promise.all(requestArr).then(nameRes => {
            for (let i = 0; i < listRes.length; i++) {
                let j = 0
                while (j < 3) {
                    const curr = nameRes.shift()
                    if (curr.name) {
                        listRes[i].name = curr.name
                    }
                    if (curr.target) {
                        listRes[i].target = curr.target
                    }
                    if (curr.judge) {
                        listRes[i].judge = curr.judge
                    }
                    j++
                }
            }
            // console.log('listRes', listRes);
            return listRes
        })
    })
}

(async () => {
    const resData = await executor()
    console.log(resData);
})()

