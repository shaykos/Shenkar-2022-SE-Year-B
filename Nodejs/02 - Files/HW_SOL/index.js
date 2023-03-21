const { Create, ConcatFiles } = require('./functions');

async function Main() {

    await Create(1, 'hello1');
    await Create(2, 'hello2');
    await Create(3, 'hello3');
    await Create(4, 'hello4');
    await Create(5, 'hello5');

    await ConcatFiles();
}

Main();