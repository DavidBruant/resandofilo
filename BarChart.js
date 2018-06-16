import Bouture from 'https://rawgit.com/DavidBruant/bouture/master/bouture.js'

/*
    <div class="barchart">
        <div> <!-- 100% --> 
            <div class="height"></div>
            <div class="name">Paris</div> 
        </div>
    </div>
*/
export default function BarChart(data){
    const max = Math.max(...data.map(({amount}) => amount));

    return Bouture.div({class: 'barchart'}, data.map(({name, amount}) => {
        return Bouture.div({}, [
            Bouture.div({class: "height", style: `height: ${amount/max*100}%`}),
            Bouture.div({class: "name"}, name)
        ])
    })).getElement()
}