const { suite, test, before } = intern.getPlugin('interface.tdd');
const { assert } = intern.getPlugin('chai');

suite('Kalkulator', ()=>{
    before(async({ remote })=>{
        await remote.get('https://projects.masputih.com/calculator/')
    })
})
