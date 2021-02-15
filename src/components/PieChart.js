import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => (
    <ResponsivePie
        data={data}
        sortByValue={true}
        valueFormat=" >-$0,~"
        margin={{ top: 20, right: 0, bottom: 10, left: -100}}
        padAngle={0.7}
        cornerRadius={0}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['brighter', '3']] }}
        radialLabelsTextXOffset={5}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={-4}
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsRadiusOffset={0.75}
        sliceLabelsTextColor="#333333"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: -5,
                translateY: -40,
                itemWidth: 98,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 11,
                itemDirection: 'left-to-right'
            }
        ]}
    />
)

export default PieChart