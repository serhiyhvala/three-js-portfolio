import features from '@constants/features.json'
import {
	Annotation,
	ComposableMap,
	Geographies,
	Geography
} from 'react-simple-maps'

const MapChart = () => {
	return (
		<ComposableMap
			projection='geoAzimuthalEqualArea'
			projectionConfig={{
				rotate: [-40.0, -50.0, 0],
				center: [-5, -3],
				scale: 400
			}}
			style={{
				width: '100%',
				height: '100%'
			}}
		>
			<Geographies
				geography={features}
				fill='#2C065D'
				stroke='#FFFFFF'
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
				}
			</Geographies>
			<Annotation
				subject={[12, 43]}
				dx={-50}
				dy={-30}
				connectorProps={{
					stroke: '#FFF',
					strokeWidth: 2,
					strokeLinecap: 'round'
				}}
			>
				<text x='-8' textAnchor='end' alignmentBaseline='middle' fill='#FFF'>
					{'Italy'}
				</text>
			</Annotation>
			<Annotation
				subject={[30, 50]}
				dx={90}
				dy={-30}
				connectorProps={{
					stroke: '#FFF',
					strokeWidth: 2,
					strokeLinecap: 'butt'
				}}
			>
				<text x='55' textAnchor='end' alignmentBaseline='baseline' fill='#FFF'>
					{'Ukraine'}
				</text>
			</Annotation>
		</ComposableMap>
	)
}

export default MapChart
