import L, { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import officeIcon from '../img/office-building.svg'
import officeIconShadow from '../img/office-building.svg'
import './icons.css'

export const IconOfficeBuilding = new Icon({
    iconUrl: officeIcon,
    shadowUrl: officeIconShadow,
    iconSize: [30, 30],
})

export const PinIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [20, 30],
})

export const CustomIcon = (iconUrl) => {
    return iconUrl === undefined || iconUrl === ''
        ? PinIcon
        : new Icon({
              iconUrl: iconUrl,
              iconSize: [30, 30],
          })
}

export const CreateClusterCustomIcon = function (cluster) {
    return L.divIcon({
        html: `<span>${cluster.getChildCount()}</span>`,
        className: 'marker-cluster-custom',
        iconSize: L.point(40, 40, true),
    })
}
