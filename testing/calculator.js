const { suite, test, before } = intern.getPlugin('interface.tdd');
const { assert } = intern.getPlugin('chai');

suite('Kalkulator', ()=>{
    //this function is run once before test
    before(async({ remote })=>{
        //to open page that want to be tested
        await remote.get('https://projects.masputih.com/calculator/')
    })

    test('Kalkulator ada di page, tombol lengkap', async ({remote})=>{
        
        display = await remote.findById('answer'); //find element by ID 'answer'
        const displayText = await display.getVisibleText();
        assert.equal(displayText,'0')

        const btn0 = await remote.findDisplayedById('zeroButton');
        assert.exists(btn0);
        numericButtons.push(btn0);

        const btn1 = await remote.findDisplayedByCssSelector('button[value="1"]');
        assert.exists(btn1);
        numericButtons.push(btn1);

        const btn2 = await remote.findDisplayedByCssSelector('button[value="2"]');
        assert.exists(btn2);
        numericButtons.push(btn2);

        const btn3 = await remote.findDisplayedByCssSelector('button[value="3"]');
        assert.exists(btn3);
        numericButtons.push(btn3);

        const btn4 = await remote.findDisplayedByCssSelector('button[value="4"]');
        assert.exists(btn4);
        numericButtons.push(btn4);

        const btn5 = await remote.findDisplayedByCssSelector('button[value="5"]');
        assert.exists(btn5);
        numericButtons.push(btn5);

        const btn6 = await remote.findDisplayedByCssSelector('button[value="6"]');
        assert.exists(btn6);
        numericButtons.push(btn6);

        const btn7 = await remote.findDisplayedByCssSelector('button[value="7"]');
        assert.exists(btn7);
        numericButtons.push(btn7);

        const btn8 = await remote.findDisplayedByCssSelector('button[value="8"]');
        assert.exists(btn8);
        numericButtons.push(btn8);

        const btn9 = await remote.findDisplayedByCssSelector('button[value="9"]');
        assert.exists(btn9);
        numericButtons.push(btn9);

        decimalBtn = await remote.findDisplayedByCssSelector('button[value="."]');
        assert.exists(decimalBtn);

        ACBtn = await remote.findDisplayedByCssSelector('button[value=ac]');
        assert.exists(ACBtn);

        CEBtn = await remote.findDisplayedByCssSelector('button[value=ce]');
        assert.exists(CEBtn);

        divideBtn = await remote.findDisplayedByCssSelector('button[value="/"]');
        assert.exists(divideBtn);

        multiplyBtn = await remote.findDisplayedByCssSelector('button[value="*"]');
        assert.exists(multiplyBtn);

        subtractBtn = await remote.findDisplayedByCssSelector('button[value="-"]');
        assert.exists(subtractBtn);

        addBtn = await remote.findDisplayedByCssSelector('button[value="+"]');
        assert.exists(addBtn);

        eqBtn = await remote.findDisplayedByCssSelector('equalButton');
        assert.exists(eqBtn);

    });

    test('Tombol angka', async({remote})=>{
        
        let displayText;

        //click button 1
        await numericButtons[1].click();
        //check display, number must be 1
        displayText = await display.getVisibleText();
        assert.equal(displayText,'1');

        //click button 2
        await numericButtons[2].click();
        //check display, number must be 12
        displayText = await display.getVisibleText();
        assert.equal(displayText,'12');

        //click button 3
        await numericButtons[3].click();
        //check display, number must be 123
        displayText = await display.getVisibleText();
        assert.equal(displayText,'123'); 

    });
});