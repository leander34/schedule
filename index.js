const nodeSchedule = require('node-schedule')

// const data = new Date().setSeconds(2000)


const job = nodeSchedule.scheduleJob('*/5 * * * * *', () => {
    console.log('executando job')
})

// console.log(job.nextInvocation())

setTimeout(() => {
    job.cancel()
}, 10000)