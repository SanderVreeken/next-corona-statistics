import { defaults, Line } from 'react-chartjs-2'
import { colors } from '../lib/constants'
import { capitalizeFirstLetter } from '../lib/utils'

// Adjusting the defaults of the chart, so this fits within the general theme.
defaults.global.defaultFontColor = 'black'
defaults.global.defaultFontSize = 15

export default function Graph({ historical }) {
    // Extracting the keys from the historical data, which normally should give an array of cases, deaths and recovered.
    const keys = Object.keys(historical)
    // Looping over the historical data to create the necessary data sets.
    const sets = keys.map((key, index) => ({
        label: capitalizeFirstLetter(key),
        fill: false,
        borderColor: colors[index],
        data: Object.values(historical[key])
    }))

    // The data constant which is used as parameter for the chart.
    const data = {
        labels: Object.keys(historical[keys[0]]),
        datasets: sets
    }

    return <Line data={data} />
}