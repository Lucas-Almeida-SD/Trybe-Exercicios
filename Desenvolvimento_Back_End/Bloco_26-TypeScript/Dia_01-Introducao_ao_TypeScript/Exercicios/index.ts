import readline from 'readline-sync';

const availableScripts = ['length', 'mass', 'capacity', 'area', 'volume'];

const script = () => {
  try {
    console.log('----------------------------------');
    console.log('Scripts disponíveis:');
    console.log('----------------------------------');
    availableScripts.forEach((s, index) => console.log(`(${index + 1}) - ${s}`));
    console.log('----------------------------------');

    const selected = readline.questionInt('Escolha seu script: ');
    console.log('----------------------------------');

    if (selected < 1 || selected > availableScripts.length) {
      throw new Error('Script does not exists');
    }
    
    require(`./${availableScripts[selected - 1]}.ts`);
  } catch (err: any) {
    console.log(err.message);
  }
}

script();