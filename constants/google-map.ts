import { RouteOption, ParkingLot } from '@/models/google-map';
export const routeOptions: RouteOption[] = [
    { travelMode: 'DRIVING', label: 'DRIVING' },
    { travelMode: 'WALKING', label: 'WALKING' },
    { travelMode: 'BICYCLING', label: 'BICYCLING' },
    { travelMode: 'TRANSIT', label: 'TRANSIT' },
];

export const parkingLots: ParkingLot[] = [
    {
        id: 1,
        name: 'Parking Lot 1',
        lat: 10.960259,
        lng: 106.699358,
    },
    {
        id: 2,
        name: 'Parking Lot 2',
        lat: 10.958854,
        lng: 106.675396,
    },
    {
        id: 3,
        name: 'Parking Lot 3',
        lat: 10.959801,
        lng: 106.688926,
    },
    {
        id: 4,
        name: 'Parking Lot 3',
        lat: 10.959801,
        lng: 106.638926,
    },
];
export const defaultCenter = {
    lat: 10.959502460576132, // Vĩ độ
    lng: 106.69681440880596, // Kinh độ
};
