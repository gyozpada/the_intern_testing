const { suite, test, before } = intern.getPlugin('interface.tdd');
const { assert } = intern.getPlugin('chai');

suite('Kalkulator', ()=>{
    //this function is run once before test
    before(async({ remote })=>{
        //to open page that want to be tested
        await remote.get('https://projects.masputih.com/calculator/')
    })
})
