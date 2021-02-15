import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => (
    <ResponsivePie
        data={data}
        sortByValue={true}
        valueFormat=" >-$0,~"
        margin={{ top:10, right: 0, bottom: 20, left: 0}}
        padAngle={0.7}
        cornerRadius={0}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['brighter', '3']] }}
        radialLabelsTextXOffset={3}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={-4}
        radialLabelsLinkDiagonalLength={5}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsRadiusOffset={0.55}
        sliceLabelsTextColor="#333333"
        legends={[
            {
                anchor: 'right',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 65,
                itemWidth: 100,
                itemHeight: 15,
                itemsSpacing: 2,
                symbolSize: 10,
                itemDirection: 'left-to-right'
            }
        ]}
    />
)

export default PieChart