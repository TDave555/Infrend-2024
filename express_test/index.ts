import express from 'express';

const greetings: Record<string, string> = {
    en: 'Hello',
    hu: 'Szia',
    es: 'Hola',
    ru: 'Привет',
    cz: 'Ahoj',
    fr: 'Bonjour',
    jf: 'Konnichiwa',
    jp: 'こんにちは',
};

const app = express();

app.use(express.json());

app.get('/api/greet', (req, res) => {0
    res.json({ message: 'Hello World!' });
});

app.get('/api/greet/:name', (req, res) => {
    //read name from URL path (e.g. /api/greet/Feri)
    const name = req.params.name;
    
    //read languge from query params (e.g. /api/greet/Feri?lang:en)
    const languge = req.query.lang as string;

    if(!languge) {
        return res.status(400).json( { error : 'Language is required.' });
    }

    if(!Object.keys(greetings).includes(languge)) {
        res.status(400).json({ error : 'Languge is  not supported' });
    }
  
    res.json({message: greetings[languge] + ' ' + name + '!' });
})

app.post('/api/greet', (req, res)=> {
    // { "lang": "it", "greet": "Ciao" }

    const languge = req.body.lang;
    const greet = req.body.greet;

    if(!languge || !greet ) {
      return res.sendStatus(400).json({error: 'Lanugage and greet must be given!'});
    }

    if(Object.keys(greetings).includes(languge)){
        return res.sendStatus(409).json({error:'Given language already exists'});
    }

    greetings[languge] = greet;
    res.send();
});

app.listen(3000, () => {
    console.log('Listening on :3000 ...');
});