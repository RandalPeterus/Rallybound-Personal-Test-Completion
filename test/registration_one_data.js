export default class RegistrationOneData {
    // Each grouping is one input. Each group should have an element called during each instance of filling the form
    // Each input is identified by their tag
    // use RegistrationOneData.firstName.<tag> to access the value
    static firstName = { 
        V1: 'Jimbo',
        V2: 'John-Jacob',
        V3: "O'connel",
        V4: 'Rául',
        X1: 'B@rt',
        X2: 'Agent47',
        X3: '',
        B1: 'Gus',
        B2: 'smittywarbenjaegermanjensonsmittywarbenjaegermanjensonsmittywarb',
        B3: 'Guug',
        B4: 'smittywarbenjaegermanjensonsmittywarbenjaegermanjensonsmittywar',
        D1: 'Ug',
        D2: 'smittywarbenjaegermanjensonsmittywarbenjaegermanjensonsmittywarbe',
    }

    static lastName = {
        V5: 'Stevenson',
        V6: 'Li-An',
        V7: "O'Malley",
        V8: "José",
        X4: 'St@n',
        X5: 'Ben10',
        X6: '',
        B5: 'Dan',
        B6: 'ReadableLetterStringThatIsEasyToSeeAndCountWithoutAnyNumbersHere',
        B7: 'Dani',
        B8: 'eadableLetterStringThatIsEasyToSeeAndCountWithoutAnyNumbersHere',
        D3: 'Pd',
        D4: 'ReadableLetterStringThatIsEasyToSeeAndCountWithoutAnyNumbersHereA',
    }
    static email = {
        V9: 'ryan.sfiligoi+somethingvalid1@gmail.com',
        V10: 'ryan.sfiligoi+&@gmail.com',
        V11: 'ryan.sfiligoi+67@gmail.com',
        V12: 'ryan.sfiligoi+Rául@gmail.com',
        X7: 'ry@an.sfiligoigmail.com',
        X8: '',
        B9: 'ryan.sf@gmail.com',
        B10: 'ryan.sfiligoi+smittywarbenjaegermanjensonsmittywarbenjaegermanje@gmail.com',
        B11: 'ryan.sfi@gmail.com',
        B12: 'ryan.sfiligoi+mittywarbenjaegermanjensonsmittywarbenjaegermanje@gmail.com',
        D5: 'ryan.s@gmail.com',
        D6: 'ryan.sfiligoi+smittywarbenjaegermanjensonsmittywarbenjaegermanjen@gmail.com',
    }
    static password = {
        V13: 'P@ss1234',
        V14: 'Pass1234',
        X9: 'p@ss1234',
        X10: 'P@SS1234',
        X11: 'P@ssword',
        X12: 'Jimbo',
        X13: 'Stevenson',
        X14: 'ryan.sfiligoi+somethingvalid1@gmail.com',
        X15: '',
        B13: 'P@s123',
        B14: 'P@ss123456789012345678901234567890123456789012345678901234567890',
        B15: 'P@s1234',
        B16: 'P@s123456789012345678901234567890123456789012345678901234567890',
        D7: 'P@s12',
        D8: 'P@ss1234567890123456789012345678901234567890123456789012345678901',
    }
    //The VX,VB, and VD cases are to make sure the password matches the original password in each test case.
    static confirmPassword = {
        V15: 'P@ss1234',
        X16: '123P@ss',
        X17: '',
        VX9: 'p@ss1234',
        VX10: 'P@SS1234',
        VX11: 'P@ssword',
        VX12: 'Jimbo',
        VX13: 'Stevenson',
        VX14: 'ryan.sfiligoi+somethingvalid1@gmail.com',
        VX15: '',
        VB13: 'P@s123',
        VB14: 'P@ss123456789012345678901234567890123456789012345678901234567890',
        VB15: 'P@s1234',
        VB16: 'P@s123456789012345678901234567890123456789012345678901234567890',
        VD7: 'P@s12',
        VD8: 'P@ss1234567890123456789012345678901234567890123456789012345678901',
        VV14: 'Pass1234',
    }
    static address = {
        V16: '9825 Businesspark Ave',
        V17: '9825 Lébusinesspark Ave',
        V18: '9825 Business-park Ave',
        V19: '',
        X18: '9825 Businesspark? Ave',
        B17: 'Busi',
        B18: '12345678901234567890123456789012345678901234567890 Businessparka',
        B19: '123Bu',
        B20: '123456789012345678901234567890123456789012345678 Businesspark A',
        D9:  '123',
        D10: '12345678901234567890123456789012345678901234567890 Businesspark A',
    }
    static apt_ste_unit = {
        V20: '123',
        V21: '#13',
        V22: '',
        X19: '012345',
        X20: '42%',
        B21: '1',
        B22: '1234567890',
        B23: '12',
        B24: '123456789',
        D11: '12345678901',
    }
    static country = {
        V23: '1',
        V24: '35',
        V25: '_',//Need Custom test, update later with information needed
        X21: '_',//Need Custom test, update later with information needed
        B25: '_',//Need Custom test, update later with information needed
        D12: '_',//Need Custom test, update later with information needed
        D13: '_',//Need Custom test, update later with information needed
    }
    static city = {
        V26: 'San Diego',
        V27: 'San-Diego',
        V28: 'San Diégo',
        V29: '',
        X22: 'S@n Diego',
        X23: 'San Di3go',
        B26: 'SanD',
        B27: 'SanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiego',
        B28: 'San D',
        B29: 'SanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDieg',
        D14: 'San',
        D15: 'SanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegoSanDiegos',
    }
    static state = {
        V30: '5',
        V31: 'NY',
        V32: '_',//Need Custom test, update later with information needed
        V33: '_',//Need Custom test, update later with information needed
        X24: 'JJ',
        X25: '_',//Need Custom test, update later with information needed
        B30: 'A',
        B31: 'AZ',
        D16: 'ARZ',
    }
    static zip = {
        V34: '92131',
        V35: '',
        X26: '9213?',
        X27: '9213ó',
        X28: '92I31',
        X29: '92 31',
        B32: '92131',
        D17: '9213',
        D18: '921311',
        D19: '921',
        D20: '9213111',
    }
    static phone1 = {
        V36: '858',
        V37: '',
        X30: '85B',
        X31: '85 ',
        X32: '85$',
        X33: '85ä',
        B33: '858',
        B34: '858',
        B35: '858',
        D21: '85',
        D22: '858',
        D23: '8588',
        D24: '858',
        D25: '858',
        D26: '858',
    }
    static phone2 = {
        V36: '679',
        V37: '',
        X30: '679',
        X31: '679',
        X32: '679',
        X33: '679',
        B33: '679',
        B34: '679',
        B35: '679',
        D21: '679',
        D22: '67',
        D23: '679',
        D24: '6799',
        D25: '679',
        D26: '679',
    }
    static phone3 = {
        V36: '8800',
        V37: '',
        X30: '8800',
        X31: '8800',
        X32: '8800',
        X33: '8800',
        B33: '8800',
        B34: '8800',
        B35: '8800',
        D21: '8800',
        D22: '8800',
        D23: '8800',
        D24: '8800',
        D25: '880',
        D26: '88000',
    }
    
}