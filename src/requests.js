const getPuzzle = async (wordcount) => {
    const url = 'http://puzzle.mead.io/puzzle';
    const response = await fetch(`${url}?wordCount=${wordcount}`)
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
}

export { getPuzzle as default };