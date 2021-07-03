// domain/.netlify/functions/1-hello
// exports
// const person ={ name: 'Bobby' }

const person = { name: 'Bobby'}
exports.handler = async (event, context, cb) => {
    
    return {
        statusCode: 200,
        body: 'Hello Bobby (Example)',
    }
}