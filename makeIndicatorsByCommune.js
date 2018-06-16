
export const displayedCommunes = new Set(['Orion', 'Antarés', 'Solmiré','Andromède','Sirius','Réfaci','Barbotine','Pulsar','Fassila','Altaïr'])

function makeIndicatorsByCommune(rows){
    const indicatorsByCommune = new Map()

    for(const row of rows){
        const indicators = indicatorsByCommune.get(row['libsiret']) || {}
        indicators[ row["shortlibindic"] ] = row['mntf']
        indicators[ 'pop_totale' ] = row['pop_totale']
        indicatorsByCommune.set(row['libsiret'], indicators)
    }

    return indicatorsByCommune
}

export default function(){
    return fetch('./pool.json').then(resp => resp.json())
    .then(data => {
        return makeIndicatorsByCommune(
            data.filter(d => d["exges"] === "2017").filter(d => displayedCommunes.has(d["libsiret"]))
        )
    })
}