import React, { useState, useEffect, ChangeEvent } from 'react';
import {
    GoogleMap,
    DirectionsService,
    DirectionsRenderer,
    Marker,
    Autocomplete,
    useJsApiLoader,
} from '@react-google-maps/api';
import { Box, FormControl, InputLabel, MenuItem, Select, Skeleton, TextField } from '@mui/material';
import { routeOptions, parkingLots, defaultCenter } from '../constants/google-map';

const libraries = 'places';

const Map = () => {
    const [selectedMode, setSelectedMode] = useState<string>(routeOptions[0].travelMode);
    const [origin, setOrigin] = useState<any>('');
    const [destination, setDestination] = useState<any>('');
    const [response, setResponse] = useState<google.maps.DirectionsResult | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [trafficLayer, setTrafficLayer] = useState<google.maps.TrafficLayer | null>(null);
    // useJsApiLoader đảm bảo rằng bạn chỉ sử dụng API Google Maps khi thư viện đã được tải và sẵn sàng sử dụng
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries: [libraries],
    });

    //cảnh báo kẹt xe
    useEffect(() => {
        if (map) {
            const layer = new google.maps.TrafficLayer();
            //show traffic flow on map
            layer.setMap(map);
            setTrafficLayer(layer);
            //clear up
            return () => {
                layer.setMap(null);
            };
        }
    }, [map]);

    // check
    if (!isLoaded) {
        return <Skeleton />;
    }
    //handle travel
    const handleModeChange: any = (event: ChangeEvent<{ value: unknown }>) => {
        const selectedValue = event.target.value as string;
        setSelectedMode(selectedValue);
    };
    //handle Origin
    const handleOriginChange: any = (event: ChangeEvent<{}>, value: any) => {
        console.log(value);
        if (value) setOrigin(value);
    };
    //handle Destination
    const handleDestinationChange: any = (event: ChangeEvent<{}>, value: any) => {
        setDestination(value);
    };
    //show info
    const renderDirections = (response: google.maps.DirectionsResult | null) => {
        return response ? <DirectionsRenderer directions={response} /> : null;
    };

    // containts directions info
    const handleDirectionsServiceResponse = (
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus
    ): void => {
        console.log('kết quả', result);
        if (status === 'OK') {
            setResponse(result);
        }
    };
    //setMap when onLoad of GoogleMap
    const handleMapLoad = (map: google.maps.Map) => {
        setMap(map);
    };

    return (
        <Box>
            <GoogleMap
                onLoad={handleMapLoad}
                mapContainerStyle={{ height: '1133px', width: '100%' }}
                center={defaultCenter}
                zoom={13}
            >
                {/* tùy chỉnh đối tượng */}
                {parkingLots.map((lot) => (
                    <Marker
                        icon={{
                            url: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet.svg',
                            // eslint-disable-next-line no-undef
                            scaledSize: new google.maps.Size(20, 20),
                        }}
                        draggable={true}
                        key={lot.id}
                        position={{ lat: lot.lat, lng: lot.lng }}
                    ></Marker>
                ))}
                {origin && destination && (
                    <DirectionsService
                        options={{
                            destination: destination?.getPlace()?.formatted_address,
                            origin: origin?.getPlace()?.formatted_address,
                            travelMode: selectedMode as google.maps.TravelMode,
                        }}
                        callback={handleDirectionsServiceResponse}
                    />
                )}
                {/* hiện thị ra info */}
                {renderDirections(response)}
            </GoogleMap>
        </Box>
    );
};

export default Map;
