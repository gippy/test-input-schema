const Apify = require('apify');

Apify.main(async () => {
    const input = await Apify.getInput();

    const output = {
        receivedInput: input,
        message: 'Hello sir!',
    };
    console.log('Output:');
    console.dir(output);
    await Apify.setValue('OUTPUT', output);
});